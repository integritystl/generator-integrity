import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import { assert } from 'chai'
import helpers from 'yeoman-test'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const appGeneratorPath = path.join(__dirname, '../generators/app')
const tempDir = path.join(__dirname, 'temp')

describe('Yeoman Generator Tests', function () {
  let destinationPath

  function shouldCreateFile (p) {
    it(`should create ${p}`, function () {
      assert.isTrue(fs.existsSync(path.join(destinationPath, p)))
    })
  }

  function shouldHaveCorrectContent ({ filePath, containedString }) {
    it(`should find ${filePath} with the correct content`, function () {
      const content = fs.readFileSync(path.join(destinationPath, filePath), 'utf-8')
      assert.include(content, containedString)
    })
  }

  before(function () {
    fs.mkdirSync(tempDir)

    return helpers
      .run(appGeneratorPath)
      .inTmpDir((dir) => {
        destinationPath = dir
        return destinationPath
      })
      .withPrompts({
        name: 'zebra',
        databaseName: 'zebra',
        databaseUser: 'admin',
        databaseUserPassword: 'password',
        databaseLocalContainerName: 'localdb',
        databaseTestContainerName: 'testdb'
      })
  })

  after(function () {
    fs.rmdirSync(tempDir, { recursive: true })
  })

  describe('General Tests', function () {
    const paths = [
      'zebra',
      'zebra/components/Meta.tsx',
      'zebra/components/Footer.tsx',
      'zebra/cypress/e2e/home.cy.js',
      'zebra/cypress/fixtures/example.json',
      'zebra/cypress/support/commands.ts',
      'zebra/cypress/support/e2e.ts',
      'zebra/database/items.ts',
      'zebra/fonts/Lora',
      'zebra/fonts/Roboto',
      'zebra/lib/constants.ts',
      'zebra/lib/prisma.ts',
      'zebra/pages/_app.tsx',
      'zebra/pages/_document.tsx',
      'zebra/pages/index.tsx',
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
      'zebra/scripts/test-db.sh',
      'zebra/styles',
      'zebra/.babelrc',
      'zebra/.env',
      'zebra/.eslintrc.json',
      'zebra/.gitignore',
      'zebra/.prettierignore',
      'zebra/all-tests.sh',
      'zebra/amplify.yml',
      'zebra/ci.sh',
      'zebra/create-migrations.md',
      'zebra/cypress.config.ts',
      'zebra/docker-compose.test.yml',
      'zebra/docker-compose.yml',
      'zebra/local-start.sh',
      'zebra/next.config.js',
      'zebra/package.json',
      'zebra/postcss.config.js',
      'zebra/prettier.config.js',
      'zebra/README.md',
      'zebra/tailwind.config.js',
      'zebra/tsconfig.json',
      'zebra/yarn.lock'
    ]

    paths.forEach(p => shouldCreateFile(p))
  })

  describe('Content Tests', function () {
    const assertions = [
      { filePath: `zebra/components/Meta.tsx`, containedString: `const Meta = ({ title = 'zebra', ` },
      { filePath: `zebra/cypress/e2e/home.cy.js`, containedString: `cy.title().should('eq', 'zebra')` },
      { filePath: `zebra/scripts/connect-to-mysql.sh`, containedString: `DOCKER_CONTAINER="testdb"` },
      { filePath: `zebra/scripts/connect-to-mysql.sh`, containedString: `MYSQL_DATABASE="zebra"` },
      { filePath: `zebra/.env`, containedString: `DATABASE_URL="mysql://root:password@localhost:3306/zebra"` },
      { filePath: `zebra/.env`, containedString: `LOCAL_DATABASE_URL="mysql://admin:password@localhost:3306/zebra"` },
      { filePath: `zebra/.env`, containedString: `TEST_DATABASE_URL="mysql://admin:password@localhost:3306/zebra?connection_limit=0&pool_timeout=0&socket_timeout=5"` },
      { filePath: `zebra/.env`, containedString: `LOCAL_MYSQL_CONTAINER_NAME='localdb'` },
      { filePath: `zebra/.env`, containedString: `LOCAL_MYSQL_DATABASE='zebra'` },
      { filePath: `zebra/.env`, containedString: `LOCAL_MYSQL_USER='admin'` },
      { filePath: `zebra/.env`, containedString: `LOCAL_MYSQL_USER_PASSWORD='password'` },
      { filePath: `zebra/.env`, containedString: `TEST_MYSQL_CONTAINER_NAME='testdb'` },
      { filePath: `zebra/.env`, containedString: `TEST_MYSQL_DATABASE='zebra'` },
      { filePath: `zebra/.env`, containedString: `TEST_MYSQL_USER='admin'` },
      { filePath: `zebra/.env`, containedString: `TEST_MYSQL_USER_PASSWORD='password'` },
      { filePath: `zebra/docker-compose.test.yml`, containedString: `container_name: testdb` },
      { filePath: `zebra/docker-compose.yml`, containedString: `container_name: localdb` },
      { filePath: `zebra/README.md`, containedString: `zebra` },
      { filePath: `zebra/package.json`, containedString: `"name": "zebra",` }
    ]

    assertions.forEach(assertion => shouldHaveCorrectContent(assertion))
  })
})
