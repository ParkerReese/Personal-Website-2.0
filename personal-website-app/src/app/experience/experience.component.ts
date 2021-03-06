import { Component, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'parker-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Output() changeTabIndex = new EventEmitter();
}
