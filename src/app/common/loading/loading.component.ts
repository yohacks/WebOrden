import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/service/loader-service.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {

  }

}
