// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let result = [];
  if (typeof obj === 'number') {
    return `${obj}`;
  }

  if (obj === null) {
    return `${obj}`;
  }

  if (typeof obj === 'boolean') {
    return `${obj}`;
  }

  if (typeof obj === 'string') {
    return `"${obj}"`;
  }

  if (Array.isArray(obj)) {
    // if (obj.length === 0) {
    //   return '[]';
    // }

    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return `[${result}]`;

  }

  if (typeof obj === 'object') {
    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + result + '}';
  }

};
