import { Attribute, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'interest-button',
  templateUrl: './interest-button.component.html',
  styleUrls: ['./interest-button.component.css'],
})
export class InterestButtonComponent implements OnInit {
  @Input() public name: string | null = null;
  constructor() {}

  ngOnInit(): void {}
}
