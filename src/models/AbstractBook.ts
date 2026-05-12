import { Author } from './Author';

export abstract class AbstractBook {
  constructor(
    protected _title: string,  
    protected _year: number,
    protected _author: Author
  ) {
    this._author.addBook(this);
    
  }
 
  get title(): string { return this._title; }
  get author(): Author { return this._author; }

  get year(): number { return this._year;}

  abstract getDescription(): string;
}