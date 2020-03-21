import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdicionarClientePage } from './adicionar-cliente.page';

describe('AdicionarClientePage', () => {
  let component: AdicionarClientePage;
  let fixture: ComponentFixture<AdicionarClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdicionarClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
