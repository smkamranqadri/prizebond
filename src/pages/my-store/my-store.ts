import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-my-store',
  templateUrl: 'my-store.html',
})
export class MyStore {
storePrizeBond :any;
constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.storePrizeBond = [
    {number:'100',store:0},
    {number:'200',store:0},
    {number:'500',store:0},
    {number:'750',store:0},
    {number:'1500',store:0},
    {number:'7500',store:0},
    {number:'15000',store:0},
    {number:'25000',store:0},
    {number:'40000',store:0}
    ];
}


}
