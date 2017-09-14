export class Word {
    public id:number;
    public spanish:string;
    public english:string[];

    constructor(spanish:string, english:string[]){
        this.id = Date.now(),
        this.spanish = spanish;
        this.english = english;
    }
  }