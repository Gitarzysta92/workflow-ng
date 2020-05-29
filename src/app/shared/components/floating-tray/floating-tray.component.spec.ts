import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingTrayComponent } from './floating-tray.component';

describe('ExtendableTrayComponent', () => {
  let component: FloatingTrayComponent;
  let fixture: ComponentFixture<FloatingTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
