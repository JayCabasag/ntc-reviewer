export type Element = {
    label: string,
    link: string,
    description: string
}

export type QuestionOption = {
    id: number,
    label: string
}

export type Question = {
    id: number,
    question: string,
    options: QuestionOption[],
    correctAnswer: number
}

export type AnsweredQuestion = {
    userAnswer: number
} & Question