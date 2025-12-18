import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secondary-button',
  imports: [CommonModule],
  templateUrl: './secondary-button.html',
  styleUrl: './secondary-button.css',
})
export class SecondaryButton {
  @Input() textButton: string = '';
  @Input() iconButton: string = '';
  @Input() disabled: boolean = false;
}
