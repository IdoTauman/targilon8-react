const express = require('express')
const path = require('path')
const app = express()

const BUILD_FOLDER = 'build'

app.use(express.static(path.join(__dirname, BUILD_FOLDER)))

app.use((req, res) => {
    res.sendFile(path.join(__dirname, BUILD_FOLDER, 'index.html'))
})

const PORT = 3000
app.listen(PORT, () => {})