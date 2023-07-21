const Generator = require('yeoman-generator');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts, { customInstallTask: true });
    this.answers = {}; // Initialize answers object at the class level
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
      },
      {
        type: "input",
        name: "databaseName",
        message: "What will be your MYSQL database name?",
        default: this.answers.name
      },
      {
        type: "input",
        name: "databaseUser",
        message: "What will be your database user name?",
        default: 'admin'
      },
      {
        type: "input",
        name: "databaseUserPassword",
        message: "What will be your database user password?",
        default: 'password'
      },
      {
        type: "input",
        name: "databaseLocalContainerName",
        message: "What will be the name of your local database docker container?",
        default: 'localdb'
      },
      {
        type: "input",
        name: "databaseTestContainerName",
        message: "What will be the name of your test database docker container?",
        default: 'testdb'
      },
      // Demonstration of a confirm-type prompt
      // {
      //   type: "confirm",
      //   name: "cool",
      //   message: "Would you like to enable the Cool feature?"
      // },
      //
      // 
      // Demonstration of a list-type prompt
      // {
      //   type: "list",
      //   name: "database",
      //   message: "Which database do you want to use?",
      //   choices: ["MySQL", "PostgreSQL"],
      // }
    ]);
    this.log(`You chose: \n
      Project Name: ${this.answers.name} \n
      Database Name: ${this.answers.databaseName} \n
      Database User: ${this.answers.databaseUser} \n
      Database User Password: ${this.answers.databaseUserPassword} \n
      Database Local Container Name: ${this.answers.databaseLocalContainerName} \n
      Database Test Container Name: ${this.answers.databaseTestContainerName} \n
    `);
  }

  async writing() {
    const projectName = this.answers.name;
    this.destinationRoot(this.destinationPath(projectName)); // Set the destination root to the new project directory
    this.log(`Creating a new directory: ${projectName}`);
    this.log('Copying template files...');
    // Copy all files from the template directory to the destination folder
    this.fs.copy(this.templatePath(), this.destinationPath(), {
      globOptions: { dot: true, ignore: ['**/*.ejs'] } // Copy hidden files and ignore .ejs files since those only used for generator
    });

    // Modify package.json to update the "name" field with the new app name
    const packageJsonPath = this.destinationPath('package.json');
    try {
      const packageJson = this.fs.readJSON(packageJsonPath);
      packageJson.name = projectName;
      // Add any other properties you want to set from user inputs or other sources
      packageJson.description = 'Your project description';
      packageJson.version = '1.0.0';

      this.fs.writeJSON(packageJsonPath, packageJson);


      const templateVariables = {
        ...packageJson,
        ...this.answers
      }

      // Pass packageJson as an argument to the templates
      this.fs.copyTpl(
        this.templatePath('README.md.ejs'), // Source template with .ejs extension
        this.destinationPath('README.md'), // Destination file without .ejs extension
        templateVariables,
      );

      this.fs.copyTpl(
        this.templatePath('cypress/e2e/home.cy.ejs'),
        this.destinationPath('cypress/e2e/home.cy.js'),
        templateVariables,
      );

      this.fs.copyTpl(
        this.templatePath('components/Meta.tsx.ejs'),
        this.destinationPath('components/Meta.tsx'),
        templateVariables,
      );

      this.fs.copyTpl(
        this.templatePath('.env.ejs'),
        this.destinationPath('.env'),
        templateVariables,
      );

      this.fs.copyTpl(
        this.templatePath('scripts/connect-to-mysql.sh.ejs'),
        this.destinationPath('scripts/connect-to-mysql.sh'),
        templateVariables,
      );

      this.fs.copyTpl(
        this.templatePath('docker-compose.test.yml.ejs'),
        this.destinationPath('docker-compose.test.yml'),
        templateVariables,
      );

      this.fs.copyTpl(
        this.templatePath('docker-compose.yml.ejs'),
        this.destinationPath('docker-compose.yml'),
        templateVariables,
      );

      this.log(`Updated package.json with the new name: ${projectName}`);
    } catch (err) {
      this.log(`Error reading or updating package.json: ${err.message}`);
    }
  }

  async install() {
    this.log('Installing yarn packages...');
    await exec(`yarn install --cwd ${this.destinationPath()}`);
  }

  end() {
    this.log('New React app has been created based on the template successfully!');
  }
};
