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
  public database: any;
  public bondArr: Array<Object>;
  constructor(public navCtrl: NavController, private platform: Platform, private transfer: Transfer, private file: File, private sqlite: SQLite) {
    this.prizeBondCategory = ['100', '200', '500', '750', '1500', '7500', '15000', '25000', '40000'];
    this.storeBondNumber = StoreBondNumber;
    this.platform.ready().then(() => {

    });
  }


  dbTo() {
    window.plugins.sqlDB.copyDbToStorage('bond.db', 1, cordova.file.applicationStorageDirectory, true, this.success, this.error);
  }
  success(data) {
    console.log("toData", data);
  }
  error(err) {
    console.log("toError", err)
  }

  downloadFile() {
    const fileTransfer: TransferObject = this.transfer.create();
    const url = "https://drive.google.com/open?id=0B1BZyhMfg4s5SnplRkVwRTRsS2c"

    fileTransfer.download(url, cordova.file.applicationStorageDirectory)
      .then(data => {
        console.log("data", data)

      }, err => {
        console.log("Err", err)
      });
  }


  dbRemove() {
    window.plugins.sqlDB.remove('bond.db', 0, this.removeSuccess, this.removeError);
  }
  removeSuccess(data) {
    console.log("removeData", data);
  }
  removeError(err) {
    console.log("removeError", err)
  }
  dbCopy() {
    window.plugins.sqlDB.copy('bond.db', 0, this.copySuccess, this.copyError);
  }
  copySuccess(data) {
    console.log("copyData", data);
  }
  copyError(err) {
    console.log("copyError", err)
  }
  find() {
    // this.database = new SQLite();
    // this.database.openDatabase({ name: "bond.db", location: "default" })
    //   .then(() => {
    //     this.database.executeSql("SELECT * FROM bond where number = 084694", []).then((data) => {
    //       console.log("Find: " + JSON.stringify(data));
    //     }, (error) => {
    //       console.log("Find ERROR: " + JSON.stringify(error));
    //     });
    //   }, (error) => {
    //     console.log("DB ERROR: ", error);
    //   });

    this.sqlite.create({ name: 'bond.db', location: 'default' })
      .then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM bond where number = 001574', {})
          .then((d) => {
            debugger
            console.log('Executed SQL', d)
          })
          .catch(e => console.log('Executed SQL Error: ', e));
      })
      .catch(e => console.log('DB Create Error: ', e));
  }
  createDraw() {
    this.sqlite.create({ name: 'bond.db', location: 'default' })
      .then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE `draw` (`id`	TEXT, `draw_number`	NUMERIC, `bond`	NUMERIC, `date`	TEXT, `day`	TEXT, `city`	TEXT );', {})
          .then((d) => console.log('Executed SQL', d))
          .catch(e => console.log('Executed SQL Error: ', e));
      })
      .catch(e => console.log('DB Create Error: ', e));
  }
  createBond() {
    this.sqlite.create({ name: 'bond.db', location: 'default' })
      .then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE `bond` (`id`	TEXT, `number`	NUMERIC, `draw_id`	TEXT, `prize`	TEXT );', {})
          .then((d) => console.log('Executed SQL', d))
          .catch(e => console.log('Executed SQL Error: ', e));
      })
      .catch(e => console.log('DB Create Error: ', e));
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
  outData() {
    this.database = new SQLite();
    this.database.openDatabase({ name: "bond.db", location: "default" })
      .then(() => {
        this.database.executeSql("SELECT * FROM bond", []).then((data) => {
          console.log("outData: " + JSON.stringify(data));
        }, (error) => {
          console.log("outData ERROR: " + JSON.stringify(error));
        });
      }, (error) => {
        console.log("DB ERROR: ", error);
      });
  }
}
