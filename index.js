// Trabalho Interdisciplinar 1 - Aplicações Web
//
// Esse módulo implementa uma API RESTful baseada no JSONServer
// O servidor JSONServer fica hospedado na seguinte URL
// https://jsonserver.rommelpuc.repl.co/contatos
//
// Para montar um servidor para o seu projeto, acesse o projeto 
// do JSONServer no Replit, faça o FORK do projeto e altere o 
// arquivo db.json para incluir os dados do seu projeto.
//
// URL Projeto JSONServer: https://replit.com/@rommelpuc/JSONServer
//
// Autor: Rommel Vieira Carneiro
// Data: 03/10/2023

const jsonServer = require('json-server')
const express    = require('express')
const server     = jsonServer.create()
const router     = jsonServer.router('./db/db.json')

// Site original (public/) servido na raiz
const middlewares = jsonServer.defaults({ noCors: true })
server.use(middlewares)

// Novo site da disciplina (public2/) servido em /diw/
server.use('/diw', express.static('./public2'))

server.use('/api', router)

let port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`JSON Server is running em http://localhost:3000`)
})