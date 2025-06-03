import logo from './logo.svg';
import './App.css';
import './assets/styles/main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header'
import { SideNav } from './components/Sidenav';
import { Footer } from './components/Footer';

import {AddStudent} from './pages/AddStudent'
import {StudentTable} from './pages/studentTable'
import { ProductCard } from './pages/ProductCard';


//import { AddStudent } from './pages/AddStudent';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <SideNav/>
      <main className="main-layout">
        <Routes>
        <Route path="/" element={<AddStudent />} />
       
        <Route path="/studentdata" element={<StudentTable />} />
        <Route path="/productcard" element={<ProductCard />} />
       
        </Routes>
       
      </main>
      
      <Footer/>

    
    </div>
    </Router>
  );
}

export default App;
