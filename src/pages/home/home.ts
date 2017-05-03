import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StoreBondNumber } from '../store-bond-number/store-bond-number';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  storeBondNumber: any;
  prizeBondCategory = [];
  constructor(public navCtrl: NavController) {
    this.prizeBondCategory = ['100', '200', '500', '750', '1500', '7500', '15000', '25000', '40000'];
    this.storeBondNumber = StoreBondNumber;
  }


}
