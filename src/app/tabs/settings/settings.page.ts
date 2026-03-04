import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false
})
export class SettingsPage {

  notificaciones: boolean = true;
  modoOscuro: boolean = false;

  constructor() {}

  toggleNotificaciones() {
    this.notificaciones = !this.notificaciones;
  }

  toggleModoOscuro() {
    this.modoOscuro = !this.modoOscuro;
  }
}
