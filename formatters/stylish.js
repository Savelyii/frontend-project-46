import _ from 'lodash';

const getMargin = (num, str = ' ') => str.repeat(num * 4 - 2);

const stringify = (node, acc = 1) => {
  if (!_.isObject(node)) {
    return node;
  }
  const keys = _.keys(node);
  const result = keys.map((key) => {
    const nestedKey = node[key];
    return `${getMargin(acc + 1)}  ${key}: ${stringify(nestedKey, acc + 1)}`;
  });
  return `{\n${result.join('\n')}\n  ${getMargin(acc)}}`;
};

const stylish = (nodes) => {
  const iter = (node, acc = 1) => {
    switch (node.type) {
      case 'nested': {
        const nestedNodes = node.children.flatMap((child) => iter(child, acc + 1));
        return `${getMargin(acc)}  ${node.key}: {\n${nestedNodes.join('\n')}\n${getMargin(acc)}  }`;
      }
      case 'unchanged': {
        return `${getMargin(acc)} ${node.key}: ${stringify(node.value, acc)}`;
      }
      case 'deleted': {
        return `${getMargin(acc)}- ${node.key}: ${stringify(node.value, acc)}`;
      }
      case 'added': {
        return `${getMargin(acc)}+ ${node.key}: ${stringify(node.value, acc)}`;
      }
      case 'changed': {
        return `${getMargin(acc)}- ${node.key}: ${stringify(node.oldValue, acc)}\n${getMargin(acc)}+ ${node.key}: ${stringify(node.value, acc)}`;
      }
      default:
        throw new Error(`This ${node.type} is not supported`);
    }
  };
  const diff = nodes.map((item) => iter(item, 1));
  return `{\n${diff.join('\n')}\n}`;
};
export default stylish;
