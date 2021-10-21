import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPipeCustomizedComponent } from './input-pipe-customized.component';

describe('InputPipeCustomizedComponent', () => {
  let component: InputPipeCustomizedComponent;
  let fixture: ComponentFixture<InputPipeCustomizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPipeCustomizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPipeCustomizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
