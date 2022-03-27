const path = require('path');

const fs = require('fs');

async function getAllStudents() {
  return new Promise((resolve, reject) => {
    try {
      const dataBuffer = fs.readFileSync(
        path.join('./', 'database', 'students.json')
      );
      const data = JSON.parse(dataBuffer.toString());
      resolve(data);
    } catch (error) {
      reject(error.message);
    }
  });
}

async function insertStudentData(data) {
  return new Promise((resolve, reject) => {
    try {
      const fileData = JSON.parse(
        fs.readFileSync(path.join('./', 'database', 'students.json'))
      );
      fileData.push(data);
      fs.writeFileSync(
        path.join('./', 'database', 'students.json'),
        JSON.stringify(fileData),
        {
          flag: 'w',
        }
      );
    } catch (error) {
      reject(error.message);
    }
  });
}

module.exports = { getAllStudents, insertStudentData };
