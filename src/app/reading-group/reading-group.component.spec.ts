import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingGroupComponent } from './reading-group.component';

describe('ReadingGroupComponent', () => {
  let component: ReadingGroupComponent;
  let fixture: ComponentFixture<ReadingGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
