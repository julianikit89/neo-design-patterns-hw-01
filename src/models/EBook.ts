import { AbstractBook } from './AbstractBook';
import { Author } from './Author';

export class EBook extends AbstractBook {
  private _url: string; 

  constructor(title: string, year: number, author: Author, url: string) {
    super(title, year, author);
    this._url = url;
  }

  getDescription(): string {
    return `E-book "${this._title}" by ${this._author.name} (${this._year}) - Available at: ${this._url}`;
  }
}