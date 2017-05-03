import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreBondNumber } from './store-bond-number';

@NgModule({
  declarations: [
    StoreBondNumber,
  ],
  imports: [
    IonicPageModule.forChild(StoreBondNumber),
  ],
  exports: [
    StoreBondNumber
  ]
})
export class StoreBondNumberModule {}
