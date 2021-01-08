import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpaceComponent implements OnInit {

  queryParams = [
  	{
  		name: '',
  		value: ''
  	}
  ];

  text = `Returning Customer`;

  value = ``;

  queryParams1 = [
  	{
  		name: '',
  		value: ''
  	}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
