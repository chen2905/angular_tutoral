import { Component } from '@angular/core';
import { ClsUser } from './cls-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';
  topics = ['Angular', 'React', 'Vue'];
  userModel = new ClsUser('Chen', 'c.gao@ecj.com.au', 98966666, '' , 'morning' , true);
}
