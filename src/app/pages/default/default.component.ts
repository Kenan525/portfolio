import {Component, OnDestroy, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit, OnDestroy {
  @ViewChild('defaultComponent') defaultComponent: ElementRef;

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.defaultComponent);
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
  }
}
