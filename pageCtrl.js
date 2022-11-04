const path = require('path')


module.exports = {
    home: (req, res) => {
     res.sendFile(path.join(__dirname, './public/index.html'))
    },
    styles: (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.css'))
    },
    script: (req, res) => {
        res.sendFile(path.join(_dirname, './public/index.js'))
    }


}

