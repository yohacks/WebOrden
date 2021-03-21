import { Router } from '@angular/router';
import { DataApiService } from './../../service/data-api.service';
import { Component, OnInit } from '@angular/core';
import { Orden } from 'src/app/models/orden-interface';
import { LoaderService } from 'src/app/service/loader-service.service';
import { ToastrService } from 'ngx-toastr';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cordenes',
  templateUrl: './cordenes.component.html',
  styleUrls: ['./cordenes.component.css']
})
export class CordenesComponent implements OnInit {
  private header: HttpHeaders;
  constructor(public dataApi : DataApiService,private toastr: ToastrService, private loaderService: LoaderService,private route:Router) { 
   
  }
  orden: Orden = new Orden();

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.orden.PROCEDENCIA = "Registro manual";
    debugger;
    this.loaderService.display(true);
    this.dataApi.crearOrden(this.orden).subscribe(data => {
      debugger;
      this.loaderService.display(false);
      this.toastr.success("Orden creada con éxito");
      this.route.navigate(['/home']);
  },
  (error)=>{
    this.loaderService.display(false);
    //this.toastr.error(error.statusText);
    this.toastr.error("El formulario no esta debidamente diligenciado");
  });
  }
}
