var fs = require('fs'),
         readline = require('readline');

var wordsToAdd = [];
var count = 0;

var rd = readline.createInterface({
    input: fs.createReadStream('buffer'),
    console: false
});

rd.on('line', function(line) {
    var fields = line.split(','); 
    var newWord = {
        id : Date.now(),
        spanish : fields[0].trim(),
        english : []
    }

    for(var i = 1; i < fields.length; i++)
    {
        newWord.english.push(fields[i].trim())
    }
    
    
    wordsToAdd.push(newWord)
});

rd.on('close', function() {
    console.log('BEGIN WRITE');

    fs.readFile('current.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
    
        var db = JSON.parse(data); //now it an object

        wordsToAdd.forEach(function(wd)
        {
            db.words.push(wd); //add some data
            console.log("queued " + wd.spanish)
        })

        json = JSON.stringify(db); //convert it back to json

        console.log(db.words.length)
        fs.writeFile('current.json', json, 'utf8', function(){console.log("WRITE SUCCESS")}); // write it back 
    }});
  });