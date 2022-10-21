import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  public opacityChange = 1;
  public splashTransition;
  // First access the splash is visible
  public showSplash = true;

  readonly ANIMATION_DURATION = 1;

  constructor() { }

  ngOnInit(): void {

  }

}
