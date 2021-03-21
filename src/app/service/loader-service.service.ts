import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public status: boolean;

  constructor() { 
    this.status = false;
  }
  display(value: boolean) {
    try {
        setTimeout(() => {
            this.status = value;
        }, 0);
    } catch (e) {
    }
}
}
