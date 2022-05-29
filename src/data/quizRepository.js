import Quiz from '../models/quizModel.js';

const getQuizList = async () => {
  try {
    return await Quiz.findAll();
  } catch (error) {
    console.log(error);
  }
};

const createQuiz = async (pQuiz) => {
  try {
    return await Quiz.create(pQuiz);
  } catch (error) {
    console.log(error);
  }
};

const updateQuiz = async (pId, pQuiz) => {
  try {
    let Quiz = await Quiz.findByPk(pId);
    Quiz.set({
      answer1: pQuiz.answer1,
      answer2: pQuiz.answer2,
      answer3: pQuiz.answer3,
      answer4: pQuiz.answer4,
      correct: pQuiz.correct,      
    });
    return await Quiz.save();
  } catch (error) {
    console.log(error);
  }
};

const deleteQuiz = async (pId) => {
  try {
    await Quiz.destroy({
      where: {
        id: pId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getQuizList,
  createQuiz,
  updateQuiz,
  deleteQuiz,
};
