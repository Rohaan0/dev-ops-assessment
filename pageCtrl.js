const path = require('path')


module.exports = {
    home: (req, res) => {
        console.log(path.join(__dirname, '/public/index.html'))
     res.sendFile(path.join(__dirname, '/public/index.html'))
    },
    styles: (req, res) => {
        res.sendFile(path.join(__dirname, '/public/index.css'))
    },
    script: (req, res) => {
        res.sendFile(path.join(__dirname, '/public/index.js'))
    }


}

