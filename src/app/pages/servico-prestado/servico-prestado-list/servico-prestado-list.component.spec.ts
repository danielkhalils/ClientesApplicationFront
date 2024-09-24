import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoPrestadoListComponent } from './servico-prestado-list.component';

describe('ServicoPrestadoListComponent', () => {
  let component: ServicoPrestadoListComponent;
  let fixture: ComponentFixture<ServicoPrestadoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicoPrestadoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicoPrestadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
