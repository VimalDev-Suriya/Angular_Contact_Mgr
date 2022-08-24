import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css'],
})
export class ContactManagerComponent implements OnInit {
  added: string = 'hello';
  constructor() {}

  ngOnInit(): void {
    console.log(this.added);
  }
}
