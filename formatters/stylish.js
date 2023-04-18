import _ from 'lodash';
// {
//   key: 'group1',
//   type: 'nested',
//   children: [
//     { key: 'baz', oldValue: 'bas', value: 'bars', type: 'changed' },
//     { key: 'foo', value: 'bar', type: 'unchanged' },
//     { key: 'nest', oldValue: [Object], value: 'str', type: 'changed' }
//   ]
// }
const stringify = (node) => {
  if (!_.isObject(node)) {
    return node;
  }
  const keys = _.keys(node);
  const result = keys.map((key) => {
    const nestedKey = node[key];
    return `${key}: ${stringify(nestedKey)}`;
  });
  // console.log(result);
  return `\n${result.join('\n')}\n`;
};

// const makeString = (value, num = 1) => {
//   if (!_.isObject(value)) {
//     return value;
//   }
//   const keys = _.keys(value);
//   const result = keys.map((key) => {
//     const nestedKey = value[key];
//     return `${setIndent(num + 1)}  ${key}: ${makeString(nestedKey, num + 1)}`;
//   });
//   return `{\n${result.join('\n')}\n  ${setIndent(num)}}`;
// };

const stylish = (nodes) => {
  const iter = (node, acc = 1) => {
    // const diff = nodes.map((node) => {
    switch (node.type) {
      case 'nested': {
        const nestedNodes = node.children.flatMap((child) => iter(child, ' '.repeat(acc + 1)));
        return `${node.key}: ${nestedNodes.join('\n')}`;
      }
      case 'unchanged': {
        return `   ${node.key}: ${stringify(node.value)}`;
      }
      case 'deleted': {
        return ` - ${node.key}: ${stringify(node.value)}`;
      }
      case 'added': {
        return ` + ${node.key}: ${stringify(node.value)}`;
      }
      case 'changed': {
        return ` - ${node.key}: ${stringify(node.oldValue)}\n + ${node.key}: ${stringify(node.value)}`;
      }
      default:
        return null;
    }
  };
  const diff = nodes.map((item) => iter(item, 1));
  return `{\n${diff.join('\n')}\n}`;
  // return `{\n${diff.join('\n')}gsghshs}`;
  // return diff;
};
export default stylish;
