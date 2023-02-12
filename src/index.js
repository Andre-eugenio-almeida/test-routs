const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send("app GET, testando rota - GET")
})

app.post('/', (req, res) => {
    res.send("app POST, testando - POST")
})

app.put('/', (req, res) => {
    res.send("app PUT, testando rota - PUT")
})

app.delete('/', (req, res) => {
    res.send("app DELETE, testando rota -  DELETE")
})

app.path('/', (req, res) => {
    res,send("app PATH, testando rora -  PATH")
})

app.listen(PORT, () => {
    console.log(`App online na porta ${PORT}`)
})