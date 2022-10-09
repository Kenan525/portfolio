import { Injectable } from '@angular/core';
import {
  Theme,
  light,
  dark,
  defaultTheme,
  green,
  pink,
  purple,
  gold
} from '../interfaces/ThemeInterface';
@Injectable({
  providedIn: 'root',
})
export class ThemeServiceService {
  private active: Theme;
  private availableThemes: Theme[] = [
    light,
    dark,
    defaultTheme,
    green,
    pink,
    purple,
    gold
  ];

  constructor() {}

  setDefaultTheme(): void {
    this.setActiveTheme(defaultTheme);
  }

  setPurple(): void {
    this.setActiveTheme(purple);
  }

  setGreen(): void {
    this.setActiveTheme(green);
  }

  setPink(): void {
    this.setActiveTheme(pink);
  }

  setGold(): void {
    this.setActiveTheme(gold);
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
