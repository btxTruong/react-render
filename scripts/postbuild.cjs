const {resolve} = require('node:path');
const {execSync} = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const commitHash = execSync('git rev-parse --short HEAD').toString().trim();

const indexHTMLPath = resolve(__dirname, '../dist/index.html');

function fileName(name) {
  const parsed = path.parse(name);
  parsed.name = `${parsed.name}.${commitHash}`;
  parsed.base = `${parsed.name}${parsed.ext}`;
  return path.format(parsed);
}

fs.readFile(indexHTMLPath, 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }

  const indexName = fileName('index.js');
  const clientName = fileName('client.js');
  const devtoolsName = fileName('devtools.js');

  let result = data.replace(new RegExp(indexName, 'g'),
      `react-render/${indexName}`);

  result = result.replace(new RegExp(clientName, 'g'),
      `react-render/${clientName}`);

  result = result.replace(new RegExp(devtoolsName, 'g'),
      `react-render/${devtoolsName}`);

  // Write the updated content back to the file
  fs.writeFile(indexHTMLPath, result, 'utf8', function(err) {
    if (err) return console.log(err);
  });
});
