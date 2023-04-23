import { readFileSync } from 'fs';
import path from 'path';
import buildTree from './buildTree.js';
import getParse from './parsers.js';
import generationFormat from '../formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const fixturesPath1 = path.resolve('__fixtures__', filepath1);
  const fixturesPath2 = path.resolve('__fixtures__', filepath2);
  const content1 = readFileSync(fixturesPath1, 'utf8');
  const content2 = readFileSync(fixturesPath2, 'utf8');
  const fileEnd1 = path.extname(filepath1);
  const fileEnd2 = path.extname(filepath2);
  const obj1 = getParse(content1, fileEnd1);
  const obj2 = getParse(content2, fileEnd2);
  const nodes = buildTree(obj1, obj2);
  return generationFormat(nodes, formatName);
};
export default genDiff;
