import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }
  public app_name = "Seleccione el tema que desea consultar :";
  ngOnInit(): void {
   
  }
  cerrarSesion(){
    sessionStorage.setItem('opcion','');
  }
  irAMenu(){
    if(window.location.href.includes('menu')){
    }
    else {
      this.router.navigate(['home'])
    }
  }

}
