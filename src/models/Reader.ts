import { Copy } from './Copy';

export class Reader {
  
  private _borrowedCopies: Copy[] = [];

  constructor(private _id: string, private _name: string) {}

  get id(): string { return this._id; }
  get name(): string { return this._name; }

  addCopy(copy: Copy): void {
    this._borrowedCopies.push(copy);
  }

  removeCopy(copy: Copy): void {
    this._borrowedCopies = this._borrowedCopies.filter(c => c !== copy);
  }
}