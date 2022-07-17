import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoAbmComponent } from './curso-abm.component';

describe('CursoAbmComponent', () => {
  let component: CursoAbmComponent;
  let fixture: ComponentFixture<CursoAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
