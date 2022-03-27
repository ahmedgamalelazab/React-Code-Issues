import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentAddingForm from './components/AddingForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
    };

    this.addStudent = this.addStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  addStudent(studentObj) {
    // //cloning
    // const cloned = this.state.studentList;

    // //update the old state
    // cloned.push(studentObj);

    // //rerender the ui on new state
    // this.setState({
    //   studentList: cloned,
    // });
    fetch('http://localhost:8899/students/post', {
      body: JSON.stringify(studentObj),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  deleteStudent(studentId) {
    let clone = this.state.studentList;

    clone = clone.filter(student => {
      return student.studentId !== studentId;
    });

    console.log(clone);

    this.setState({
      studentList: clone,
    });
  }

  componentDidMount() {
    fetch('http://localhost:8899/students')
      .then(response => response.json())
      .then(response => {
        console.log(response.data);
        this.setState({
          studentList: response.data,
        });
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Student Routing App</h1>
          <nav
            style={{
              borderBottom: 'solid 1px',
              paddingBottom: '1rem',
            }}
          >
            <Link to="/studentList">studentList</Link> |{' '}
            <Link to="/studentAddingForm">add Student</Link>
          </nav>
        </div>
        <Routes>
          <Route exact path="/" element={<StudentList _app={this} />} />
          <Route
            exact
            path="studentList"
            element={<StudentList _app={this} />}
          />
          <Route
            exact
            path="studentAddingForm"
            element={<StudentAddingForm _addAction={this.addStudent} />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

//TODO TRACE STATE
/*
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentAddingForm from './components/AddingForm';

export default function App() {
  const [studentList, setStudentList] = useState([]);

  function addStudent(studentObj) {
    // //cloning
    // const cloned = this.state.studentList;

    // //update the old state
    // cloned.push(studentObj);

    // //rerender the ui on new state
    // this.setState({
    //   studentList: cloned,
    // });
    fetch('http://localhost:8899/students/post', {
      body: JSON.stringify(studentObj),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  
  function deleteStudent(studentId) {
    let clone = this.state.studentList;

    clone = clone.filter(student => {
      return student.studentId !== studentId;
    });

    console.log(clone);

    setStudentList(clone);
  }
  

  useEffect(() => {
    (async () => {
      const pureResponse = await fetch('http://localhost:8899/students');

      const jsonResponse = await pureResponse.json();

      console.log(jsonResponse.data);

      setStudentList(jsonResponse.data);
    })();
  }, []);

  useEffect(() => {
    console.log(studentList);
  }, [studentList]);

  return (
    <BrowserRouter>
      <div>
        <h1>Student Routing App</h1>
        <nav
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}
        >
          <Link to="/studentList">studentList</Link> |{' '}
          <Link to="/studentAddingForm">add Student</Link>
        </nav>
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={<StudentList _studentList={studentList} />}
        />
        <Route
          exact
          path="studentList"
          element={<StudentList _studentList={studentList} />}
        />
        <Route
          exact
          path="studentAddingForm"
          element={<StudentAddingForm _addAction={addStudent} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
*/
