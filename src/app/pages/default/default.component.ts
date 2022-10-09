import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
  }
}
