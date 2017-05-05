import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StoreBondNumber page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-store-bond-number',
  templateUrl: 'store-bond-number.html',
})
export class StoreBondNumber implements OnInit {
  isSelected: any;
  navBarData: any;
  searchCategory: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navBarData = this.navParams.data;
  }
  ngOnInit() {
    
  }
  doSomething(event){

  }
  addBond() {

  }
  searchBond() {

  }
}
