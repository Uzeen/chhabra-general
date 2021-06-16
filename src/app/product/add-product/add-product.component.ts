import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {

  productForm = this.formBuilder.group({
    Name : new FormControl(null),
    Price : new FormControl(null),
    id : new FormControl(null)
  });
  constructor(private ps: ProductService,
    public formBuilder: FormBuilder,
    public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(data) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Success',
      message: `Product {data} Created`,
      buttons: ['OK']
    });
    await alert.present();

  }
  addProduct(){
    this.ps.product.push(this.productForm.value)
    this.presentAlert(this.productForm.value.Name);
  }

}
