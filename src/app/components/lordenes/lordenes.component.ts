import { Orden } from 'src/app/models/orden-interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataApiService } from 'src/app/service/data-api.service';
import { LoaderService } from 'src/app/service/loader-service.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-lordenes',
  templateUrl: './lordenes.component.html',
  styleUrls: ['./lordenes.component.css']
})
export class LordenesComponent implements OnInit {

  ordenes: Orden[];
  constructor(public dataApi: DataApiService, private toastr: ToastrService, private loaderService: LoaderService, private route: Router) { }
  idABuscar:number;
  
  ngOnInit(): void {
    this.consultarOrdenes();
    this.idABuscar=0;
  }

  consultarOrdenes() {
    this.loaderService.display(true);

    this.dataApi.listarOrdenes().subscribe(data => {
      this.ordenes = data;
      this.loaderService.display(false);

    },
      (error) => {
        this.loaderService.display(false);
        this.toastr.error(error.statusText);
      }
    );
  }

  consultarOrdenPorId(){
    this.loaderService.display(true);
    if(this.idABuscar == 0){
      this.loaderService.display(false);
      this.toastr.error("Debe ingresar un id");
    }
    else {
      this.dataApi.buscarOrdenPorId(this.idABuscar).subscribe(data => {
        this.ordenes = [];
        this.ordenes.push(data);
        this.loaderService.display(false);
  
      },
        (error) => {
          this.loaderService.display(false);
          if(error.statusText=="Not Found"){
            this.toastr.error("La orden a buscar no existe");

          }
          else{
            this.toastr.error(error.statusText);
          }
        }
      );
    }
    
  }

}
