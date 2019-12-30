'use strict';

const tagList = require('water-helper-maps/out/maps/water-tags.json');

const getTags = () => {
  const tags = {};
  const prefixTags = {};

  Object.keys(tagList).forEach((tagKey) => {
    const waterTag = tagKey.replace(/w?-(\w)/g, ($1, $2) => {
      return $2.toLocaleUpperCase();
    });
    tags[tagKey] = waterTag;
    prefixTags[waterTag] = tagKey;
  });

  return {
    tags,
    prefixTags,
  };
};

const { tags, prefixTags } = getTags();

exports.tags = tags;

exports.prefixTags = prefixTags;
