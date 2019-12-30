'use strict';

const loaderUtils = require('loader-utils');
const { tags, prefixTags } = require('./tag-map');

function replaceTag(source, tagMap) {
  let code = source;

  Object.keys(tagMap).forEach((i) => {
    code = code
      .replace(new RegExp(`<${i}(?!-)`, 'g'), `<${tagMap[i]}`)
      .replace(new RegExp(`<\/${i}>`, 'g'), `<\/${tagMap[i]}>`);
  });

  return code;
}

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);

  this.cacheable();

  let newSource = source;
  newSource = replaceTag(newSource, tags);

  if (options != null && 'prefix' in options && options.prefix) {
    newSource = replaceTag(newSource, prefixTags);
  }

  return newSource;
};
