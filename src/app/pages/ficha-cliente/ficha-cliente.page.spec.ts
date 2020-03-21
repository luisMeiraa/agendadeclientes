import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FichaClientePage } from './ficha-cliente.page';

describe('FichaClientePage', () => {
  let component: FichaClientePage;
  let fixture: ComponentFixture<FichaClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FichaClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
