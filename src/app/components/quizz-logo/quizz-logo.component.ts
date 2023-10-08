import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quizz-logo',
  templateUrl: './quizz-logo.component.html',
  styleUrls: ['./quizz-logo.component.css']
})
export class QuizzLogoComponent {
      @Input() title: string = ''
}
