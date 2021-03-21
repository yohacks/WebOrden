import { Subscription } from 'rxjs';
import { Title } from "@angular/platform-browser";
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebOrden';
  public openMenu: boolean;
  public movil: boolean;

  public cargando: boolean = false;
  public mostrarMenu: boolean = false;
  private subscription: Subscription[] = [];
  public urlSecurity: string;
  public suscripcionActiva: boolean = true;
  public ancho: number;
  public subscribe: Subscription;
  public url = "";

  constructor(public titleSrv: Title,
    private route: Router,
    private configService: ConfigService
  ) {
    this.ancho = screen.width;
    this.urlSecurity = this.configService.getConfiguration().Security;
    this.subscribe = route.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          //     setTimeout(() => {
          //     var valid = (event.url.includes("create") || event.url.includes("edit") || event.url.includes("detail"));
          //   }, 100);
          this.url= event.url;
          this.movil =  this.ancho>=768 || (event.url.includes("home"));
       // debugger;
        //  this.isHome = (event.url.includes("home")||event.url.includes("menu")||event.url.includes("auth")) ? false : true;
        }
      });
  }
  loadingComponent(cargar: boolean) {
    this.cargando = cargar;
    let x: any = document.getElementsByTagName('Body')[0];
    x.style.pointerEvents = cargar ? 'none' : 'auto';
  }
}
