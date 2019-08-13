import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { ApiRoutesHelper } from '../helpers/api-routes.helper';
import { SeoElement } from '../models/seo-element';


@Injectable()
export class SeoElementService {

  constructor(public _http: HttpClient) {
  }

  get(fkId: any, type: any): Observable<any> {
    return this._http.get(ApiRoutesHelper.getSeoElementURL(fkId, type));
  }

  store(seoElement: SeoElement): Observable<Object> {
    const params = this.buildParams(seoElement);
    return this._http.post(ApiRoutesHelper.getSeoElementStoreURL(), params);
  }

  update(seoElement: SeoElement): Observable<Object> {
    const params = this.buildParams(seoElement);
    return this._http.put(ApiRoutesHelper.getSeoElementUpdateURL(seoElement.id), JSON.parse(JSON.stringify(params)));
  }

  private buildParams(seoElement: SeoElement): any {
    const metadatasFields = ['title', 'description'];
    const fields = [
      'id',
      'fk_id',
      'type',
      'activated'
    ];
    let metadatas = [];
    metadatasFields.forEach(function(field) {
      let metadata = {
        key: field,
        value: seoElement[field],
        fk_id: seoElement['id']
      };
      metadatas.push(metadata);
    })
    let params = {};
    fields.forEach(function(field) {
        params[field] = seoElement[field];
    });
    params['metadatas'] = metadatas;
    return params;
  }

}
