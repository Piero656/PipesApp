import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayuscula:boolean = true;

  ordenarPor:string = '';

  heroes:Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

  cambiar(){
    this.enMayuscula = !this.enMayuscula;
  }

  cambiarValor(valor:string) {
    this.ordenarPor = valor;
  }



}
