import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const stylishCorrect = readFile('stylishCorrect.txt');
const plainCorrect = readFile('plainCorrect.txt');
const jsonCorrect = readFile('jsonCorrect.txt');
const extensions = ['yml', 'json'];

test.each(extensions)('stylishTest', (ext) => {
  const fileBefore = getFixturePath(`file1.${ext}`);
  const fileAfter = getFixturePath(`file2.${ext}`);

  expect(genDiff(fileBefore, fileAfter, 'stylish')).toEqual(stylishCorrect);
});

test.each(extensions)('plainTest', (ext) => {
  const fileBefore = getFixturePath(`file1.${ext}`);
  const fileAfter = getFixturePath(`file2.${ext}`);

  expect(genDiff(fileBefore, fileAfter, 'plain')).toEqual(plainCorrect);
});

test.each(extensions)('jsonTest', (ext) => {
  const fileBefore = getFixturePath(`file1.${ext}`);
  const fileAfter = getFixturePath(`file2.${ext}`);

  expect(genDiff(fileBefore, fileAfter, 'json')).toEqual(jsonCorrect);
});
