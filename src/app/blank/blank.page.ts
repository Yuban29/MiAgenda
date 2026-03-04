import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.page.html',
  styleUrls: ['./blank.page.scss'],
  standalone: false
})
export class BlankPage {

  constructor(private navCtrl: NavController) {}

  goToList() {
    this.navCtrl.navigateForward('/list');
  }

  goToTabs() {
    this.navCtrl.navigateForward('/tabs');
  }

  goToEncuesta() {
    this.navCtrl.navigateForward('/encuesta');
  }
}
