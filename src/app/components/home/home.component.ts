import { AppComponent } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from './../../service/data-api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/service/loader-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService, private appService: AppComponent, private router: Router, private toastr: ToastrService, private loaderService: LoaderService) { 
    //this.appService.openMenu = true;
  }
  public app_slc = "Seleccione la cuenta a consultar:";
  ngOnInit(): void {
    // this.getCuentas();
  }

  /* getCuentas2() {

    this.dataApi.getCuenta().subscribe((data) =>{
      //Success
      debugger;
      this.cuentasObj = data[''];
    },
    (error) => {
      console.error();
    }
    );
  } */

}
