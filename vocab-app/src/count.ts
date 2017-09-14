var fs = require('fs');

module.exports = function() {

    fs.readFile('./archives/current.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
    
        var db = JSON.parse(data); //now it an object
        console.log(db.words.length);
 
    }});
  }