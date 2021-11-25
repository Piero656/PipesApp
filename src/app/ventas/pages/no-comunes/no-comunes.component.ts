import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {
  //i18nSelect
  nombre:string = 'Lady';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla',
  }

  //i18nPlural
  clientes:string[] = [
    'Maria',
    'Pedro',
    'Pedro',
  ]
  clientesMapa = {
    '=0' : 'no tenemos ni un cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    '=2' : 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  constructor() { }

  ngOnInit(): void {
  }


  cambiarCliente () {
    this.nombre = 'Pedro'
    this.genero = 'masculino'

  }

  borrarCliente() {
    this.clientes.pop();
  }



  ///Key value Pipe


  persona = {
    nombre: ' Piero',
    edad: 22,
    direcccion: 'Lima, Perú'
  }


  //Async Pipe

  miObservable = interval(1000);


  miPromesa = new Promise( (resolve,reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa.')
    }, 3500);
  } )



}
