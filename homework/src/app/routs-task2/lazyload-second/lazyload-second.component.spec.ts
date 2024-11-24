import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadSecondComponent } from './lazyload-second.component';

describe('LazyloadSecondComponent', () => {
  let component: LazyloadSecondComponent;
  let fixture: ComponentFixture<LazyloadSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyloadSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyloadSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
