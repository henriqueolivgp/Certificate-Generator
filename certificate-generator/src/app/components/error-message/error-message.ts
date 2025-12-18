import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  imports: [],
  templateUrl: './error-message.html',
  styleUrl: './error-message.css',
})
export class ErrorMessage {
  @Input() message: string = '';  // Recive the string value from father's component
  }
