Generator-Integrity [![Main Build](https://github.com/integritystl/generator-integrity/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/integritystl/generator-integrity/actions?query=workflow)
===================
A Next.js + Prisma + Cypress project generator using current tools and frameworks (as of 2023) at [Integrity Web Consulting](https://www.integrityxd.com/).

## Requirements
* Node v16.x - Node version 16.x is required. Versions less than or greater than 16 will not build
* Docker
* Docker-Compose.

## Usage
```bash
# you do not need to enter a project name, it will ask you for one
npx -p yo -p generator-integrity@latest -c 'yo integrity'

# cd into new project
cd my-new-project

# startup new project
./local-start.sh
```

When you run it you'll be asked to pick your preferences for:
* Project Name
* Database Name (defaults to 'my-project-name_database')
* Database User Name (defaults to 'admin')
* Database User Password (default to 'password')
* Database Port (default 3306)

### Development
For development, you'll need to install the yo package globally, `npm install -g yo`

Make your changes and then:
```bash
# build/compile the generator /dist folder
yarn build
# link this package to your global npm packages
npm link

# now from any directory you can use the linked package just like a global package
cd ..
yo integrity
```

If making multiple changes, may need to unlink and relink.
```bash
npm unlink generator-integrity && yarn build && npm link
```

If you run into issues performing `npm unlink generator-integrity` such as peer dependency issues, you can also forcibly delete the it using `npm uninstall -g generator-integrity`

#### Note about generators
For any yeoman-generator, the repo name property must be prefixed by 'generator-'. The `keywords` property must contain "yeoman-generator" and the repo must have a description to be indexed by yeoman's generators page. The `files` property must be an array of files and directories that is used by this generator.

### Pushing commits
Before pushing, make sure the linter and tests pass:
```bash
yarn lint
yarn test
```
There is no CI setup that runs these tests automatically, so make sure to run them before pushing.

### Publishing to NPM
Example scenario, how to publish a new version called 1.2.3
1. Update package.json `version` to be `1.2.3`
2. Build app with `yarn build`
3. Run linter and tests with `yarn lint && yarn test`
4. Add your changes to git and commit with a descriptive message.
5. Push up to `main` branch
6. Create tag with `git tag 1.2.3`
7. Push tag up with `git push --tags`
8. In Github, create a new Release using tag 1.2.3 and make sure to check the box to make latest release. Name is 'Release 1.2.3' and some description.
9. In terminal, run `npm publish` and you will be asked by npmjs.com to enter the one-time-password which is emailed to dev-team@integrityxd.com.
> Integrity has a dev-team@integrityxd.com npm user in TeamPassword if you need to log into the NPM website to manage the package there.
