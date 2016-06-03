export function dataSelection (obj) {
  obj.firstName = transformData(obj.firstName);
  obj.lastName = transformData(obj.lastName);

  obj.address.firstLine = transformData(obj.address.firstLine);
  obj.address.secondLine = transformData(obj.address.secondLine);
  obj.address.city = transformData(obj.address.city);

  return obj;
}

export function transformData (data) {
  if (data && typeof data === 'string') {
    return data.toLowerCase();
  }
}

export function validateObject (obj) {
  let errors = {};
  let valid = true;

  for (const prop in obj) {
    errors[prop] = validateRequired(obj[prop])
    if (errors[prop] === false) {
      valid = false;
      break;
    }
  }
  return valid;
}

export function validateRequired (data) {
  if (!data) {
    return false;
  }
  if (data && data.length > 80) {
    return false
  }
  return true;
}
