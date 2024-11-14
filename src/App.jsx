import { useRef } from 'react';
import './App.css';

function App() {
  const liftRef = useRef(null);

  function handle1(){
    liftRef.current.style.marginTop = `1200px`; 
  }
  
  function handle2(){
    liftRef.current.style.marginTop = `1000px`; 
  }
  
  function handle3(){
    liftRef.current.style.marginTop = `800px`; 
  }
  
  function handle4(){
    liftRef.current.style.marginTop = `600px`; 
  }
  
  function handle5(){
    liftRef.current.style.marginTop = `400px`; 
  }
  
  function handle6(){
    liftRef.current.style.marginTop = `200px`; 
  }
  
  function handle7(){
    liftRef.current.style.marginTop = `0px`; 
  }
  
  return (
    <div>
      <header>
        Hotel
      </header>
      <section>
        <div className="lift-block">
          <div className="lift" ref={liftRef}>
              <div className="block">
                <span onClick={handle1}>1</span>
                <span onClick={handle2}>2</span>
                <span onClick={handle3}>3</span>
                <span onClick={handle4}>4</span>
                <span onClick={handle5}>5</span>
                <span onClick={handle6}>6</span>
                <span ><i class="fa-solid fa-caret-left"></i><i class="fa-solid fa-caret-right"></i></span>
                <span onClick={handle7}>7</span>
                <span ><i class="fa-solid fa-caret-right"></i><i class="fa-solid fa-caret-left"></i></span>
              </div>
          </div>
          <div className="dark">
            <div className="darckligth"></div>
          </div>
        </div>
        <div className="devor">
          <div className="etaj">
            <span onClick={handle7}>7</span>
            <span onClick={handle7}><i class="fa-solid fa-caret-down"></i></span>
          </div>
          <div className="etaj">
            <span onClick={handle6}>6</span>
            <span onClick={handle6}><i class="fa-solid fa-caret-up"></i></span>
            <span onClick={handle6}><i class="fa-solid fa-caret-down"></i></span>
          </div>
          <div className="etaj">
            <span onClick={handle5}>5</span>
            <span onClick={handle5}><i class="fa-solid fa-caret-up"></i></span>
            <span onClick={handle5}><i class="fa-solid fa-caret-down"></i></span>
          </div>
          <div className="etaj">
            <span onClick={handle4}>4</span>
            <span onClick={handle4}><i class="fa-solid fa-caret-up"></i></span>
            <span onClick={handle4}><i class="fa-solid fa-caret-down"></i></span>
          </div>
          <div className="etaj">
            <span onClick={handle3}>3</span>
            <span onClick={handle3}><i class="fa-solid fa-caret-up"></i></span>
            <span onClick={handle3}><i class="fa-solid fa-caret-down"></i></span>
          </div>
          <div className="etaj">
            <span onClick={handle2}>2</span>
            <span onClick={handle2}><i class="fa-solid fa-caret-up"></i></span>
            <span onClick={handle2}><i class="fa-solid fa-caret-down"></i></span>
          </div>
          <div className="etaj">
            <span onClick={handle1}>1</span>
            <span onClick={handle1}><i class="fa-solid fa-caret-up"></i></span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
