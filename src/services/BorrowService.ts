import { Reader } from '../models/Reader';
import { Copy } from '../models/Copy';

export class BorrowService {
  borrow(reader: Reader, copy: Copy): boolean {
    if (copy.isCopyAvailable()) {
      copy.setAvailability(false); 
      reader.addCopy(copy);     
      return true;                
    }
    return false; 
  }

  returnBook(reader: Reader, copy: Copy): void {
    copy.setAvailability(true);   
    reader.removeCopy(copy);    
  }
}