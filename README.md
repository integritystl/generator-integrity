Generator-Integrity [![Main Build](https://github.com/bpkennedy/generator-integrity/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/bpkennedy/generator-integrity/actions?query=workflow)
===================
A Next.js + Prisma + Cypress project generator using current tools and frameworks (as of 2023) at [Integrity Web Consulting](https://www.integrityxd.com/).

## Requirements
* Node v16.x - Node version 16.x is required. Versions less than or greater than 16 will not build
* Docker
* Docker-Compose
> I recommend installing and using Yarn package manager. Install with `npm install --global yarn`

## Usage
```bash
# install yo, a CLI tool for running generators
npm install --global yo

# install the Integrity generator
npm install --global generator-integrity

# run it to generate your project files
yo integrity
```

When you run it you'll be asked to pick your preferences for:
* Project Name
* Database Name
* Database User Name (defaults to 'admin')
* Database User Password (default to 'password')
* Local Database Docker Container Name (defaults to 'localdb')
* Test Database Docker Container Name (defaults to 'testdb')

## Starting the new project
The new project will start a local docker container and try to use your host machine port 3306, so you need to stop any other MySQL database instance that is bound to port 3306. Then you can `cd` into your new project directory and run the shell script:
```bash
./local-start.sh
```

### Development
For this repository (the generator repo itself), the name property must be prefixed by `generator-`. The keywords property must contain "yeoman-generator" and the repo must have a description to be indexed by yeoman's generators page.

The `files` property must be an array of files and directories that is used by this generator.

### Publishing to NPM
In your terminal:
1. Update package.json 'version' to be next incrental semver number
2. Push up (which runs lint and test first)
3. Create tag with `git tag 1.0.4` (if I was creating new 1.0.4 tag)
4. Push tag up (which runs lint and test first) with `git push --tags`
In Github:
5. In Github create a new Release using that 1.0.4 tag, make sure to check the box to make latest release.
Back in your Terminal:
6. `npm publish --ignore-scripts` (you will be asked to enter the OverTheAir authentication code from your 2FA app)

