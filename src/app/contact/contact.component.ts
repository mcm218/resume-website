import { Component, Input, OnInit } from '@angular/core';
import { ContactMe } from '../models/contact-me';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input () contact: ContactMe = new ContactMe ();
  
  constructor() { }

  ngOnInit() {
  }

}
