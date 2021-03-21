import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataApiService } from 'src/app/service/data-api.service';
import { LoaderService } from 'src/app/service/loader-service.service';

@Component({
  selector: 'app-aordenes',
  templateUrl: './aordenes.component.html',
  styleUrls: ['./aordenes.component.css']
})
export class AordenesComponent implements OnInit {

  constructor(public dataApi: DataApiService, private toastr: ToastrService, private loaderService: LoaderService, private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    debugger;
    this.loaderService.display(true);
    this.dataApi.crearOrdenesAutomatico().subscribe(data => {
      debugger;
      this.loaderService.display(false);
      this.toastr.success("Orden creada con éxito");
      this.route.navigate(['/home']);
    },
      (error) => {
        this.loaderService.display(false);
        //this.toastr.error(error.statusText);
        this.toastr.error("El formulario no esta debidamente diligenciado");
      });
  }
}
