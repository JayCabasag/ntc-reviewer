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
    question: string,
    options: QuestionOption[],
    correctAnswer: number
}