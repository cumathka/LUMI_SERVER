import express from 'express';
import QuizService from '../services/QuizService.js';

const router = express.Router();

router.get('/allQuizzes', async (req, res) => {
  const userInp = req.query.userInp
  const category = req.query.category
  const sortBy = req.query.sortBy
  const limit = Number(req.query.limit)  
  const offset =  Number(req.query.offset)  
  const QuizList = await QuizService.getQuizList(limit,offset,sortBy,category,userInp);
  res.status(200).send(QuizList);
});
router.get('/postman', async (req, res) => {

  const QuizList = await QuizService.getForPostMan();
  res.status(200).send(QuizList);
});
router.get('/myQuizzes', async (req, res) => {
  const userInp = req.query.userInp
  const UserId = req.query  
  const limit = Number(req.query.limit) 
  const offset =  Number(req.query.offset) 
  console.log(offset,limit)
  console.log("user ID",UserId)
  console.log(typeof UserId)
  const myQuizzes = await QuizService.getMyQuizzes(UserId,limit,offset,userInp);
  res.status(200).send(myQuizzes);
});


router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const Quiz = await QuizService.getQuiz(id);
  res.status(200).send(Quiz);
});

router.post('/', async (req, res) => {
  const Quiz = await QuizService.createQuiz(req.body);
  console.log("quiz geldi =>>>>>>>", Quiz)
  res.status(201).send(Quiz);
});

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const Quiz = req.body;
  const updatedQuiz = await QuizService.updateQuiz(id, Quiz);
  res.status(200).send(updatedQuiz);
});

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  await QuizService.deleteQuiz(id);
  res.status(200).send('Deleted!');
});

export default router;
