import { QUESTIONS } from "../../Database/Questions.js"

export const ListQuestions = (req, res) => {
    if (QUESTIONS.length === 0) {
        return res.status(404).send({ message: "No questions found" })
    }

    res.status(200).send(QUESTIONS);
}