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

test.each([
  [getFixturePath('file1.json'), getFixturePath('file2.json'), stylishCorrect],
  [getFixturePath('file1.yml'), getFixturePath('file2.yml'), stylishCorrect],
  [getFixturePath('file1.json'), getFixturePath('file2.yml'), stylishCorrect],
])('stylishTest', (file1, file2, expected) => {
  expect(genDiff(file1, file2, 'stylish')).toBe(expected);
});

test.each([
  [getFixturePath('file1.json'), getFixturePath('file2.json'), plainCorrect],
  [getFixturePath('file1.yml'), getFixturePath('file2.yml'), plainCorrect],
  [getFixturePath('file1.json'), getFixturePath('file2.yml'), plainCorrect],
])('plainTest', (file1, file2, expected) => {
  expect(genDiff(file1, file2, 'plain')).toBe(expected);
});

test.each([
  [getFixturePath('file1.json'), getFixturePath('file2.json'), jsonCorrect],
  [getFixturePath('file1.yml'), getFixturePath('file2.yml'), jsonCorrect],
  [getFixturePath('file1.json'), getFixturePath('file2.yml'), jsonCorrect],
])('jsonTest', (file1, file2, expected) => {
  expect(genDiff(file1, file2, 'json')).toBe(expected);
});
