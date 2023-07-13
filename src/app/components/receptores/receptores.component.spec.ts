import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptoresComponent } from './receptores.component';

describe('ReceptoresComponent', () => {
  let component: ReceptoresComponent;
  let fixture: ComponentFixture<ReceptoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceptoresComponent]
    });
    fixture = TestBed.createComponent(ReceptoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
