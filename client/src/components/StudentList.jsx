import React from 'react';

class StudentList extends React.Component {

    constructor(props){
        super(props);
        console.log(props);
       
    }

    render(){       
        return (
            <table className="u-full-width">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>          
                  <th>department</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                {/* {this.props._app.state.studentList.map(student => {
                // console.log(this.props._app.state.studentList);
                  return (
                    <tr>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.department}</td>              
                      <td><button onClick={()=>this.props._app.deleteStudent(student.studentId)}>delete</button></td>              
                    </tr>
                  );
                })} */}
              </tbody>
            </table>
          );
        
    }

}

export default StudentList;
