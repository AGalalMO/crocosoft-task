import Quizes from '../../data/quizes.json';
import { useState } from 'react';
import { QuizItem } from '../../types/quiz';
import CreateQuiz from '../create-quiz';
import Header from './components/header';
import Quiz from './components/quiz';
export default function QuizList() {
    let defaultQuiz=Quizes as QuizItem
    const [quizItems, setQuizItems] = useState<QuizItem[]>([{...defaultQuiz}])
    const [isQuizModalOpen, setIsQuizModalOpen] = useState(false)
    const handleOpenModal = () => {
        setIsQuizModalOpen(true)
    }
    const handleCloseModal = () => {
        
        setIsQuizModalOpen(false)
    }
    return (
        <>
         <Header handleOpenModal={handleOpenModal}  />
           {quizItems?.map((quiz)=><Quiz quizItem={quiz}   />)}
         <CreateQuiz isOpen={isQuizModalOpen}   handleCloseModal={handleCloseModal} />
        </>
    )
}