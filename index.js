const express = require('express')
const app = express()
const port = process.env.PORT || 3000

console.log("Patate: 1");

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    console.log("Patate: 2");
})
