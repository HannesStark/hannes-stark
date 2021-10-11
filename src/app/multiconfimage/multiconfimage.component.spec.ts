import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiConfImageComponent } from './multiconfimage.component';

describe('MultiConfImageComponent', () => {
  let component: MultiConfImageComponent;
  let fixture: ComponentFixture<MultiConfImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiConfImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiConfImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
