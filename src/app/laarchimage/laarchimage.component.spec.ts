import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LAArchImageComponent } from './laarchimage.component';

describe('LAImageComponent', () => {
  let component: LAArchImageComponent;
  let fixture: ComponentFixture<LAArchImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LAArchImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LAArchImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
