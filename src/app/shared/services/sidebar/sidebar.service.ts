import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public isLightThemeActive = true;

  constructor() { }
}
