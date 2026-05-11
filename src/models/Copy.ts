import { AbstractBook } from './AbstractBook';

export class Copy {
  
  private _isAvailable: boolean = true;

  constructor(private _book: AbstractBook) {}

  
  get book(): AbstractBook {
    return this._book;
  }

 
  isCopyAvailable(): boolean {
    return this._isAvailable;
  }

  setAvailability(status: boolean): void {
    this._isAvailable = status;
  }
}