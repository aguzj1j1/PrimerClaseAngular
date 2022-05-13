import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedComponent1ComponentComponent } from './nested-component1-component.component';

describe('NestedComponent1ComponentComponent', () => {
  let component: NestedComponent1ComponentComponent;
  let fixture: ComponentFixture<NestedComponent1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedComponent1ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedComponent1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
