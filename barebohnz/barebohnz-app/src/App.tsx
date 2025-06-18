import './App.css'
import Homepage from './Pages/Homepage.tsx';
import ContactUs from './Pages/contactus.tsx';
import Blog from './Pages/policyblog.tsx';
import Header from './Utilities/header.tsx';
import Projects from './Pages/projects.tsx';
import MySourcecode from './Pages/mysourcecode.tsx';


import Services from './Pages/services.tsx';
import { Routes, Route } from 'react-router-dom';

  
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'

function App() {
  return (
    <div className='root'>
      <Header />
         <Routes>
         <Route path="/" element={<Homepage/>}/> 
         <Route path="/contactme" element={<ContactUs/>}/>
         <Route path="/policyblog" element={<Blog/>}/>
     <Route path="/mysourcecode" element={<MySourcecode/>}/>
    
         <Route path="/services" element={<Services/>}/>
        <Route path="/projects" element={<Projects/>}/>
       </Routes>
      
    </div>
  );
}

export default App;
