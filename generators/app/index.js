#!/usr/bin/env node

import Generator from 'yeoman-generator';
import util from 'util';
import childProcess from 'child_process';
import { testValidInputValue, testValidPasswordValue } from './utils.js';

const exec = util.promisify(childProcess.exec);

export default class extends Generator {
  constructor(args, opts) {
    super(args, opts, { customInstallTask: true });
    this.answers = {};
  }

  async prompting() {
    const prompt = (name, message, defaultValue = name) => ({
      type: 'input',
      name,
      message,
      default: defaultValue,
      validate: name === 'databaseUserPassword' ? testValidPasswordValue : testValidInputValue,
    });

    const nameAnswer = await this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: 'my-project-name',
    });

    const otherAnswers = await this.prompt([
      prompt('databaseName', 'What will be your MYSQL database name?', `${nameAnswer.name}_database`),
      prompt('databaseUser', 'What will be your database user name?', 'admin'),
      prompt('databaseUserPassword', 'What will be your database user password?', 'password'),
      prompt('databasePort', 'What port will your database run on?', '3306'),
    ]);

    this.answers = { ...nameAnswer, ...otherAnswers };

    this.log(
      'You chose: \n' +
        Object.entries(this.answers)
          .map(([key, value]) => `  ${key}: ${value}`)
          .join('\n')
    );
  }

  async writing() {
    const projectName = this.answers.name;
    this.destinationRoot(this.destinationPath(projectName));
    this.log(`Creating a new directory: ${projectName}`);
    this.log('Copying template files...');
  
    // Copies all non-template files (ignoring `.ejs`)
    this.fs.copy(this.templatePath(), this.destinationPath(), {
      globOptions: { dot: true, ignore: ['**/*.ejs'] },
    });
  
    const packageJsonPath = this.destinationPath('package.json');
    try {
      const packageJson = this.fs.readJSON(packageJsonPath);
      packageJson.name = projectName;
      packageJson.description = 'Your project description';
      packageJson.version = '1.0.0';
      this.fs.writeJSON(packageJsonPath, packageJson);
  
      const templateVariables = {
        ...packageJson,
        ...this.answers,
      };
  
      // Copy and template individual `.ejs` files
      const copyTpl = (src, dest) => {
        this.fs.copyTpl(
          this.templatePath(`${src}.ejs`),
          this.destinationPath(dest),
          templateVariables
        );
      };
  
      // Template file-specific copying
      copyTpl('README.md', 'README.md');
      copyTpl('.env', '.env');
      copyTpl('app/layout.tsx', 'app/layout.tsx');
      copyTpl('scripts/connect-to-mysql.sh', 'scripts/connect-to-mysql.sh');
      copyTpl('docker-compose.yml', 'docker-compose.yml');
  
      // Special handling for `.gitignore` - copy and then delete the original
      this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
      this.fs.delete(this.destinationPath('gitignore'));
  
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
    this.log(`💥 BOOM! 🎉 New Integrity app has been created. Let's make something awesome.`);
  }
}
