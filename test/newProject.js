import { fileURLToPath } from 'url'
import path from 'path';
import fs from 'fs'
import { assert } from 'chai'
import helpers from 'yeoman-test'
import assertFile from 'yeoman-assert'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const appGeneratorPath = path.join(__dirname, '../generators/app')

describe('Yeoman generator tests', function () {
  let destinationPath; // Store the destination path between each test

  before(function () {
    // Create the temporary directory before all tests
    fs.mkdirSync(path.join(__dirname, 'temp'));

    return helpers
      .run(appGeneratorPath)
      .inTmpDir((dir) => {
        destinationPath = dir;
        return destinationPath;
      })
      .withPrompts({
        name: 'zebra',
        databaseName: 'zebra',
        databaseUser: 'admin',
        databaseUserPassword: 'password',
        databaseLocalContainerName: 'localdb',
        databaseTestContainerName: 'testdb',
      });
  });

  after(function () {
    // Cleanup the temporary directory after all tests
    fs.rmdirSync(path.join(__dirname, 'temp'), { recursive: true });
  });

  it('should generate package.json file with correct content', function () {
    assertFile('package.json', (content) => {
      const packageJson = JSON.parse(content);
      assert.equal(packageJson.name, 'zebra');
    });
  });

  it('should generate Meta.tsx file with correct content', function () {
    assertFile('App.js', (content) => {
      assert.include(content, `const Meta = ({ title = 'zebra'`);
    });
  });

  it('should create files in the correct destination folder', function () {
    assert.isTrue(fs.existsSync(path.join(destinationPath, 'zebra')));
  });
});
