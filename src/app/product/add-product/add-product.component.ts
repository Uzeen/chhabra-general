import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { AlertController } from '@ionic/angular';
import Quagga from 'quagga';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit,AfterViewInit {

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
      message: `Product ${data} Created`,
      buttons: ['OK']
    });
    await alert.present();

  }
  addProduct(){
    this.ps.product.push(this.productForm.value)
    this.presentAlert(this.productForm.value.Name);
  }

  scan(data){
    alert(data);
  }

  errorMessage: string;
  ngAfterViewInit(): void {
    Quagga.init({
      inputStream: {
        constraints: {
          facingMode: 'environment' // restrict camera type
        },
        area: { // defines rectangle of the detection
          top: '40%',    // top offset
          right: '0%',  // right offset
          left: '0%',   // left offset
          bottom: '40%'  // bottom offset
        },
      },
      decoder: {
        readers: ['ean_reader'] // restrict code types
      },
    },
    (err) => {
      if (err) {
        this.errorMessage = `QuaggaJS could not be initialized, err: ${err}`;
      } else {
        Quagga.start();
        Quagga.onDetected((res) => {
          window.alert(`code: ${res.codeResult.code}`);
        })
      }
    });  
  }

    

}
