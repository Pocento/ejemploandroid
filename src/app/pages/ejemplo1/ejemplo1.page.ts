import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.page.html',
  styleUrls: ['./ejemplo1.page.scss'],
})
export class Ejemplo1Page implements OnInit {

  constructor(private router: Router) {}

  irPagina1(){
    this.router.navigate(['/home'])
  }
  ngOnInit() {
  }

}
