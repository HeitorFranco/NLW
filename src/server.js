const express = require("express")
const server = express()
const { pageHome, pageCreatePoint, pageSearchResults, pageRegisterPoint, pagePoint } = require("./pages")

const nunjucks = require("nunjucks")

nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.use(express.urlencoded( { extended: false } ))
server.use(express.static("public"))

server
.get("/", pageHome)
.get("/create-point", pageCreatePoint)
.post("/add", pageRegisterPoint)
.get("/search-results", pageSearchResults)
.listen(3000, () => console.log("server rodando em http://localhost:3000"))