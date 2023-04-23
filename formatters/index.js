import stylish from './stylish.js';
import plain from './plain.js';

const generationFormat = (tree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return plain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error(`Format ${format} is not supported`);
  }
};

export default generationFormat;
