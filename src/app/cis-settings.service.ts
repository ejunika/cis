import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const CONFIG_FILE_URL = 'assets/config/cis-rest.config.json';

@Injectable()
export class CisSettingsService {

  config: any;

  constructor(private httpClient: HttpClient) {
    this.initSettings().subscribe((config) => {
      this.config = config;
    });
  }

  private initSettings(): Observable<any> {
    return this.httpClient.get<any>(CONFIG_FILE_URL);
  }

  getConfig(): any {
    return this.config;
  }

}
