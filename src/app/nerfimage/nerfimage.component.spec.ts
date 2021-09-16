import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NerfImageComponent } from './nerfimage.component';

describe('NerfImageComponent', () => {
  let component: NerfImageComponent;
  let fixture: ComponentFixture<NerfImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NerfImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NerfImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
