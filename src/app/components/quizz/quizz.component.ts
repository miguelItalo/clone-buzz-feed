import { Component, OnInit } from '@angular/core';
import quizz_question from '../../../assets/data/quizz_questions.json'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit{
      title:string = ""

      questions:any 
      questionSelected:any

      answers:string[] = []
      answerSelected:string = ""
      
      questionIndex:number = 0
      quesitonMaxIndex:number = 0

      finished:boolean = true
      
      ngOnInit(){
            if(quizz_question){
                  this.finished = false
                  this.title = quizz_question.title
                  this.questions = quizz_question.questions
                  this.questionSelected = this.questions[this.questionIndex]

                  this.questionIndex = 0
                  this.quesitonMaxIndex = this.questions.length
            }
      }

      onPlayerChoice(value: string){
            this.answers.push(value)
            this.nextStep()
      }

      async nextStep(){
            this.questionIndex++

            if(this.quesitonMaxIndex > this.questionIndex){
                  this.questionSelected = this.questions[this.questionIndex]
            }
            else{
                  const finalAnswers: string = await this.checkResult(this.answers)
                  this.finished = true
                  this.answerSelected = quizz_question.results[finalAnswers as keyof typeof quizz_question.results]
            }
      }

      async checkResult(answers: string[]){
            const result = answers.reduce((previous, current, i, arr) => {
                  if(arr.filter(item => item === previous).length > arr.filter(item => item === current).length ){
                        return previous
                  }
                  else{
                        return current
                  }
            })
            return result
      }
}
