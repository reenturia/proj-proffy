const subjects = [
    "artes",
    "biologia",
    "Ciencias",
    "educação fisica",
    "fisica",
    "geografia",
    "historia",
    "matematica",
    "portugues",
    "quimica",

]

const weekdays = [
    "domingo",
    "segunda feira",
    "terça feira",
    "quarta feira",
    "quinta feira",
    "sexta feira",
    "sabado",


]

function getSubject(subjectNumber){
    const Position = +subjectNumber -1
    return subjects[Position]
}

function convertHoursToMinutes(time) {
     const [hours, minutes] = time.split(':')
     return Number((hours * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}