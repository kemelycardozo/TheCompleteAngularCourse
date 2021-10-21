import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfNgTemplateComponent } from './ng-if-ng-template.component';

describe('NgIfNgTemplateComponent', () => {
  let component: NgIfNgTemplateComponent;
  let fixture: ComponentFixture<NgIfNgTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfNgTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfNgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
