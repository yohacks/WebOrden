import { AppComponent } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from './../../service/data-api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SidenavComponent } from '../sidenav/sidenav.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  constructor(private router: Router,private appService: AppComponent) { 
    this.appService.openMenu = false;
  }
 
  ngOnInit(): void {

  }
 
  Home(){
    this.router.navigate(['**'])
  }
 
  selecionOpcion(opcion: string){
    console.log(opcion);
    sessionStorage.setItem('opcion',opcion);
    this.appService.openMenu = true;
    this.Home();
  }
}