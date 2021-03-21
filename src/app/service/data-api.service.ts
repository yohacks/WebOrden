import { Orden } from 'src/app/models/orden-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private urlServerReportes: string;
  private header: HttpHeaders;

  constructor(private http: HttpClient, private configSrv: ConfigService) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'

    });
    this.urlServerReportes = configSrv.getConfiguration().webApiUrlReportes;
  }

  public crearOrden(modelo: Orden) {
    this.header;
    const url_api = this.urlServerReportes + 'OrdenCompra';
    return this.http.post<any>(url_api, modelo, { headers: this.header });
  }
  public listarOrdenes(): Observable<any> {
    const url_api = this.urlServerReportes + 'OrdenCompra';
    return this.http.get(url_api);
  }
  public buscarOrdenPorId(id:number): Observable<any> {
    const url_api = this.urlServerReportes + 'OrdenCompraFiltro/'+id;
    return this.http.get<Orden>(url_api, { headers: this.header });
  }
  public crearOrdenesAutomatico(): Observable<any> {
    const url_api = this.urlServerReportes + 'OrdenCompraFiltro';
    return this.http.post<any>(url_api, { headers: this.header });
  }
}
