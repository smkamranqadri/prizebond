import { Data } from '../../providers/data';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { StoreBondNumber } from '../store-bond-number/store-bond-number';

declare var window: any;
declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  storeBondNumber: any;
  prizeBondCategory = [];

  public bondArr: Array<Object>;
  constructor(public navCtrl: NavController, private platform: Platform, private transfer: Transfer, private file: File, private sqlite: SQLite, private data: Data) {
    this.prizeBondCategory = ['100', '200', '500', '750', '1500', '7500', '15000', '25000', '40000'];
    this.storeBondNumber = StoreBondNumber;

  }


  dbTo() {
    window.plugins.sqlDB.copyDbToStorage('bond.db', 1, ' /sdcard/mydb/', true, this.success, this.error);
  }
  success(data) {
    console.log("toData", data);
  }
  error(err) {
    console.log("toError", err)
  }

  /* dbRemove */
  dbRemove() {
    window.plugins.sqlDB.remove('bond.db', 0, this.removeSuccess, this.removeError);
  }
  removeSuccess(data) {
    console.log("removeData", data);
  }
  removeError(err) {
    console.log("removeError", err)
  }
  /* dbRemove */

  /* dbCopy */
  dbCopy() {
    window.plugins.sqlDB.copy('bond.db', 0, this.copySuccess, this.copyError);
  }
  copySuccess(data) {
    console.log("copyData", data);
  }
  copyError(err) {
    console.log("copyError", err)
  }
  /* dbCopy */

  single() {
    let num = '515743'
    this.data.findOne(num)
      .then((d) => {
        console.log('Executed SQL', d.rows.item(0))
      })
      .catch(e => {
        console.log('Executed SQL Error: ', e)
      });
  }

  range() {
    let start = '515743';
    let end = '516339';
    this.data.findSeries(start, end)
      .then((d) => {
        console.log('Executed SQL', d)
      })
      .catch(e => {
        console.log('Executed SQL Error: ', e)
      });
  }


  addBond() {
    this.sqlite.create({ name: 'bond.db', location: 'default' })
      .then((db: SQLiteObject) => {
        db.executeSql(`INSERT INTO bond (id, number, draw_id, prize) VALUES ('6fe6781e-79f2-98e6-eea4-70a9b2570f4e' , 001574, '253acf78-4884-bdf9-1109-0fbb82f2764a', 'third'); `, {})
          .then((d) => console.log('Executed SQL', d))
          .catch(e => console.log('Executed SQL Error: ', e));
      })
      .catch(e => console.log('DB Create Error: ', e));
  }

}
