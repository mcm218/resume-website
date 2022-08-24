import { Component, Input } from '@angular/core';
import { ContactMe } from '../models/contact-me';
import { Education } from '../models/education';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input () title: string = '';
  @Input () subtitle: string = '';
  
  @Input () education: Education = new Education ();
  
  @Input () contact: ContactMe = new ContactMe ();

  constructor() { }
}
