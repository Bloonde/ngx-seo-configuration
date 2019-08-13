import {Component, ComponentFactoryResolver, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import { AbstractFormComponent } from '../../../../../bloonde-ngx-template/src/forms/abstract-form.component';
import { SeoElement } from '../../models/seo-element';
import { InputFormDirective } from '../../../../../bloonde-ngx-template/src/forms/directives/input-form.directive';
import { LabelFormDirective } from '../../../../../bloonde-ngx-template/src/forms/directives/label-form.directive';
import { ValidationService } from '../../../../../bloonde-ngx-template/src/forms/services/validation.service';
import { ResponseHelper } from '../../../../../bloonde-ngx-template/src/responses/response.helper';
import { MessageService } from '../../../../../bloonde-ngx-template/src/responses/message.service';
import { SeoElementFormConfiguration } from './seo-element-form-configuration';
import { SeoElementService } from '../../services/seo-element.service';
import { CodesHelper } from '../../../../../bloonde-ngx-template/src/responses/codes.helper';

@Component({
  selector: 'seo-element-form',
  templateUrl: './seo-element-form.component.html',
  styleUrls: ['./seo-element-form.component.css']
})

export class SeoElementFormComponent extends AbstractFormComponent implements OnInit {


  @Input()
  public modelValue: SeoElement;

  @ViewChildren(InputFormDirective) inputFormDirectives: QueryList<InputFormDirective>;
  @ViewChildren(LabelFormDirective) labelFormDirective: QueryList<LabelFormDirective>;

  constructor(private validationService: ValidationService,
              private seoElementService: SeoElementService,
              private responseHelper: ResponseHelper,
              private messageService: MessageService,
              private componentFactoryResolver: ComponentFactoryResolver) {
    super();
    this.structure = SeoElementFormConfiguration.structure;
  }

  ngOnInit() {
  }


  public new(): void {
    this.modelValue = new SeoElement();
    this.buildErrorModelAndEmitters();
  }
  public editBySeoElementIdAndType(fkId: any, type: any): void { // En este caso el id va a venir nulo
    this.getModelService().get(fkId, type).subscribe(
      res => {
        if(res) {
          this.setModel(res['data'] ? res['data'] : res); // Reasignación del modelo
          this.modelValue.fk_id = fkId;
          this.modelValue.type = type;
          this.successResponseEdit(res); //Hook post edit success
          this.buildErrorModelAndEmitters(); // Reseteamos errores, modelo y emitters
        }
      },
      error => {
        if (error.status == CodesHelper.FAILED_VALIDATOR_CODE) {
          this.serverErrors = error.error;
          this.emitServerError();
        } else {
          this.getResponseHelper().handleError(error);
        }
      }
    );
  }
  // successResponseEdit(res: any): void {
  //   // this.user
  // }
  // public edit(id): void {
  //   this.adminService.get(id).subscribe(
  //     res => {
  //       this.admin = User.copy(res);
  //       this.buildErrorModelAndEmiters();
  //     },
  //     error => {
  //       if (error.status == CodesHelper.FAILED_VALIDATOR_CODE) {
  //         this.serverErrors = error.error;
  //         this.emitServerError();
  //       } else {
  //         this.responseHelper.handleError(error);
  //       }
  //     }
  //   );
  // }
  public successResponseEdit(res): void {
    this.modelValue = SeoElement.copy(this.modelValue);
  }
  public getInputFormDirectives(): QueryList<InputFormDirective> {
    return this.inputFormDirectives;
  }
  public getLabelFormDirectives(): QueryList<LabelFormDirective> {
    return this.labelFormDirective;
  }

  public getModel(): any {
    return this.modelValue;
  }
  public getComponentFactoryResolver(): any {
    return this.componentFactoryResolver;
  }

  public getMessageService(): MessageService {
    return this.messageService;
  }
  public getModelService(): any {
    return this.seoElementService;
  }
  public getValidationService(): ValidationService {
    return this.validationService;
  }
  public getResponseHelper(): ResponseHelper {
    return this.responseHelper;
  }
  setModel(model: any): any {
    this.modelValue = model;
  }
  successResponseStore(res): void {
    this.modelValue = SeoElement.copy(res);
  }
  public success(): void {
    this.onSuccess.emit({id: this.modelValue.id});
  }
}
