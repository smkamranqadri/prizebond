import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { UUID } from 'angular2-uuid';
import { Database } from './database';


@Injectable()
export class Data {

  constructor(public http: Http, private db: Database) { }

  findOne(num, bondType) {
    let qurey = `SELECT * FROM bond where bond_number = ${num} AND bond_type = ${bondType}`
    return this.db.executeSql(qurey)
  }

  findSeries(start, end, bondType) {
    let qurey = `SELECT * FROM bond where bond_number BETWEEN ${start} and ${end} AND bond_type = ${bondType}`
    return this.db.executeSql(qurey)
  }

  findSingle() {
    // 'SELECT number FROM bond where number IN (SELECT bondNumber FROM bondStorage)'
    let qurey = `SELECT * FROM bond where bond_number IN (SELECT bond_number FROM bond_storage) AND bond_type IN (SELECT bond_type FROM bond_storage)`
    return this.db.executeSql(qurey)
  }

  findRange() {
    let qurey = `SELECT bond_number, bond_type FROM bond where bond_number, bond_type IN (SELECT bond_number,bond_type FROM bond_storage)`
    return this.db.executeSql(qurey)
  }

  bondSingleStorage(bondNumber, bondType) {
    let id = UUID.UUID();
    let qurey = `INSERT INTO bond_storage (id, bond_number, bond_type) VALUES (\'${id}\', ${Number(bondNumber)}, ${bondType})`;
    return this.db.executeSql(qurey)
  }
  showStorage() {
    let qurey = `SELECT * FROM bond_storage `;
    return this.db.executeSql(qurey)
  }

  bondRangeStorage(bondNumber, bondType) {
    for (var i = bondNumber.from; i <= bondNumber.to; i++) {
      let id = UUID.UUID();
      var qurey = `INSERT INTO bond_storage (id, bond_number, bond_type) VALUES (\'${id}\',${Number(i)},${bondType})`;
      this.db.executeSql(qurey).then((d) => {
        console.log('Storage DB', d)
      })
        .catch(e => {
          console.log('Storage Error: ', e)
        });
    }
  }

  tableName() {
    let qurey = `SELECT name FROM sqlite_master WHERE type='table'`;
    return this.db.executeSql(qurey)
  }
}
