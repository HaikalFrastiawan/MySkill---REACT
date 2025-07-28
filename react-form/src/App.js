import logo from './logo.svg';
import './App.css';
import MyForm from './page/Form';
import MyForm2 from './page/Form-Handle';
import MyForm3 from './page/Form-Multiple';
import TextArea from './page/TextArea';
import Select from './page/Select';

function App() {
  return (
    <div className="App">
      <MyForm />
      <MyForm2  />
      <hr></hr>
      <h1>Halaman form</h1>
      <MyForm3 />
      <br></br>
      <TextArea />
      <br></br>
      <Select />
    </div>
  );
}

export default App;
