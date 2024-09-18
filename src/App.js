import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/Mainpage/HeroSection';
import { MainColumn } from './sections/Mainpage/FirstSpan';
import { SecondSpan } from './sections/Mainpage/SecondColumn';
import { Callaction } from './sections/Mainpage/calltoact';

function App() {
  return (
    <div className="App">
    <body>
    <Navbar/>

    <HeroSection/> 


<div className='Column-section'> 
 <MainColumn/> 
</div>

<div className='second-span'> 
 <SecondSpan/> 
</div>

<Callaction/>


<div className='faq'>
 <h6> Faq </h6>
</div>




 {/* <header className="App-header">
 <HeroSection/> 
  <h2> Yo </h2>
 </header> */}
 <footer className='App-footer'>
 <Footer/>
 </footer>
      
    </body>  
    
   
    </div>
  );
}

export default App;
