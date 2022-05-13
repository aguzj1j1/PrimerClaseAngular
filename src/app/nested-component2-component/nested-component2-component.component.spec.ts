import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedComponent2ComponentComponent } from './nested-component2-component.component';

describe('NestedComponent2ComponentComponent', () => {
  let component: NestedComponent2ComponentComponent;
  let fixture: ComponentFixture<NestedComponent2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedComponent2ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedComponent2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
