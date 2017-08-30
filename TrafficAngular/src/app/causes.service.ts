import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Cause } from './causes';
import { WebApi } from './api.service';

@Injectable()
export class CausesService {
  public causes: Cause[];
  
  private Url = WebApi.API_ENDPOINT+ 'Causes';  // URL to web api
  
  constructor(private http: Http) {
    this.getCauses()
    .then(data =>{   
      this.causes = data;
    });
   }

  getCauses(): Promise<Cause[]> {
    return this.http.get(this.Url)
               .toPromise()
               .then(response => response.json() as Cause[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}