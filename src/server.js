//Servidor
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
// Inicio e configuração do servidor
server
// receber os dados do req.body
.use(express.urlencoded({extended: true}))
//configurar arquivos estáticos (css, scripts e imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)


/*
.get("/", (req, res) => {
    return res.sendFile(__dirname + "/views/index.html") 
} )

.get("/study", (req, res) => {
    return res.sendFile(__dirname + "/views/study.html")  
})

.get("/give-classes", (req, res) => {
    return res.sendFile(__dirname + "/views/give-classes.html")  
})
*/
//start do servidor
.listen(5500)
