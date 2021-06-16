import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(public modalController: ModalController,private productService:ProductService) { }

  ngOnInit() {
    this.productService.modal.subscribe((data)=>{
      this.close();
    })
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddProductComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  close(){
    this.modalController.dismiss();
  }

}
