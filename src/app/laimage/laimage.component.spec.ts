import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LAImageComponent } from './laimage.component';

describe('LAImageComponent', () => {
  let component: LAImageComponent;
  let fixture: ComponentFixture<LAImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LAImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LAImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
