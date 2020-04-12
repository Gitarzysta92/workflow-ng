import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestActivitiesComponent } from './newest-activities.component';

describe('NewestActivitiesComponent', () => {
  let component: NewestActivitiesComponent;
  let fixture: ComponentFixture<NewestActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
