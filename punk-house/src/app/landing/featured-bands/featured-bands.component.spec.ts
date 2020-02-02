import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBandsComponent } from './featured-bands.component';

describe('FeaturedBandsComponent', () => {
  let component: FeaturedBandsComponent;
  let fixture: ComponentFixture<FeaturedBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
