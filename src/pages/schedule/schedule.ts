import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Schedule page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class Schedule {
  prizeBondSchedule: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.prizeBondSchedule = [
      { number: '100', draw: 0, date: 'jan 2,2017' },
      { number: '200', draw: 0, date: 'jan 2,2017' },
      { number: '500', draw: 0, date: 'jan 2,2017' },
      { number: '750', draw: 0, date: 'jan 2,2017' },
      { number: '1500', draw: 0, date: 'jan 2,2017' },
      { number: '7500', draw: 0, date: 'jan 2,2017' },
      { number: '15000', draw: 0, date: 'jan 2,' },
      { number: '25000', draw: 0, date: 'jan 2,' },
      { number: '40000', draw: 0, date: 'jan 2' }
    ];
  }


}
