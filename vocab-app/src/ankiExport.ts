import * as fs from "fs";
var readline = require('readline');
import { Word } from './Word';

module.exports = function()
{
    var archivesDir = "./archives/";

    fs.readdirSync(archivesDir).forEach(file => {
        if(!file.includes("daily")) { return; }

        mapToAnkiExports(file);
      })
}

function mapToAnkiExports(file:String)
{
    fs.readFile('./archives/'+ file, 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
    
        var db = JSON.parse(data); //now it an object

        var formatted = db.words.map(x => {
            var thing = x.spanish + "; ";
            x.english.forEach(element => {
                thing += element + ", "
            }
        );
        thing = thing.substring(0, thing.length - 2) + "\n";
        process.stdout.write(thing);
        })
    }});
}