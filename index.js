var express = require('express');
var app = express();
var path = require("path");
var multer = require("multer");

var upload = multer();


app.set('port', (process.env.PORT || 5000));

app.get("/", function (req, res) {

    res.sendFile(path.join(__dirname + '/index.html'));

});


app.post('/metadata', upload.single("upload"), function (req, res) {
   res.json({name: req.file.originalname, size: req.file.size});
   
});

    
app.listen(app.get('port'), function () {
    console.log('The app listening on port', app.get('port'));
});