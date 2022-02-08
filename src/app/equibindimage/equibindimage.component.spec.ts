import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiBindImageComponent } from './equibindimage.component';

describe('LAImageComponent', () => {
  let component: EquiBindImageComponent;
  let fixture: ComponentFixture<EquiBindImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiBindImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiBindImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
