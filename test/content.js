import path from 'path';
import fs from 'fs';
import { assert } from 'chai';
import helpers from 'yeoman-test';

const appGeneratorPath = path.join(new URL('.', import.meta.url).pathname, '../generators/app');
const tempDir = path.join(new URL('.', import.meta.url).pathname, 'temp');

describe('Yeoman Generator Tests', function () {
  let destinationPath;

  function shouldCreateFile(p) {
    it(`should create ${p}`, function () {
      assert.isTrue(fs.existsSync(path.join(destinationPath, p)));
    });
  }

  function shouldHaveCorrectContent({ filePath, containedString }) {
    it(`should find ${filePath} with the correct content`, function () {
      const content = fs.readFileSync(path.join(destinationPath, filePath), 'utf-8');
      assert.include(content, containedString);
    });
  }

  before(async function () {
    this.timeout(30000); // Increase timeout to 30 seconds
    
    // Clean up and create temp directory
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
    fs.mkdirSync(tempDir, { recursive: true });
  
    await helpers
      .run(appGeneratorPath)
      .inTmpDir((dir) => {
        destinationPath = dir; // Here, `dir` is the temporary directory path
      })
      .withOptions({ skipInstall: true }) // Skip yarn install during tests
      .withPrompts({
        name: 'zebra',
        databaseName: 'zebra_database',
        databaseUser: 'admin',
        databaseUserPassword: 'password',
        databasePort: '3309'
      });
  });

  after(function () {
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  describe('General Tests', function () {
    const paths = [
      'zebra',
      'zebra/components/Footer.tsx',
      'zebra/database/items.ts',
      'zebra/app/fonts/Lora',
      'zebra/app/fonts/Roboto',
      'zebra/app/favicon.ico',
      'zebra/app/globals.css',
      'zebra/app/layout.tsx',
      'zebra/app/page.tsx',
      'zebra/lib/prisma.ts',
      'zebra/prisma/data/index.ts',
      'zebra/prisma/data/items.ts',
      'zebra/prisma/migrations',
      'zebra/prisma/schema.prisma',
      'zebra/prisma/seed.ts',
      'zebra/public',
      'zebra/scripts/connect-to-mysql.sh',
      'zebra/scripts/create-migration.sh',
      'zebra/scripts/local-db.sh',
      'zebra/scripts/nuke.sh',
      'zebra/.env',
      'zebra/eslint.config.mjs',
      'zebra/.gitignore',
      'zebra/.prettierignore',
      'zebra/amplify.yml',
      'zebra/create-migrations.md',
      'zebra/docker-compose.yml',
      'zebra/local-start.sh',
      'zebra/next.config.ts',
      'zebra/package.json',
      'zebra/postcss.config.mjs',
      'zebra/prettier.config.mjs',
      'zebra/README.md',
      'zebra/tailwind.config.ts',
      'zebra/tsconfig.json',
      'zebra/yarn.lock'
    ];

    paths.forEach(p => shouldCreateFile(p));
  });

  describe('Content Tests', function () {
    const assertions = [
      { filePath: `zebra/scripts/connect-to-mysql.sh`, containedString: `DOCKER_CONTAINER="zebra_localdb"` },
      { filePath: `zebra/scripts/connect-to-mysql.sh`, containedString: `MYSQL_DATABASE="zebra_database"` },
      { filePath: `zebra/.env`, containedString: `DATABASE_URL="mysql://root:password@localhost:3309/zebra_database"` },
      { filePath: `zebra/.env`, containedString: `LOCAL_DATABASE_URL="mysql://admin:password@localhost:3309/zebra_database"` },
      { filePath: `zebra/.env`, containedString: `LOCAL_MYSQL_CONTAINER_NAME='zebra_localdb'` },
      { filePath: `zebra/.env`, containedString: `LOCAL_MYSQL_DATABASE='zebra_database'` },
      { filePath: `zebra/.env`, containedString: `LOCAL_MYSQL_USER='admin'` },
      { filePath: `zebra/.env`, containedString: `LOCAL_MYSQL_USER_PASSWORD='password'` },
      { filePath: `zebra/docker-compose.yml`, containedString: `container_name: zebra_localdb` },
      { filePath: `zebra/README.md`, containedString: `zebra` },
      { filePath: `zebra/package.json`, containedString: `"name": "zebra",` }
    ];

    assertions.forEach(assertion => shouldHaveCorrectContent(assertion));
  });
});
