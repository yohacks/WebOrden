import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationEnd } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public subscribe: Subscription;
  public ancho: number;
  constructor(private router: Router) {
    this.ancho = screen.width;
    this.subscribe = router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          //     setTimeout(() => {
          //     var valid = (event.url.includes("create") || event.url.includes("edit") || event.url.includes("detail"));
          //   }, 100);
          this.url= event.url;
          this.isHome = !(event.url.includes("menu")||event.url.includes("auth")||event.url.includes("home")) &&(this.ancho>=768||event.url.includes("home") ||(event.url.includes("/")&&event.urlAfterRedirects.includes("menu"))|| (this.ancho<=768&&event.url.includes("auth"))|| (this.ancho<=768&&event.url.includes("**")));
       // debugger;
        //  this.isHome = (event.url.includes("home")||event.url.includes("menu")||event.url.includes("auth")) ? false : true;
        }
      });
  }
  public app_name = "Seleccione el tema que desea consultar";
  public url = "";
  public isHome: boolean = true;
  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth;
    this.ancho = event.target.innerWidth;
    this.isHome =(this.ancho>=768||this.url.includes("crearOrden"));
  }
  onButtonGroupClick($event) {
    let clickedElement = $event.target || $event.srcElement;

    if (clickedElement.nodeName === "A") {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className += " active";
    }

  }
  cerrarSesion() {

  }

}
