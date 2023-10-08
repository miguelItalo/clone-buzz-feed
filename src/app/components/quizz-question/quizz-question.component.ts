import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quizz-question',
  templateUrl: './quizz-question.component.html',
  styleUrls: ['./quizz-question.component.css']
})

export class QuizzQuestionComponent {
      @Input() question: string = ''
      @Input() isFinished?: boolean
}
