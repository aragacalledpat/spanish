var fs = require('fs');

var args = process.argv.slice(2)

var newWord = {
    id : Date.now(),
    spanish : args[0],
    english : args[1]
}


fs.readFile('words.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {

    var db = JSON.parse(data); //now it an object
    db.words.push(newWord); //add some data
    json = JSON.stringify(db); //convert it back to json
    fs.writeFile('words.json', json, 'utf8', function(){console.log("added " + newWord.spanish)}); // write it back 
}});