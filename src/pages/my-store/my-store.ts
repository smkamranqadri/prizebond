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
    {bondNumber:'100',store:0,number:[]},
    {bondNumber:'200',store:0,number:[]},
    {bondNumber:'500',store:0,number:[]},
    {bondNumber:'750',store:0,number:[]},
    {bondNumber:'1500',store:0,number:[]},
    {bondNumber:'7500',store:0,number:[]},
    {bondNumber:'15000',store:0,number:[]},
    {bondNumber:'25000',store:0,number:[]},
    {bondNumber:'40000',store:0,number:[]}
    ];
}


}
