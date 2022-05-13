import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlayoutComponent } from './alayout.component';

describe('AlayoutComponent', () => {
  let component: AlayoutComponent;
  let fixture: ComponentFixture<AlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
