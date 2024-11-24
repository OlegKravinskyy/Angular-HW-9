import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadFirstComponent } from './lazyload-first.component';

describe('LazyloadFirstComponent', () => {
  let component: LazyloadFirstComponent;
  let fixture: ComponentFixture<LazyloadFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyloadFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyloadFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
