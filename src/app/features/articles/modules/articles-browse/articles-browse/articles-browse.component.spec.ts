import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesBrowseComponent } from './articles-browse.component';

describe('ArticlesBrowseComponent', () => {
  let component: ArticlesBrowseComponent;
  let fixture: ComponentFixture<ArticlesBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
