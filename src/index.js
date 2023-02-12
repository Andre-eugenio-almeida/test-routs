const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send("app GET, testando rota com  GET")
})

app.post('/', (req, res) => {
    res.send("app POST, testando rota com POST")
})

app.put('/', (req, res) => {
    res.send("app PUT, testando rota com PUT")
})

app.delete('/', (req, res) => {
    res.send("app DELETE, testando rota com DELETE")
})

app.path('/', (req, res) => {
    res,send("app PATH, testando rora com PATH")
})

app.listen(PORT, () => {
    console.log(`App online na porta ${PORT}`)
})