import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileTileComponent } from './user-profile-tile.component';

describe('UserProfileTileComponent', () => {
  let component: UserProfileTileComponent;
  let fixture: ComponentFixture<UserProfileTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
