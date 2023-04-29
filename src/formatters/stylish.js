import _ from 'lodash';

const getIndent = (num, str = ' ') => str.repeat(num * 4 - 2);

const stringify = (node, acc = 1) => {
  if (!_.isObject(node)) {
    return node;
  }
  const keys = _.keys(node);
  const result = keys.map((key) => {
    const nestedKey = node[key];
    return `${getIndent(acc + 1)}  ${key}: ${stringify(nestedKey, acc + 1)}`;
  });
  return `{\n${result.join('\n')}\n  ${getIndent(acc)}}`;
};

const stylish = (nodes) => {
  const iter = (node, acc = 1) => {
    switch (node.type) {
      case 'nested': {
        const nestedNodes = node.children.flatMap((child) => iter(child, acc + 1));
        return `${getIndent(acc)}  ${node.key}: {\n${nestedNodes.join('\n')}\n${getIndent(acc)}  }`;
      }
      case 'unchanged': {
        return `${getIndent(acc)}  ${node.key}: ${stringify(node.value, acc)}`;
      }
      case 'deleted': {
        return `${getIndent(acc)}- ${node.key}: ${stringify(node.value, acc)}`;
      }
      case 'added': {
        return `${getIndent(acc)}+ ${node.key}: ${stringify(node.value, acc)}`;
      }
      case 'changed': {
        return `${getIndent(acc)}- ${node.key}: ${stringify(node.oldValue, acc)}\n${getIndent(acc)}+ ${node.key}: ${stringify(node.value, acc)}`;
      }
      default:
        throw new Error(`This ${node.type} is not supported`);
    }
  };
  const diff = nodes.map((item) => iter(item, 1));
  return `{\n${diff.join('\n')}\n}`;
};
export default stylish;
