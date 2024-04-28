import './App.css'
import Todo from './Todo'
import Counter from './counter'

function App() {

  return (
    <>
      <section id='header' >
        <div >
          <ul id="navbar">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Sign</li>
          </ul>
        </div>
      </section>
      <br />
      <section id='students-div-container'>
        <StudentInfo
          name="SAYED" id="23101" blood="O+" subject="CSE"></StudentInfo>

        <StudentInfo
          name="SANAULLAH" id="23102" blood="B+" subject="BBA"></StudentInfo>

        <StudentInfo
          name="Shaidy" id="23103" blood="O-" subject="EEE"></StudentInfo>

        <StudentInfo
          name="NADIM" id="23104" blood="AB+" subject="ENGLISH"></StudentInfo>

        <StudentInfo
          name="MALIHA" id="23105" blood="B-" subject="JOURNALISM"></StudentInfo>

        <Todo
          name="SALEHA" id="23205" blood="AB+" subject="JOURNALISM" isDone={true} ></Todo>

        <Todo name="SALEHA" id="23205" blood="AB+" subject="JOURNALISM" isDone={false} ></Todo>

        <Counter></Counter>

      </section>
      <section>
      </section>
    </>
  )
  function handleCliker(num){
    alert(num+3)
  }
}

function StudentInfo({ name, id, blood, subject }) {
  return (
    <div className='student-div'>
      <h4>NAME : {name}</h4>
      <h4>ID : {id}</h4>
      <h4>Blood Group : {blood}</h4>
      <h4>Subject : {subject}</h4>
    </div>
  )
}

export default App


