import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostToListingComponent } from './post-to-listing.component';

describe('PostToListingComponent', () => {
  let component: PostToListingComponent;
  let fixture: ComponentFixture<PostToListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostToListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostToListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
