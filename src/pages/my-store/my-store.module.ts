import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyStore } from './my-store';

@NgModule({
  declarations: [
    MyStore,
  ],
  imports: [
    IonicPageModule.forChild(MyStore),
  ],
  exports: [
    MyStore
  ]
})
export class MyStoreModule {}
