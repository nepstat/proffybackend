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
function getSubjects (subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function convertionHoursToMinutes (time) {
    const [hours, minutes] =  time.split(':')
    return Number((hours * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubjects,
    convertionHoursToMinutes
}