import { QUESTIONS } from "../../Database/Questions.js";

export const AddQuestions = (req, res) => {
    let { title, description, difficulty, tags, examples } = req.body;

    if (!title || title.length === 0) {
        return res.status(400).json({ message: "Title is required" });
    }

    if (!description || description.length === 0) {
        return res.status(400).json({ message: "Description is required" });
    }

    if (!difficulty || !['easy', 'medium', 'hard'].includes(difficulty.toLowerCase())) {
        return res.status(400).json({ message: "Difficulty must be either 'easy', 'medium', or 'hard'" });
    }

    if(!tags || tags.length === 0) {
        return res.status(400).json({ message: "Tags are required" });
    }

    if(!examples || examples.length === 0) {
        return res.status(400).json({ message: "Examples are required" });
    }

    if (QUESTIONS.some(item => item.title === title)) {
        return res.status(400).json({ message: "Question already exists" });
    }

    difficulty = difficulty.charAt(0).toUpperCase() + difficulty.slice(1).toLowerCase();

    const ques = { title, description, difficulty, tags, examples };
    QUESTIONS.push(ques);

    res.status(200).send({
        message: "Question added successfully",
    });
};
