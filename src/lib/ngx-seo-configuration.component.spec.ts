import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSeoConfigurationComponent } from './ngx-seo-configuration.component';

describe('NgxSeoConfigurationComponent', () => {
  let component: NgxSeoConfigurationComponent;
  let fixture: ComponentFixture<NgxSeoConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSeoConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSeoConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
