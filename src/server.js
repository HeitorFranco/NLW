const express = require("express")
const server = express()
const { pageHome, pageCreatePoint, pageSearchResults, pageRegisterPoint, pagePoint } = require("./pages")

const nunjucks = require("nunjucks")
const PORT = process.env.PORT || 5000
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
.listen(PORT, () => console.log(`server rodando em http://localhost:${PORT}`))