import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfyComponent } from './dfy.component';

describe('DfyComponent', () => {
  let component: DfyComponent;
  let fixture: ComponentFixture<DfyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
