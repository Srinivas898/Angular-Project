import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipcartApiComponent } from './flipcart-api.component';

describe('FlipcartApiComponent', () => {
  let component: FlipcartApiComponent;
  let fixture: ComponentFixture<FlipcartApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipcartApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipcartApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
