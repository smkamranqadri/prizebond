import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Transfer } from 'ionic-native';
import { StoreBondNumber } from '../store-bond-number/store-bond-number';
declare var window: any;
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
  dbTo() {
    window.plugins.sqlDB.copyDbToStorage('data.db', 1, '/sdcard/', true, this.success, this.error);
  }
  success(data) {
    console.log("toData", data);
  }
  error(err) {
    console.log("toError", err)
  }

  downloadFile() {
    const fileTransfer = new Transfer();
    const url = "https://drive.google.com/open?id=0B1BZyhMfg4s5dW84NWhGQkN4clk"

    fileTransfer.download(url, '/sdcard/data.db/')
      .then(data => {
        console.log("data", data)
        
      }, err => {
        console.log("Err", err)
      });
  }


  dbFrom() {
    window.plugins.sqlDB.copyDbFromStorage("data.db", 1, '/sdcard/data.db', true, this.fromSuccess, this.fromError);
  }
  fromSuccess(data) {
    console.log("toData", data);
    this.downloadFile();
  }
  fromError(err) {
    console.log("toError", err)
  }

}
