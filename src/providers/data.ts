import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { UUID } from 'angular2-uuid';
import { Database } from './database';


@Injectable()
export class Data {

  constructor(public http: Http, private db: Database) {
    console.log('Hello Data Provider');
  }

  findOne(num) {
    let qurey = `SELECT * FROM bond where number = ${num}`
    return this.db.executeSql(qurey)
  }

  findSeries(start, end) {
    let qurey = `SELECT * FROM bond where number BETWEEN ${start} and ${end}`
    return this.db.executeSql(qurey)
  }
  bondSingleStorage(bondNumber, bondType) {
    let id = UUID.UUID();
    let qurey = `INSERT INTO bondStorage (id, bondNumber, bondType) VALUES (\'${id}\' ,${Number(bondNumber)},${Number(bondType)})`;
    return this.db.executeSql(qurey)
  }
  bondRangeStorage(bondNumber, bondType) {
    for (var i = bondNumber.from; i <= bondNumber.to; i++) {
      let id = UUID.UUID();
      let qurey = `INSERT INTO bondStorage (id, bondNumber, bondType) VALUES (\'${id}\',${i},${bondType})`;
      return this.db.executeSql(qurey)
    }
  }
}
