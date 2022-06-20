import { Op } from "sequelize";
import Question from "../models/QuestionModal.js";
import Quiz from '../models/QuizModel.js';

const getQuizList = async (limit,offset,sortBy,userInp) => {
  try {
    const quizList = Quiz.findAll({
      limit:limit,
      offset:offset,
      order: [['updatedAt', sortBy]],
      where:{  ////buraya bakim gerekebilir
        title:{[Op.like]: '%' + userInp + '%' }
      }
    });
    return quizList
  } catch (error) {
    console.log(error);
  }
};

const getQuizListWithSameCategory = async (limit,offset,sortBy,category,userInp) => {
  try {
    const quizList = Quiz.findAll({
      limit:limit,
      offset:offset,
      order: [['updatedAt', sortBy]],
      where:{
        category: category,
        title:{[Op.like]: '%' + userInp + '%' }
      }
    });
    return quizList
  } catch (error) {
    console.log(error);
  }
};
const getForPostMan = async () => {
  try {
    const quizList = Quiz.findAll();
    return quizList
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
    console.log(error,"olusmadi quiz");
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
const deleteQuiz = async (pId) =>{ 
  const quiz = await Quiz.findOne({
  where: {
    id: pId,
  },
  });
   await Question.destroy({
    where: {
      QuizId: pId,
    },
    });
  await quiz.destroy();
}
const  getQuizId = async (pQuiz) => {
  const quizId = await Quiz.findOne({
      where: {
        title: pQuiz.title,
        details:pQuiz.details,
        category:pQuiz.category,
      }
    });
    // console.log( quizId.id ,"quiz idsi bu")
  return await quizId.id
}
const getMyQuizzes = async (UserId,limit,offset,userInp) => {
  try {
    const MyQuizzes = await Quiz.findAll({
      where: {
        UserId: UserId.UserId,
        title:{[Op.like]: '%' + userInp + '%' }
      },
      limit:limit,
      offset:offset
    });
    return  MyQuizzes
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
  getQuizId,
  getMyQuizzes,
  getQuizListWithSameCategory,
  getForPostMan
};
