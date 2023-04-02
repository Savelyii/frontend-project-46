import _ from 'lodash';
import { readFileSync } from 'fs';
import path from 'path';
import buildTree from './buildTree.js';
import stylish from './stylish.js';

const genDiff = (filepath1, filepath2) => {
  const fixturesPath1 = path.resolve('__fixtures__', filepath1);
  const fixturesPath2 = path.resolve('__fixtures__', filepath2);
  const content1 = readFileSync(fixturesPath1, 'utf8');
  const content2 = readFileSync(fixturesPath2, 'utf8');
  const obj1 = JSON.parse(content1);
  const obj2 = JSON.parse(content2);
  const nodes = buildTree(obj1, obj2);
  return stylish(nodes);
};
console.log(genDiff('file1.json', 'file2.json'));
export default genDiff;
