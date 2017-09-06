import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as _ from "underscore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  words:Word[];
  randoWord:Word;

  constructor(private http: Http)
  {
    this.loadVocab().subscribe(data => 
      {
        this.words = data;
        this.setRandomWord();
      }, 
      error => console.log(error))
  }

  loadVocab() :Observable<Word[]>
  {
    return this.http
    .get(`./assets/words.json`)
    .map(response => response.json().words)
  }

  setRandomWord()
  {
    this.randoWord = _.sample(this.words);
    console.log(this.randoWord);
  }
}

class Word {
  id:string;
  spanish:string;
  english:string;
}