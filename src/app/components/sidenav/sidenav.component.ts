import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
   }
  cerrarSesion() {

  }
  ngOnInit(): void {
    this.desactivarSidenav();
  }
  validarVentana() {
    var URLactual = window.location;
    var URLanterior = window.history;
    if (URLactual.href.includes("auth")) {
      this.cerrarSesion();
    }
    else if(URLanterior.state.navigationId == 2){
      this.cerrarSesion();
    }
    else {
      window.history.back();
    }
  }
  desactivarSidenav(){
    if(document.getElementById("drawer")){
    }
  }
  activarSidenav(){
  }
  mostrarSideNav(){
    var modulo = sessionStorage.getItem('opcion');
    return modulo;
  }
}
