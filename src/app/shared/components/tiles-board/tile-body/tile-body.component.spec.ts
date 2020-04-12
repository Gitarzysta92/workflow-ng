import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileBodyComponent } from './tile-body.component';

describe('TileBodyComponent', () => {
  let component: TileBodyComponent;
  let fixture: ComponentFixture<TileBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
