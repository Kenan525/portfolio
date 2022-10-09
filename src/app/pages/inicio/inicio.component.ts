import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(elem: string) {
    const element: HTMLElement = document.getElementById(elem);
    element.scrollIntoView({behavior: 'smooth'});
  }

}
