import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinadoresComponent } from './patrocinadores.component';

describe('PatrocinadoresComponent', () => {
  let component: PatrocinadoresComponent;
  let fixture: ComponentFixture<PatrocinadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatrocinadoresComponent]
    });
    fixture = TestBed.createComponent(PatrocinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
