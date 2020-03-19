import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditarViajesComponent } from './auditar-viajes.component';

describe('AuditarViajesComponent', () => {
  let component: AuditarViajesComponent;
  let fixture: ComponentFixture<AuditarViajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditarViajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditarViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
