import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Observable, Observer} from "rxjs/index";
import { SeoElementService } from '../services/seo-element.service';

@Injectable()
export class SeoResolver implements Resolve<any> {
  city_id: string;
  constructor(private seoElementService: SeoElementService) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      let type = route.data['type'];
      let fkId = route.params['id'];
      if (fkId) {
        this.seoElementService.get(fkId, type)
          .subscribe(
            res => {
              observer.next(res);
              observer.complete();
            },
            error => {
              observer.next(null);
              observer.complete();
            }
          );
      }
    });
  }
}
