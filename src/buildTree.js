import _ from 'lodash';
const buildTree = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const unionKeys = _.union(keys1, keys2).sort();
  const nodes = unionKeys.map((key) => {
    if (!Object.hasOwn(obj1, key)) {
      return { key: key, value: obj2[key], type: 'added' };
      // result[key] = 'added';
    } else if (!Object.hasOwn(obj2, key)) {
      return { key: key, value: obj1[key], type: 'deleted' };
      // result[key] = 'deleted';
    } else if (obj1[key] !== obj2[key]) {
      return {
        key: key,
        oldValue: obj1[key],
        value: obj2[key],
        type: 'changed',
      };
      // result[key] = 'changed';
    } else {
      return { key: key, value: obj1[key], type: 'unchanged' };
      // result[key] = 'unchanged';
    }
  });

  return nodes;
};
export default buildTree;
