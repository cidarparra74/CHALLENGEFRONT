import Bar from './components/molecules/Bar/bar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categoria from './pages/Categoria';
function App() {

  return (
    <Router>
      <div className="App">
        <Bar/>
        <Routes>
          <Route path='/' element={<Categoria/>} />  
          <Route path='/categoria' element={<Categoria/>} />
        </Routes>
      </div>
    </Router>
  )
}
export default App