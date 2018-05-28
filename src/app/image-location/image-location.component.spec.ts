import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLocationComponent } from './image-location.component';

describe('ImageLocationComponent', () => {
  let component: ImageLocationComponent;
  let fixture: ComponentFixture<ImageLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
