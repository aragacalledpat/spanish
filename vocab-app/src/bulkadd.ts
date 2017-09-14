var fs = require('fs'),
         readline = require('readline');

export function BulkAdd()
{
    var rd = readline.createInterface({
        input: fs.createReadStream('buffer'),
        console: false
    });
    
    var wordsToAdd:Word[] = [];
    var count:number  = 0;
    
    rd.on('line', process_line);    
    rd.on('close', write_to_database);

    function process_line(line) {
        var fields = line.split(','); 
        new Word(fields[0].trim(), line.split(',').map(x => x.trim))
    
        wordsToAdd.push(
            new Word(fields[0].trim(), 
            line.split(',').map(x => x.trim))
        );
    }

    function write_to_database() {
        console.log('BEGIN WRITE');
    
        fs.readFile('current.json', 'utf8', function readFileCallback(err, data){
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
            fs.writeFile('current.json', json, 'utf8', () => console.log("WRITE SUCCESS")); // write it back 
        }});
      }
}