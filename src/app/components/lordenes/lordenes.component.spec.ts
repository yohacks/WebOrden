import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LordenesComponent } from './lordenes.component';

describe('LordenesComponent', () => {
  let component: LordenesComponent;
  let fixture: ComponentFixture<LordenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LordenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LordenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
