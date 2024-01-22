import{BrowserRouter,Routes,Route}from "react-router-dom"
import './App.css';
import Homepage from'./componets/pages/Homepage';
import Footer from './componets/common/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      </div>
  );
}

export default App;
