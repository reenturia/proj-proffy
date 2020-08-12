const Database = require('./db')
const createProffy = require('./createProffy')



Database.then(async (db) => {
    proffyValue = {
        name: "Reenturia",
        avatar: "https://avatars1.githubusercontent.com/u/67061640?s=460&u=110ab3479efaaf9c08820095913730613508eeb8&v=4",
        whatsapp: "9876654555767",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        
    }

    classValue = {
        subject: 1 ,
        cost: "20",
        
    }

    classScheduleValues = [
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
    await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys" )
    //console.log(selectedProffys)

    const selectClassesAndProffy = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffy)

    const selectClassesSchedules = await db.all(`
     SELECT class_schedule.*
     FROM class_schedule
     WHERE class_schedule.class_id = "1"
     AND class_schedule.weekday = "0"
     AND class_schedule.time_from <= "520"
     AND class_schedule.time_to > "520"


    `)
   // console.log(selectClassesSchedules)
})  