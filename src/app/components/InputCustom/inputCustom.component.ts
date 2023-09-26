import {Component, Directive, ElementRef, OnInit} from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'my-input',
  templateUrl: './inputCustom.component.html',
  styleUrls: ['./inputCustom.component.css']
})
export class MyInputDirective implements OnInit{
  @Input() contentA: string;
  border: string;

  constructor(private elementRef: ElementRef) {
    this.contentA = '';
    this.border = '20px';
  }

  ngOnInit() {
    const input = this.elementRef.nativeElement;
    // input.placeholder = this.contentA;
  }
}
