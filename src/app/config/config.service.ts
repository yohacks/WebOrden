import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from './config.model';

@Injectable()
export class ConfigService {

    private config: Configuration;
    constructor(private http: HttpClient) {
    }

    async load(url: string) {

        await this.http.get<Configuration>(url)
            .toPromise().
            then(conf => {
                this.config = conf;
            });
    }

    getConfiguration() {
        //debugger
        //if (this.config == undefined) {
        //  this.http.get<Configuration>(url)
        //    .toPromise().;
        //  setTimeout(function () {
        //  }, 2000);
        //}
        return this.config;
    }

}
