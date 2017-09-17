var fs = require('fs'),
         readline = require('readline');
import { Word } from './Word';

module.exports = function()
{
    var rd = readline.createInterface({
        input: fs.createReadStream('./archives/buffer'),
        console: false
    });
    
    var wordsToAdd:Word[] = [];
    var count:number  = 0;
    
    rd.on('line', process_line);    
    rd.on('close', write_to_database);

    function process_line(line) {
        var fields = line.split(','); 
        var spanish = fields.shift();
    
        wordsToAdd.push(
            new Word(Date.now(),spanish.trim(), 
            fields.map(x => x.trim()))
        );
    }

    function write_to_database() {
        console.log('BEGIN WRITE');
        fs.readFile('./archives/current.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
        
            var db = JSON.parse(data); //now it an object
    
            wordsToAdd.forEach(function(wd)
            {
                db.words.push(wd); //add some data
                console.log("queued " + wd.spanish);
            })
    
            var json = JSON.stringify(db); //convert it back to json
    
            console.log(db.words.length);
            fs.writeFile('./archives/current.json', json, 'utf8', () => console.log("WRITE SUCCESS")); // write it back 
        }});
      }
}