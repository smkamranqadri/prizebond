import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {  SQLite } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StoreBondNumber } from '../pages/store-bond-number/store-bond-number';
import { MyStore } from '../pages/my-store/my-store';
import { Schedule } from '../pages/schedule/schedule';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'StoreBondNumber', component: StoreBondNumber },
      { title: 'MyStore', component: MyStore },
      { title: 'Schedule', component: Schedule }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // let db = new SQLite();
      // db.openDatabase({
      //   name: "hello.db",
      //   location: "default"
      // }).then(() => {
      //   db.executeSql("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)", {}).then((data) => {
      //     console.log("TABLE CREATED: ", data);
      //   }, (error) => {
      //     console.error("Unable to execute sql", error);
      //   })
      // }, (error) => {
      //   console.error("Unable to open database", error);
      // });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
