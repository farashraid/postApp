import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesSelectComponent } from './clothes-select.component';

describe('ClothesSelectComponent', () => {
  let component: ClothesSelectComponent;
  let fixture: ComponentFixture<ClothesSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
