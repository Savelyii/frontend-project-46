import genDiff from '../src/index.js';

test('function genDiff', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(`{
   - follow: false
     host: hexlet.io
   - proxy: 123.234.53.22
   - timeout: 50
   + timeout: 20
   + verbose: true
  }`);
});
