const Generator = require('yeoman-generator')
const util = require('util')
const childProcess = require('child_process')
const utils = require('./utils.js')

const exec = util.promisify(childProcess.exec)

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts, { customInstallTask: true })
    this.answers = {}
  }

  async prompting () {
    const prompt = (name, message, defaultValue = name) => ({
      type: 'input',
      name,
      message,
      default: defaultValue,
      validate: name === 'databaseUserPassword' ? utils.testValidPasswordValue : utils.testValidInputValue
    })

    const nameAnswer = await this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: 'my-project-name'
    })

    const otherAnswers = await this.prompt([
      prompt('databaseName', 'What will be your MYSQL database name?', `${nameAnswer.name}_database`),
      prompt('databaseUser', 'What will be your database user name?', 'admin'),
      prompt('databaseUserPassword', 'What will be your database user password?', 'password'),
      prompt('databasePort', 'What port will be your database run on?', '3306')
    ])

    this.answers = { ...nameAnswer, ...otherAnswers }

    this.log('You chose: \n' + Object.entries(this.answers).map(([key, value]) => `  ${key}: ${value}`).join('\n'))
  }

  async writing () {
    const projectName = this.answers.name
    this.destinationRoot(this.destinationPath(projectName))
    this.log(`Creating a new directory: ${projectName}`)
    this.log('Copying template files...')
    this.fs.copy(this.templatePath(), this.destinationPath(), {
      globOptions: { dot: true, ignore: ['**/*.ejs'] }
    })

    const packageJsonPath = this.destinationPath('package.json')
    try {
      const packageJson = this.fs.readJSON(packageJsonPath)
      packageJson.name = projectName
      packageJson.description = 'Your project description'
      packageJson.version = '1.0.0'
      this.fs.writeJSON(packageJsonPath, packageJson)

      const templateVariables = {
        ...packageJson,
        ...this.answers
      }

      const copyTpl = (src, dest) => {
        this.fs.copyTpl(
          this.templatePath(`${src}.ejs`),
          this.destinationPath(dest),
          templateVariables
        )
      }

      copyTpl('README.md', 'README.md')
      copyTpl('cypress/e2e/home.cy', 'cypress/e2e/home.cy.js')
      copyTpl('components/Meta.tsx', 'components/Meta.tsx')
      copyTpl('.env', '.env')
      copyTpl('scripts/connect-to-mysql.sh', 'scripts/connect-to-mysql.sh')
      copyTpl('docker-compose.test.yml', 'docker-compose.test.yml')
      copyTpl('docker-compose.yml', 'docker-compose.yml')

      // special case for gitignore as npm publish will rename and omit .gitignore
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      )

      this.log(`Updated package.json with the new name: ${projectName}`)
    } catch (err) {
      this.log(`Error reading or updating package.json: ${err.message}`)
    }
  }

  async install () {
    this.log('Installing yarn packages...')
    await exec(`yarn install --cwd ${this.destinationPath()}`)
  }

  end () {
    this.log(`💥 BOOM! 🎉 New Integrity app has been created. Let's make something awesome.`)
  }
}
