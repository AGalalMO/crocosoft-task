import { Question } from "../../../types/question"
import { QuizItem } from "../../../types/quiz"
import React from 'react'
export default function Quiz ({ quizItem }: {
    quizItem:QuizItem
}) {
    
    return (
        <div className="d-flex  flex-column align-items-start justify-content-start gap-3  p-4 border-bottom border-dark">

            <h3 className="">{quizItem?.title}</h3>
            <h6>{quizItem?.description}</h6>
            
            {quizItem.questions_answers?.map((question: Question) => {
                return (
                    <div className="gap-2 d-flex align-items-start flex-column border-bottom border-color-gray w-100 pb-3">
                        <h4>{question?.text }</h4>
                        {question?.answers?.map((answer,index) => {
                            return (
                                <>
                                    <h5 key={answer.id}>{`${index+1} - ${answer.text}`}</h5>
                                </>
                            )
                        })}
                    </div>
                )
            })}
            <h6>Score : {quizItem.score} </h6>
        </div>
        
    )
}