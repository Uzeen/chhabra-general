import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductPage } from './product.page';
import { AddProductComponent } from './add-product/add-product.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ProductPageRoutingModule
  ],
  declarations: [ProductPage,AddProductComponent],
  providers : [BarcodeScanner]
})
export class ProductPageModule {}
