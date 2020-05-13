import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnedArticlesComponent } from './pinned-articles.component';

describe('PinnedArticlesComponent', () => {
  let component: PinnedArticlesComponent;
  let fixture: ComponentFixture<PinnedArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinnedArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinnedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
