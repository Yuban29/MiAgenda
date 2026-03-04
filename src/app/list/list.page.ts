import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false
})
export class ListPage {

  contactos = [
    { nombre: 'Ana García',     telefono: '312 456 7890', email: 'ana@email.com' },
    { nombre: 'Carlos López',   telefono: '315 234 5678', email: 'carlos@email.com' },
    { nombre: 'María Martínez', telefono: '300 987 6543', email: 'maria@email.com' },
    { nombre: 'Luis Rodríguez', telefono: '318 765 4321', email: 'luis@email.com' },
  ];

  constructor() {}
}
