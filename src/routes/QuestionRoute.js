import express from 'express';
import QuestionService from '../services/QuestionService.js';

const router = express.Router();

router.get('/questions', async (req, res) => {
  const QuizId = req.query.QuizId
  console.log(QuizId,"hacim id bu")
  const QuestionList = await QuestionService.getQuestionList(QuizId);
  res.status(200).send(QuestionList);
});

router.get('/', async (req, res) => {
  const QuestionList = await QuestionService.getAllQuestions();
  res.status(200).send(QuestionList);
});

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const Question = await QuestionService.getQuestion(id);
  res.status(200).send(Question);
});

router.post('/', async (req, res) => {
  const Question = await QuestionService.createQuestion(req.body);
  res.status(201).send(Question);
});

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const Question = req.body;
  const updatedQuestion = await QuestionService.updateQuestion(id, Question);
  res.status(200).send(updatedQuestion);
});

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  await QuestionService.deleteQuestion(id);
  res.status(200).send('Deleted!');
});

export default router;
