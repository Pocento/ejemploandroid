// importacion de componentes
import { Component } from '@angular/core';
// importacion de linkeo entre paginas
import { Router } from '@angular/router';
//importacion de Control de Formularios
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // en su interio se declaran los objetos a inyectar en la pagina Typescript
  constructor(private router: Router) {}

  // linkeo entre paginas
  irPagina1(){
    this.router.navigate(['/ejemplo1'])
  }
  irPagina2(){
    this.router.navigate(['/ejemplo2'])
  }
  irPagina3(){
    this.router.navigate(['/ejemplo3'])
  }
    // Definicion de variables siempre sera ' nombre: tipo="valor inicial" ' 
    //puede ser String, boolean, number, any (cualquier dato), Array (definicion de arreglo)
  rut:String ="";
  nombreCompleto:string ="";
  edad:Number;
  // declaración de objetos de tipo formulario
  elrut = new FormControl('');
  


  // Metodos de acceso
  cambiarDatos(){
    alert('pincho boton');
  }
}

//implementacion de codigo en javascript 