const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send("app GET, testando rota no GET")
})

app.post('/', (req, res) => {
    res.send("app POST, testando no POST")
})

app.put('/', (req, res) => {
    res.send("app PUT, testando rota no PUT")
})

app.delete('/', (req, res) => {
    res.send("app DELETE, testando rota no  DELETE")
})

app.path('/', (req, res) => {
    res,send("app PATH, testando rora no  PATH")
})

app.listen(PORT, () => {
    console.log(`App online na porta ${PORT}`)
})