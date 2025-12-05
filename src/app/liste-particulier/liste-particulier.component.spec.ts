import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeParticulierComponent } from './liste-particulier.component';

describe('ListeParticulierComponent', () => {
  let component: ListeParticulierComponent;
  let fixture: ComponentFixture<ListeParticulierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeParticulierComponent]
    });
    fixture = TestBed.createComponent(ListeParticulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
