import { useContext} from 'react'
import { AnswerContext, CalculateScoreContext, ExamStatusContext, RemoveAnswersContext, ScoreContext, UpdateAnswerContext, UpdateExamStatusContext } from './AnswerContext'

export const useAnswers = () => useContext(AnswerContext)
export const useUpdateAnswers = () => useContext(UpdateAnswerContext)
export const useScore = () => useContext(ScoreContext)
export const useCalculateScore = () => useContext(CalculateScoreContext)
export const useRemoveAnswers = () => useContext(RemoveAnswersContext)
export const useExamStatus = () => useContext(ExamStatusContext)
export const useExamUpdateStatus = () => useContext(UpdateExamStatusContext)