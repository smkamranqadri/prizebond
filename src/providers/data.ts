import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Database } from './database';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
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

}
