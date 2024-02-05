import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonProfilPageComponent } from './mon-profil-page.component';

describe('MonProfilPageComponent', () => {
  let component: MonProfilPageComponent;
  let fixture: ComponentFixture<MonProfilPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonProfilPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonProfilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
