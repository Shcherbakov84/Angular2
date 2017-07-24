import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultTestFormComponent } from './adult-test-form.component';

describe('AdultTestFormComponent', () => {
  let component: AdultTestFormComponent;
  let fixture: ComponentFixture<AdultTestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdultTestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultTestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
