import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-signup-personal',
  templateUrl: './signup-personal.component.html',
  styleUrls: ['./signup-personal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupPersonalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
