import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlogsCreatePage } from './blogs-create.page';

describe('BlogsCreatePage', () => {
  let component: BlogsCreatePage;
  let fixture: ComponentFixture<BlogsCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogsCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
