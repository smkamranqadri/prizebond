import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/*
  Generated class for the Database provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Database {

  private db: SQLiteObject;

  constructor(public http: Http, private sqlite: SQLite) { }
  openDataBase() {
    this.sqlite.create({ name: 'bond.db', location: 'default' })
      .then((db: SQLiteObject) => {
        console.log('DB open',db);
        this.db = db;
      })
      .catch(e => {
        console.log('DB connection error', e);
      });
  }

  executeSql(sql: string) {
    return this.db.executeSql(sql, {})
  }

}
