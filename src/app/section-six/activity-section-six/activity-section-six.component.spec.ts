import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySectionSixComponent } from './activity-section-six.component';

describe('ActivitySectionSixComponent', () => {
  let component: ActivitySectionSixComponent;
  let fixture: ComponentFixture<ActivitySectionSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitySectionSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySectionSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
