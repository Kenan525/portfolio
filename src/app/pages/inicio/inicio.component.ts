import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import Typed, * as typed from 'typed.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  @ViewChild('typedString') typedString: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const options = {
      strings: ['Kenan', 'Web Developer', 'Angular Developer', 'Backend Developer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };

    const typed = new Typed(this.typedString.nativeElement, options);
  }

  onClick(elem: string): void {
    const element: HTMLElement = document.getElementById(elem);
    element.scrollIntoView({behavior: 'smooth'});
  }

}
