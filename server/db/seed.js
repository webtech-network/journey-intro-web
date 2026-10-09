// Cria o arquivo de runtime server/db/db.json a partir da seed versionada
// server/db/db_original.json, caso ainda não exista.
// Roda automaticamente antes de "npm start" (script prestart).
const fs = require('fs')
const path = require('path')

const seed = path.join(__dirname, 'db_original.json')
const runtime = path.join(__dirname, 'db.json')

if (!fs.existsSync(runtime)) {
  fs.copyFileSync(seed, runtime)
  console.log('db.json criado a partir de db_original.json')
}
