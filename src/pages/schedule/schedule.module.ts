import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Schedule } from './schedule';

@NgModule({
  declarations: [
    Schedule,
  ],
  imports: [
    IonicPageModule.forChild(Schedule),
  ],
  exports: [
    Schedule
  ]
})
export class ScheduleModule {}
