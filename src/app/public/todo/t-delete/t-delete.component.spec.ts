import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDeleteComponent } from './t-delete.component';

describe('TDeleteComponent', () => {
  let component: TDeleteComponent;
  let fixture: ComponentFixture<TDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
