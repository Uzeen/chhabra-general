import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductPage } from './product.page';
import { AddProductComponent } from './add-product/add-product.component';
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BarcodeScannerLivestreamModule,
    IonicModule,
    ProductPageRoutingModule
  ],
  declarations: [ProductPage,AddProductComponent]
})
export class ProductPageModule {}
