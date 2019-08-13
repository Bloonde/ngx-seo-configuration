import { NgModule } from '@angular/core';
import { NgxSeoConfigurationComponent } from './ngx-seo-configuration.component';
import { SeoElementFormComponent } from './components/seo-element-form/seo-element-form.component';
import { SeoElementService } from './services/seo-element.service';
import { NgTemplateModule } from '../../../bloonde-ngx-template/src/lib/ng-template.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../../bloonde-ngx-template/src/session/auth.interceptor';
import { SeoResolver } from './resolvers/seo.resolver';

@NgModule({
  imports: [
    NgTemplateModule
  ],
  declarations: [
    NgxSeoConfigurationComponent,
    SeoElementFormComponent,
  ],
  exports: [NgxSeoConfigurationComponent, SeoElementFormComponent],
  providers: [
    SeoElementService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },
    SeoResolver
  ]
})
export class NgxSeoConfigurationModule { }
