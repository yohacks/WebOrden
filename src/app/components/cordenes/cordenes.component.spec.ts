import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordenesComponent } from './cordenes.component';

describe('CordenesComponent', () => {
  let component: CordenesComponent;
  let fixture: ComponentFixture<CordenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CordenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CordenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
