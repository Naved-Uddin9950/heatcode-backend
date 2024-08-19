import { QUESTIONS } from "../../Database/Questions.js";

export const GetQuestions = (req, res) => {
    let { id } = req.params;
    id = parseInt(id, 10);

    const question = QUESTIONS.find(item => item.id === id);

    if (!question) {
        return res.status(404).json({ message: "Question not found" });
    }

    res.status(200).json(question);
};
