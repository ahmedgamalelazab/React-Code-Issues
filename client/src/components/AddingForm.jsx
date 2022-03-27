import React from 'react';

class StudentAddingForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      studentId: 0,
      studentName: '',
      studentDepartment: '',
    };
  }

  render() {
    return (
      <form>
        <div className="row">
          <div className="six columns">
            <label htmlFor="studentName">student id:</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="student id"
              id="studentId"
              onChange={e =>
                this.setState({
                  studentId: e.target.value,
                })
              }
            />
          </div>
          <div className="six columns">
            <label htmlFor="studentName">student name:</label>
            <input
              className="u-full-width"
              type="text"
              placeholder="student name"
              id="studentName"
              onChange={e =>
                this.setState({
                  studentName: e.target.value,
                })
              }
            />
          </div>
        </div>
        <label htmlFor="studentDepartment">student Department:</label>
        <input
          className="u-full-width"
          type="text"
          placeholder="student department"
          id="studentDepartment"
          onChange={e =>
            this.setState({
              studentDepartment: e.target.value,
            })
          }
        />
        <input
          className="button-primary"
          type="submit"
          value="Submit"
          onClick={e => {
            e.preventDefault();
            console.log(this.state);
            const newStudent = {
                id:this.state.studentId,
                name:this.state.studentName,
                department:this.state.studentDepartment,
                age:25
            }
            this.props._addAction(newStudent);
          }}
        />
      </form>
    );
  }
}

export default StudentAddingForm;
