import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  modal:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
}
