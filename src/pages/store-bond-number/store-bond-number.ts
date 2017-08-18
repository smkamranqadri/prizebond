import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
declare var window: any;
declare var cordova: any;
@IonicPage()
@Component({
  selector: 'page-store-bond-number',
  templateUrl: 'store-bond-number.html',
})
export class StoreBondNumber implements OnInit {
  isSelected: any;
  navBarData: any;
  bondCategory: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private data: Data
  ) {

  }
  ngOnInit() {
    this.navBarData = this.navParams.data;
  }
  doSomething(event) {

  }
  addBond(form) {
    if (!form.valid) {
      return console.log('input field incomplete')
    }
    if (form.name) {
      this.data.bondSingleStorage(form.value, this.navBarData)
        .then((d) => {
          console.log('Storage DB', d)
        })
        .catch(e => {
          console.log('Storage Error: ', e)
        });
    }
    else {
      this.data.bondRangeStorage(form.value, this.navBarData)
      /*    .then((d) => {
            console.log('Storage DB', d)
          })
          .catch(e => {
            console.log('Storage Error: ', e)
          });*/
    }
  }
  searchBond() {

  }
  storageBondSingle() {
    this.data.findSingle()
      .then((d) => {
        console.log('Storage DB Find', d)
      })
      .catch(e => {
        console.log('Storage Find Error: ', e)
      });
  }
  storageBondRange() {
    this.data.findRange()
      .then((d) => {
        console.log('Storage DB Find', d)
      })
      .catch(e => {
        console.log('Storage Find Error: ', e)
      });
  }
  dbTo() {
    window.plugins.sqlDB.copyDbToStorage('bond.db', 1, '/sdcard/mydb/', true, this.success, this.error);
  }
  success(data) {
    console.log("toData", data);
  }
  error(err) {
    console.log("toError", err)
  }
}


