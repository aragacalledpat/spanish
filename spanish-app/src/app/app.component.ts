import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  words:Word[];

  constructor(private http: Http)
  {
    this.loadVocab().subscribe(data => this.words = data, error =>console.log(error))
  }

  loadVocab() :Observable<Word[]>
  {
    return this.http
    .get(`./assets/words.json`)
    .map(response => response.json().words)
  }
}

class Word {
  id:string;
  spanish:string;
  english:string;
}