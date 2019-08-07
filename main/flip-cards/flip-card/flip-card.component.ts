import { Component, OnInit } from '@angular/core';
import { VacancyAPI } from '../../services/vacancy.service';

import { Vacancy } from '../../classes/vacancy';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css']
})

export class FlipCardComponent implements OnInit {

  constructor(private _vacancyAPI:VacancyAPI) { }

  listvacancy:Vacancy[];

  ngOnInit() {

    this._vacancyAPI.getvacancy()
    .subscribe(
      data=>{
        this.listvacancy = data;
      }
    );

  }

}
