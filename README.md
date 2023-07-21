Generator-Integrity
===================
A Next.js + Prisma + Cypress project generator using current tools and frameworks (as of 2023) at [Integrity Web Consulting](https://www.integrityxd.com/).

## Requirements
* `node` v16+
* `npm` (comes with node)
* `docker`
* `docker-compose`

## Installation
Get the global package:
```bash
npm install -g generator-integrity
```

## Usage
Create a new project. A subdirectory will be created with your project name.
```bash
yo integrity my-new-project
```

You'll be asked to pick your prefrences for:
* Project Name
* Database Name
* Database User Name (defaults to 'admin')
* Database User Password (default to 'password')
* Local Database Docker Container Name (defaults to 'localdb')
* Test Database Docker Container Name (defaults to 'testdb')

### Development
For this repository (the generator repo itself), the name property must be prefixed by `generator-`. The keywords property must contain "yeoman-generator" and the repo must have a description to be indexed by yeoman's generators page.

The `files` property must be an array of files and directories that is used by this generator.
