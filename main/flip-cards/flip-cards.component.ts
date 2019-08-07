import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-cards',
  templateUrl: './flip-cards.component.html',
  styleUrls: ['./flip-cards.component.css']
})
export class FlipCardsComponent implements OnInit {
  items = [1,2,3,4,5,6,7,8,9,0];
  constructor() { }

  ngOnInit() {
  }

}
