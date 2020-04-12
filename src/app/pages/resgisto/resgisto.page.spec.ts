import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResgistoPage } from './resgisto.page';

describe('ResgistoPage', () => {
  let component: ResgistoPage;
  let fixture: ComponentFixture<ResgistoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgistoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResgistoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
