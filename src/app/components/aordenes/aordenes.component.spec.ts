import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AordenesComponent } from './aordenes.component';

describe('AordenesComponent', () => {
  let component: AordenesComponent;
  let fixture: ComponentFixture<AordenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AordenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AordenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
