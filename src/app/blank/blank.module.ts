import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { BlankPage } from './blank.page';

const routes: Routes = [
  { path: '', component: BlankPage }
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [BlankPage],
})
export class BlankPageModule {}
