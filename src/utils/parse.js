function isBoolean(n) {
  return !!n === n;
}

function handleFieldName(fieldName) {
  return fieldName.replace(/ /g, '--');
}

function typeCheck(val) {
  if (Date.parse(val) > 0) {
    return 'date';
  }
  if (Number.isInteger(val)) {
    return 'integer';
  }
  if (isBoolean(val)) {
    return 'boolean';
  }
  return 'string';
}

const parse = (reserved, obj) => {
  const parsedObj = {};
  const keys = Object.keys(obj);

  keys
    .filter(key => !reserved.includes(key))
    .forEach((k) => {
      const type = typeCheck(obj[k]);
      parsedObj[`${type}--${handleFieldName(k)}`] = obj[k];

      delete obj[k]; // eslint-disable-line no-param-reassign
    });

  return { ...obj, custom: { ...obj.custom, ...parsedObj } };
};

export default parse;
