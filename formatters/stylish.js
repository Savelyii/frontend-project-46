import _ from 'lodash';

const stringify = (data) => {
  const iter = (node, acc) => {
    const keys = _.keys(node);
    return keys.flatMap((key) => {
      if (!_.isObject(node[key])) {
        return `${node[key]} ${acc + 1}`;
      }
    });
  };
  return iter(data, '').join('\n');
};

const stylish = (nodes) => {
  const diff = nodes.map((node) => {
    switch (node.type) {
      case 'unchanged': {
        return `   ${node.key}: ${node.value}`;
      }
      case 'deleted': {
        return ` - ${node.key}: ${node.value}`;
      }
      case 'added': {
        return ` + ${node.key}: ${node.value}`;
      }
      case 'changed': {
        return ` - ${node.key}: ${node.oldValue}\n + ${node.key}: ${node.value}`;
      }
      default:
        return null;
    }
  });

  return `{\n${diff.join('\n')}\n}`;
};
export default stylish;
