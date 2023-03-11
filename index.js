const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

let textFile = fs.readFileSync('list.txt', 'utf8').toString();
// get user tags
var charTagPattern = /(?<=\[b\])(.*?)(?=\[\/b\])/g;
let parsed1 = textFile.match(charTagPattern);
console.log(`[1] char tags: { ${parsed1.length} }\n`);

var charTagPattern2 = /@\w+/g;
let parsed1_1 = parsed1.filter(function (c) {
    return charTagPattern2.test(c);
});
console.log(`[2] char tags: { ${parsed1_1.length } }\n`);

parsed1.slice(0,10).forEach(p => console.log(p));
console.log("\n");
parsed1_1.slice(0,10).forEach(p => console.log(p));


app.get('/', (req, res) => {
  res.send('Hello World!\n')
  res.send(`list contains { ${parsed1_1.length} } tags\n`)
  res.send("\n--- filter again ---\n")
  res.send(`list contains { ${parsed1_1.length} } tags\n`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
