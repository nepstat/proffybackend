// Dados
const proffys = [
    {
        name: "Cesar Oliveira", 
        avatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
        whatsapp: "41111144222", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [
            0
        ], 
        time_from: [720], 
        time_to: [1220]
    },

    {
        name: "Larissa Octavia", 
        avatar: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
        whatsapp: "888552255", 
        bio: "Entusiasta das melhores tecnologias de educação fisica avançada.<br><br> Apaixonado por ensinar coisas em quadras e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas técnicas de corrida.", 
        subject: "Educação Física", 
        cost: "40", 
        weekday: [
            1
        ], 
        time_from: [720], 
        time_to: [1220]
    },
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
]

// Funcionalidades 

function getSubject (subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function pageLanding (req,res) {
    return res.render("index.html")
}

function pageStudy(req,res){
    const filters = req.query
    return res.render("study.html", { proffys, filters , subjects, weekdays })
}

function pageGiveClasses (req,res) {
    const data = req.query

    // Se tiver dados
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        // adicionar dados a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    // Se não, mostrar página
    return res.render("give-classes.html" , { subjects, weekdays })
}

// Servidor
const express = require('express')
const server = express()

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Configurar arquivos estáticos
server.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)