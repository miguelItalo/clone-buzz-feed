import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Options } from 'src/app/interface/options'

@Component({
  selector: 'app-quizz-options',
  templateUrl: './quizz-options.component.html',
  styleUrls: ['./quizz-options.component.css']
})
export class QuizzOptionsComponent {
      @Output() playerChoice: EventEmitter<any> = new EventEmitter()
      @Input() isFinished?: boolean
      @Input() options?: Options[]

      handleclick(alias: string){
            this.playerChoice.emit(alias)
      }
}
