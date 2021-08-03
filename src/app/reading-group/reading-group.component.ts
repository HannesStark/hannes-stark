import {Component, OnInit} from '@angular/core';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reading-group',
  templateUrl: './reading-group.component.html',
  styleUrls: ['./reading-group.component.scss']
})
export class ReadingGroupComponent implements OnInit {
  value = 'example.mail@gmail.com';
  constructor() {
  }

  ngOnInit(): void {
  }

}
