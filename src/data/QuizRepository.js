import Quiz from '../models/QuizModal.js';

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
      title: pQuiz.title,
      description: pQuiz.description     
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
