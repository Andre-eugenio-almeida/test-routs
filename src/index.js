const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    console.log("Entrou Aqui!")
    res.send("HELLO WORD!")
})

app.listen(PORT, () => {
    console.log(`App online na porta ${PORT}`)
})