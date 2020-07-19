import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnedTileComponent } from './pinned-tile.component';

describe('PinnedTileComponent', () => {
  let component: PinnedTileComponent;
  let fixture: ComponentFixture<PinnedTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinnedTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinnedTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
