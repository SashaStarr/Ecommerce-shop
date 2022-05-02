const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000

app.get("/mainPage", (req, res) => {
    res.status(200)
    const images = {

    }
})

app.listen(PORT, () => {
    console.log(`Server on ${PORT} port `)
})

