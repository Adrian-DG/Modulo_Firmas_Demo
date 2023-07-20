import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalcontractComponent } from './digitalcontract.component';

describe('DigitalcontractComponent', () => {
  let component: DigitalcontractComponent;
  let fixture: ComponentFixture<DigitalcontractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalcontractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalcontractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
