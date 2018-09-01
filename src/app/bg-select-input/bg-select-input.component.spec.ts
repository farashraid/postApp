import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgSelectInputComponent } from './bg-select-input.component';

describe('BgSelectInputComponent', () => {
  let component: BgSelectInputComponent;
  let fixture: ComponentFixture<BgSelectInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgSelectInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgSelectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
