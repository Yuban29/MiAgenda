import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage {

  totalContactos: number = 4;

  constructor(private navCtrl: NavController) {}

  verLista() {
    this.navCtrl.navigateForward('/list');
  }
}
