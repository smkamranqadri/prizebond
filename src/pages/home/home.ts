import { Data } from '../../providers/data';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { StoreBondNumber } from '../store-bond-number/store-bond-number';
export enum bondEnum {
  'Rs100',
  'Rs200',
  'Rs750',
  'Rs1500',
  'Rs7500',
  'Rs15000',
  'Rs25000',
  'Rs40000'
}

declare var window: any;
declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  storeBondNumber: any;
  prizeBondCategory = [];
  options: string[];
  myValue: bondEnum;
  bondEnum: typeof bondEnum = bondEnum;
  bond: any;
  public bondArr: Array<Object>;

  constructor(public navCtrl: NavController,
    private sqlite: SQLite,
    private data: Data) {
    this.prizeBondCategory = ['100', '200', '500', '750', '1500', '7500', '15000', '25000', '40000'];
    this.storeBondNumber = StoreBondNumber;

  }
  ngOnInit() {
    var x = bondEnum;
    var options = Object.keys(bondEnum);
    this.options = options.slice(options.length / 2);
  }

  parseValue(value: string) {
    this.myValue = bondEnum[value];
    this.bond = this.myValue;
  }

  success(data) {
    console.log("Data", data);
  }
  error(err) {
    console.log("Error", err)
  }

  /* dbFrom */
 /*  dbFrom() {
    window.plugins.sqlDB.copyDbFromStorage('bond.db', 1, '/sdcard/mydb/', false, this.success, this.error);
  } */

  dbTo() {
    window.plugins.sqlDB.copyDbToStorage('bond.db', 1, '/sdcard/mydb/', true, this.success, this.error);
  }

  dbRemove() {
    window.plugins.sqlDB.remove('bond.db', 0, this.success, this.error);
  }

  dbCopy() {
    window.plugins.sqlDB.copy('bond.db', 0, this.success, this.error);
  }
  getTableName() {
    this.data.tableName()
      .then((d) => {
        if (d.rows.length > 0) {
          for (var i = 0; i < d.rows.length; i++) {
            alert(d.rows.item(i).name)
          }
        }
        console.log('Executed SQL', d)
      })
      .catch(e => {
        alert(e);
        console.log('Executed SQL Error: ', e)
      });
  }

  single() {
    let num = '515743';
    let bondType = '0';
    this.data.findOne(num, bondType)
      .then((d) => {
        if (d.rows.length > 0) {
          for (var i = 0; i < d.rows.length; i++) {
            alert(d.rows.item(i).bond_prize)
          }
        }
        console.log('Executed SQL', d.rows.item(0))
      })
      .catch(e => {
        alert(e);
        console.log('Executed SQL Error: ', e)
      });
  }

  range() {
    let start = '515743';
    let end = '516339';
    let bondType = '0';
    this.data.findSeries(start, end, bondType)
      .then((d) => {
        if (d.rows.length > 0) {
          for (var i = 0; i < d.rows.length; i++) {
            alert(d.rows.item(i).bond_prize)
          }
        }
        console.log('Executed SQL', d)
      })
      .catch(e => {
        alert(e);
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
