import './App.css';
import Navbar from './components/Navbar';
// import Pr from './Pr';
// import Form from './components/Form';
import Saqi from './components/Saqi';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div>
      {/* <Form placeholder="enter some thing here"/> */}
      {/* <Pr/> */}
      <Saqi />
      <TodoApp />
      <div>
        <h1>this is a new line </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aperiam
          illum accusamus dolore numquam facilis culpa libero! Numquam tempora,
          quam magnam omnis assumenda ea ipsum eum, ullam culpa facere in.
        </p>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam aperiam unde! Pariatur hic explicabo, soluta velit cum maiores ipsum voluptate quia voluptatibus repellendus, labore itaque nihil facere quae saepe?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem similique nemo quae mollitia, cum accusamus illum at, voluptas recusandae molestiae fugit quam voluptate alias suscipit labore tempore ipsum consequuntur totam!</p>
      </div>
    </div>
      <Navbar />
    </div>
  );
}

export default App;
