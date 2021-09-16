import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreTrainImageComponent } from './3dpretrainimage.component';

describe('PreTrainImageComponent', () => {
  let component: PreTrainImageComponent;
  let fixture: ComponentFixture<PreTrainImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreTrainImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreTrainImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
