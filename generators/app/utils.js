function isEmpty (packageName) {
  return packageName === undefined || packageName.trim().length === 0
}

function startsWithDotOrUnderscore (packageName) {
  return packageName.startsWith('.') || packageName.startsWith('_')
}

function matchesRegex (packageName, regex) {
  return regex.test(packageName)
}

function testValidInputValue (input) {
  const validations = [
    { test: isEmpty, message: 'Project name cannot be empty' },
    { test: (str) => matchesRegex(str, /[A-Z]/), message: 'Project name cannot have uppercase letters' },
    { test: (str) => !matchesRegex(str, /^[a-zA-Z0-9-_]+$/), message: 'Project name can only contain letters, numbers, dashes, and underscores' },
    { test: startsWithDotOrUnderscore, message: 'Project name cannot start with a period or underscore' },
    { test: (str) => matchesRegex(str, /\s/), message: 'Project name cannot contain leading, trailing spaces, or spaces between characters' },
    { test: (str) => matchesRegex(str, /[~)('!*]/), message: 'Project name cannot contain ~ ) ( \' * !' },
    { test: (str) => str.length > 214, message: 'Project name cannot be longer than 214 characters' }
  ]

  for (const { test, message } of validations) {
    if (test(input)) return message
  }

  return true
}

function testValidPasswordValue (input) {
  const validations = [
    { test: isEmpty, message: 'Password cannot be empty' },
    { test: (str) => matchesRegex(str, /\s/), message: 'Password cannot contain spaces' }
  ]

  for (const { test, message } of validations) {
    if (test(input)) return message
  }

  return true
}

export default {
  testValidInputValue,
  testValidPasswordValue
}
