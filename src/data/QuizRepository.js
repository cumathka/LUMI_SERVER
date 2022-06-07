import Quiz from '../models/QuizModel.js';

const getQuizList = async () => {
  try {
    return await Quiz.findAll();
  } catch (error) {
    console.log(error);
  }
};

const getQuiz = async (pId) => {
  try {
    return await Quiz.findByPk(pId);
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

const updateQuiz= async (pId, pQuiz) => {
  try {

    return await Quiz.update(pQuiz, {
      where: {id: pId}
    });
    // return await Quiz.save();
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
  getQuiz,
  createQuiz,
  updateQuiz,
  deleteQuiz,
};
