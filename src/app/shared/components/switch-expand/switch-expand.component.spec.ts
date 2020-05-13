import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchExpandComponent } from './switch-expand.component';

describe('SwitchExpandComponent', () => {
  let component: SwitchExpandComponent;
  let fixture: ComponentFixture<SwitchExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
