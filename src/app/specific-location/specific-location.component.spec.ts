import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificLocationComponent } from './specific-location.component';

describe('SpecificLocationComponent', () => {
  let component: SpecificLocationComponent;
  let fixture: ComponentFixture<SpecificLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
