import _ from 'lodash';

const stringify = (object) => {
  if (_.isObject(object)) {
    return '[complex value]';
  }
  if (typeof object === 'string') {
    return `'${object}'`;
  }
  return object;
};

const plain = (nodes) => {
  const iter = (node, path = '') => {
    switch (node.type) {
      case 'nested': {
        return node.children.flatMap((child) => iter(child, `${path}${node.key}.`)).join('\n');
      }
      case 'unchanged': {
        return [];
      }
      case 'deleted': {
        return `Property '${path}${node.key}' was removed`;
      }
      case 'added': {
        return `Property '${path}${node.key}' was added with value: ${stringify(node.value)}`;
      }
      case 'changed': {
        return `Property '${path}${node.key}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.value)}`;
      }
      default:
        throw new Error(`This ${node.type} is not supported`);
    }
  };
  const diff = nodes.map((node) => iter(node));
  return `${diff.join('\n')}`;
};

export default plain;
