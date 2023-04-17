// import _ from 'lodash';

// const stringify = (data) => {
//   data.map((dat) => {
//     if (!_.isObject(dat)) {
//       return `${dat}`;
//     }
//     return `${data.key} : ${data.value}`;
//   });
// };

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