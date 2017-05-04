import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Transfer, File, SQLite } from 'ionic-native';
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
  public database: SQLite;
  public people: Array<Object>;
  constructor(public navCtrl: NavController, private platform: Platform) {
    this.prizeBondCategory = ['100', '200', '500', '750', '1500', '7500', '15000', '25000', '40000'];
    this.storeBondNumber = StoreBondNumber;
    this.platform.ready().then(() => {
      this.database = new SQLite();
      this.database.openDatabase({ name: "hello.db", location: "default" }).then(() => {
        this.refresh();
      }, (error) => {
        console.log("ERROR: ", error);
      });
    });
  }
  public add() {
    this.database.executeSql("INSERT INTO people (firstname, lastname) VALUES ('Nic', 'Raboy')", []).then((data) => {
      console.log("INSERTED: " + JSON.stringify(data));
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error.err));
    });
  }
  public refresh() {
    this.database.executeSql("SELECT * FROM people", []).then((data) => {
      this.people = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          this.people.push({ firstname: data.rows.item(i).firstname, lastname: data.rows.item(i).lastname });
        }
      }
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error));
    });
  }
   dbTo() {
     window.plugins.sqlDB.copyDbToStorage('hello.db', 1, '/sdcard/myData', true, this.success, this.error);
   }
   success(data) {
     console.log("toData", data);
   }
   error(err) {
     console.log("toError", err)
   }
 
   downloadFile() {
     const fileTransfer = new Transfer();
     const url = "https://drive.google.com/open?id=0B1BZyhMfg4s5SnplRkVwRTRsS2c"
 
     fileTransfer.download(url, '/sdcard/downloadDB.db')
       .then(data => {
         console.log("data", data)
 
       }, err => {
         console.log("Err", err)
       });
   }
 
 
   dbFrom() {
     // window.plugins.sqlDB.remove('re.db', 0, this.removeSuccess, this.removeError);
     // window.plugins.sqlDB.copyDbFromStorage("data.db", 1, cordova.file.applicationStorageDirectory + 'data.db', true, this.fromSuccess, this.fromError);
   }
   removeSuccess(data) {
     console.log("removeData", data);
   }
   removeError(err) {
     console.log("removeError", err)
   }
/*   dbCopy() {
     window.plugins.sqlDB.copy('re.db', 0, this.copySuccess, this.copyError);
   }
   copySuccess(data) {
     console.log("copyData", data);
   }
   copyError(err) {
     console.log("copyError", err)
   }*/
}
