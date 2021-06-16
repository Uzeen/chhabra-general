import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder', icon: 'mail' },
    { title: 'Product', url: '/product', icon: 'paper-plane' },
    { title: 'Catagory', url: '/catagory', icon: 'heart' },
    { title: 'Customer', url: '/customer', icon: 'archive' },
    { title: 'Settings', url: '/Setting', icon: 'trash' },
  ];
  constructor() {}
}
