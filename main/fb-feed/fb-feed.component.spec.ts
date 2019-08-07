import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbFeedComponent } from './fb-feed.component';

describe('FbFeedComponent', () => {
  let component: FbFeedComponent;
  let fixture: ComponentFixture<FbFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
