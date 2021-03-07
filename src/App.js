import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState('laptop');
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <Home></Home>
      <Header></Header>
    </CategoryContext.Provider>
  );
}

export default App;
