import Question from '../models/QuestionModal.js';

const getQuestion = async () => {
  try {
    return await Question.findAll();
  } catch (error) {
    console.log(error);
  }
};

const createQuestion = async (pQuestion) => {
  try {
    return await Question.create(pQuestion);
  } catch (error) {
    console.log(error);
  }
};

const updateQuestion = async (pId, pQuestion) => {
  try {
    let Question = await Question.findByPk(pId);
    Question.set({
      answer1: pQuestion.answer1,
      answer2: pQuestion.answer2,
      answer3: pQuestion.answer3,
      answer4: pQuestion.answer4,
      correct: pQuestion.correct,      
    });
    return await Question.save();
  } catch (error) {
    console.log(error);
  }
};

const deleteQuestion = async (pId) => {
  try {
    await Question.destroy({
      where: {
        id: pId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
