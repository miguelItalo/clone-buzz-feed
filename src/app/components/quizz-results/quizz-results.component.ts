import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quizz-results',
  templateUrl: './quizz-results.component.html',
  styleUrls: ['./quizz-results.component.css']
})
export class QuizzResultsComponent {
      @Input() isFinished?: boolean
      @Input() answerSelected: string = ''
}
