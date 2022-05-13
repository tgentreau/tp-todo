import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TIndexComponent } from './t-index.component';

describe('TIndexComponent', () => {
  let component: TIndexComponent;
  let fixture: ComponentFixture<TIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
