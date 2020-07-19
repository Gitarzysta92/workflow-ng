import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnedActivitiesComponent } from './pinned-activities.component';

describe('PinnedActivitiesComponent', () => {
  let component: PinnedActivitiesComponent;
  let fixture: ComponentFixture<PinnedActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinnedActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinnedActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
