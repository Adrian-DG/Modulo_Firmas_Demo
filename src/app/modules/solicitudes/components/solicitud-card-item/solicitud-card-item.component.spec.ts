import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCardItemComponent } from './solicitud-card-item.component';

describe('SolicitudCardItemComponent', () => {
  let component: SolicitudCardItemComponent;
  let fixture: ComponentFixture<SolicitudCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudCardItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
