const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: "Cesar Oliveira", 
        avatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
        whatsapp: "41111144222", 
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    },

    classValue = {
        subject: 1, 
        cost: "20", 
    }
    // o proffy id virá pelo banco de dados

    classScheduleValues = [
        // class_id virá pelo banco de dados após cadastrar a aula
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy (db, {proffyValue, classValue, classScheduleValues})


    // Consultar os dados inseridos ------------------

    // todos os proffys
    const selectedProffys = db.all("SELECT * FROM proffys ")
    // console.log(selectedProffys)

    // cONSTULTAR As classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 4;
    `)
    // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "580"
        AND class_schedule.time_to > "520"

    `)

    // console.log(selectClassesSchedules)
})