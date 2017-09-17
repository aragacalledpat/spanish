export class Word {
    public id:number;
    public spanish:string;
    public english:string[];

    constructor(id:number,spanish:string, english:string[]){
        this.id = id;
        this.spanish = spanish;
        this.english = english;
    }
  }