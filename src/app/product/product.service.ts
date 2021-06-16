import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  modal:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  product = [
    {
    "Name": "Toor Dal 1kg",
    "Price":"105",
    "id": "1"
  },{
    "Name": "Masoor Dal 1kg",
    "Price":"90",
    "id": "20020021"
  },{
    "Name": "Chana Dal 1kg",
    "Price":"78",
    "id": "20020022"
  },{
    "Name": "Sing Dana 1kg",
    "Price":"97",
    "id": "20020023"
  },{
    "Name": "Sugar 1kg",
    "Price":"38",
    "id": "20020024"
  },{
    "Name": "Jeera 1kg",
    "Price":"180",
    "id": "20020025"
  },{
    "Name": "Sauf 1kg",
    "Price":"150",
    "id": "20020026"
  }
]
}
