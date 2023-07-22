function hasSpace(packageName) {
  const spaceRegex = /\s/;
  return spaceRegex.test(packageName);
}

function hasInvalidSpacesPackageName(packageName) {
  if (packageName === undefined) {
    return false;
  }
  const trimmedName = packageName.trim();
  return packageName === trimmedName && !this.hasSpace(packageName);
}

function hasInvalidCharacters(packageName) {
  // Regular expression to match the invalid characters
  const invalidCharRegex = /[~)('!*]/;
  return invalidCharRegex.test(packageName);
}

function hasTooLongPackageName(packageName) {
  if (packageName === undefined) {
    return false;
  }
  const maxLength = 214;
  return packageName.length <= maxLength;
}

function isUrlSafe(packageName) {
  const urlSafeRegex = /^[a-zA-Z0-9-_]+$/;
  return urlSafeRegex.test(packageName);
}

function hasUpperCase(packageName) {
  const upperCaseRegex = /[A-Z]/;
  return upperCaseRegex.test(packageName);
}

function isUndefinedOrEmpty(packageName) {
  return packageName === undefined || packageName.trim().length === 0;
}

function startsWithDotOrUnderscore(packageName) {
  return packageName.startsWith('.') || packageName.startsWith('_');
}

function testValidInputValue(input) {
  if (isUndefinedOrEmpty(input)) {
    return 'Project name cannot be empty'
  } else if (hasUpperCase(input)) {
    return 'Project name cannot have uppercase letters'
  } else if (!isUrlSafe(input)) {
    return 'Project name can only contain letters, numbers, dashes, and underscores'
  } else if (startsWithDotOrUnderscore(input)) {
    return 'Project name cannot start with a period or underscore'
  } else if (hasInvalidSpacesPackageName(input)) {
    return 'Project name cannot contain leading, trailing spaces, or spaces between characters'
  } else if (hasInvalidCharacters(input)) {
    return 'Project name cannot contain ~ ) ( \' * !'
  } else if (hasTooLongPackageName(input)) {
    return 'Project name cannot be longer than 214 characters'
  }
  return true
}

function testValidPasswordValue(input) {
  if (isUndefinedOrEmpty(input)) {
    return 'Password cannot be empty'
  } else if (hasInvalidSpacesPackageName(input)) {
    return 'Password cannot contain spaces'
  }
  return true
}

export default {
  testValidInputValue,
  testValidPasswordValue,
}