import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
@Component({
  // selector: 'nz-demo-layout-custom-trigger',
  selector: 'nz-demo-layout-custom-trigger',
  templateUrl: 'layoutlogged.component.html',
  styleUrls: ['layoutlogged.component.css']
})
export class NzDemoLayoutCustomTriggerComponent {
  isCollapsed = true;
  currentRoute = 'login';
  selectedValue = ''
  onHover() {
    this.isCollapsed = false;
  }
  onMouseMove() {
    this.isCollapsed = true;
  }

  optionList = [
    { label: 'Tiếng việt', value: 'vi-Vi' },
    { label: 'English', value: 'en-US' }
  ];

  constructor(  public router: Router, public translateService: TranslateService) {}
  onSidebarItemClick(key: string) {

  }

  log(value: { label: string; value: string; age: number }): void {
    this.changeLanguage(value.value)
  }

  public changeLanguage(language: string): void {
    this.translateService.use(language);
  }

  visible: boolean = false;

  clickMe(): void {
    this.visible = false;
  }

  change(value: boolean): void {
    console.log(value);
  }
}
