const PORT = 8899;

const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors()); //accept any origin

app.use(express.json());

const { getAllStudents, insertStudentData } = require('./utils/filesUtiles.js');

//middleware

app.post('/students/post', async (req, res, next) => {
  try {
    const data = req.body;

    console.log(req.body);

    console.log(`api says : body contains : ${data}`);

    await insertStudentData(data);

    res.status(200).json({
      success: true,
      data: await getAllStudents(),
      insertState: 1,
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      success: false,
      data: null,
      errorMessage: error.message,
    });
  }
});

app.get('/students', async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: await getAllStudents(),
  });
});

app.use('/', async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: null,
    welcomeMessage:
      'welcome to simple node application for React front lab help ...',
  });
});

//listening part

app.listen(PORT, function () {
  console.log(`Node server ON and listening on port ${PORT}`);
});
