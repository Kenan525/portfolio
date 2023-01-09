import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  public dataServices = [
    {
      title1: 'Ui/Ux',
      title2: 'Diseñador',
      icon: 'fas fa-th-large',
      modalInfo: [
        {
          name: 'Creativo desarrollador de experiencia de usuario',
        },
        {
          name: 'Desarrollador de interface de usuario',
        },
        {
          name: 'Desarrollador de paginas web',
        },
        {
          name: 'desrrollador de backend',
        },
      ],
    },
    {
      title1: 'Desarrollador',
      title2: 'Frontend',
      icon: 'fas fa-code',
      modalInfo: [
        {
          name: 'Creativo desarrollador de experiencia de usuario',
        },
        {
          name: 'Desarrollador de interface de usuario',
        },
        {
          name: 'Desarrollador de paginas web',
        },
        {
          name: 'desrrollador de backend',
        },
      ],
    },
    {
      title1: 'Diseñador de',
      title2: 'marcas',
      icon: 'fas fa-pencil-alt',
      modalInfo: [
        {
          name: 'Creativo desarrollador de experiencia de usuario',
        },
        {
          name: 'Desarrollador de interface de usuario',
        },
        {
          name: 'Desarrollador de paginas web',
        },
        {
          name: 'desrrollador de backend',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
