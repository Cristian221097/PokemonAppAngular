import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeciePokemonComponent } from './especie-pokemon.component';

describe('EspeciePokemonComponent', () => {
  let component: EspeciePokemonComponent;
  let fixture: ComponentFixture<EspeciePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspeciePokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspeciePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
