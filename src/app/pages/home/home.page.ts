import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  irPagina1(){
    this.router.navigate(['/ejemplo1'])
  }
  irPagina2(){
    this.router.navigate(['/ejemplo2'])
  }
  irPagina3(){
    this.router.navigate(['/ejemplo3'])
  }
  rut:String ="";
  nombreCompleto:string ="";
  edad:BigInteger;
  cambiarDatos(){
    alert('pincho boton');
  }
}
