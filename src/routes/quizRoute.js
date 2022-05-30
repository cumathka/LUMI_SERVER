import express from 'express';
import quizService from '../services/quizService.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const quizList = await quizService.getQuizList();
  res.status(200).send(quizList);
});

router.post('/', async (req, res) => {
  const quiz = await quizService.createQuiz(req.body);
  res.status(201).send(quiz);
});

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const quiz = req.body;
  const updatedQuiz = await quizService.updateQuiz(id, quiz);
  res.status(200).send(updatedQuiz);
});

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  await quizService.deleteQuiz(id);
  res.status(200).send('Deleted!');
});

export default router;
