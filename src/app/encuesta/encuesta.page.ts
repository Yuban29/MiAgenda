import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.page.html',
  styleUrls: ['./encuesta.page.scss'],
  standalone: false
})
export class EncuestaPage {

  // Pregunta 1: calificación general (estrellas 1-5)
  calificacion: number = 0;

  // Pregunta 2: aspecto favorito
  aspectoFavorito: string = '';

  // Pregunta 3: recomendaría la app
  recomendaria: string = '';

  // Pregunta 4: comentario libre
  comentario: string = '';

  // Control para mostrar el mensaje de éxito
  enviado: boolean = false;

  constructor(private navCtrl: NavController) {}

  seleccionarEstrella(valor: number) {
    this.calificacion = valor;
  }

  enviarEncuesta() {
    if (this.calificacion === 0 || !this.aspectoFavorito || !this.recomendaria) {
      return;
    }
    this.enviado = true;
  }

  volverAlInicio() {
    this.navCtrl.navigateBack('/blank');
  }
}
