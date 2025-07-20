
  import './App.css';
  import { BrowserRouter,Routes,Route} from 'react-router-dom';
  import Layout from './pages/Layout';
  import Blog from './pages/Blog';
  import Home from './pages/Home';
  import NoPages from './pages/NoPages';
  import Contact from './pages/Contact';

  function App() {
    return (

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>}/> 
            <Route path='Blog' element={<Blog/>} />
            <Route path='COntact' element={<Contact/>} />
            <Route path='*' element={<NoPages/>} />



          </Route>
        </Routes>
      </BrowserRouter> 





    
    );
  }

  export default App;
