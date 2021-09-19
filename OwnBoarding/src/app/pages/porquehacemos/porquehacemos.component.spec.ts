import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorquehacemosComponent } from './porquehacemos.component';

describe('PorquehacemosComponent', () => {
  let component: PorquehacemosComponent;
  let fixture: ComponentFixture<PorquehacemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorquehacemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorquehacemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
