import { useRef } from 'react';
import './App.css';

function App() {
  const liftRef = useRef(null);

  // devor ichidagi tugmalar uchun referenslar
  const floorButtonsRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // lift ichidagi tugmalar uchun referenslar
  const liftButtonsRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  function clearBackgrounds() {
    [...floorButtonsRefs, ...liftButtonsRefs].forEach(ref => {
      if (ref.current) {
        ref.current.style.backgroundColor = "";
      }
    });
  }

  function handle1() {
    clearBackgrounds();
    liftRef.current.style.marginTop = `1200px`; 
    floorButtonsRefs[0].current.style.backgroundColor = "grey";
    liftButtonsRefs[0].current.style.backgroundColor = "grey";
  }

  function handle2() {
    clearBackgrounds();
    liftRef.current.style.marginTop = `1000px`; 
    floorButtonsRefs[1].current.style.backgroundColor = "grey";
    liftButtonsRefs[1].current.style.backgroundColor = "grey";
  }

  function handle3() {
    clearBackgrounds();
    liftRef.current.style.marginTop = `800px`; 
    floorButtonsRefs[2].current.style.backgroundColor = "grey";
    liftButtonsRefs[2].current.style.backgroundColor = "grey";
  }

  function handle4() {
    clearBackgrounds();
    liftRef.current.style.marginTop = `600px`; 
    floorButtonsRefs[3].current.style.backgroundColor = "grey";
    liftButtonsRefs[3].current.style.backgroundColor = "grey";
  }

  function handle5() {
    clearBackgrounds();
    liftRef.current.style.marginTop = `400px`; 
    floorButtonsRefs[4].current.style.backgroundColor = "grey";
    liftButtonsRefs[4].current.style.backgroundColor = "grey";
  }

  function handle6() {
    clearBackgrounds();
    liftRef.current.style.marginTop = `200px`; 
    floorButtonsRefs[5].current.style.backgroundColor = "grey";
    liftButtonsRefs[5].current.style.backgroundColor = "grey";
  }

  function handle7() {
    clearBackgrounds();
    liftRef.current.style.marginTop = `0px`; 
    floorButtonsRefs[6].current.style.backgroundColor = "grey";
    liftButtonsRefs[6].current.style.backgroundColor = "grey";
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
              <span ref={liftButtonsRefs[0]} onClick={handle1}>1</span>
              <span ref={liftButtonsRefs[1]} onClick={handle2}>2</span>
              <span ref={liftButtonsRefs[2]} onClick={handle3}>3</span>
              <span ref={liftButtonsRefs[3]} onClick={handle4}>4</span>
              <span ref={liftButtonsRefs[4]} onClick={handle5}>5</span>
              <span ref={liftButtonsRefs[5]} onClick={handle6}>6</span>
              <span ><i class="fa-solid fa-caret-left"></i><i class="fa-solid fa-caret-right"></i></span>
              <span ref={liftButtonsRefs[6]} onClick={handle7}>7</span>
              <span ><i class="fa-solid fa-caret-right"></i><i class="fa-solid fa-caret-left"></i></span>
            </div>
          </div>
          <div className="dark">
            <div className="darckligth"></div>
          </div>
        </div>
        <div className="devor">
          <div className="etaj">
            <span ref={floorButtonsRefs[6]} onClick={handle7}>7</span>
            <span onClick={handle7}><i class="fa-solid fa-caret-down"></i></span>
          </div>
          <div className="etaj">
            <span ref={floorButtonsRefs[5]} onClick={handle6}>6</span>
            <span onClick={handle6}><i class="fa-solid fa-caret-up"></i></span>
            <span onClick={handle6}><i class="fa-solid fa-caret-down"></i></span>
          </div>
          <div className="etaj">
            <span ref={floorButtonsRefs[4]} onClick={handle5}>5</span>
            <span onClick={handle5}><i class="fa-solid fa-caret-up"></i></span>
            <span onClick={handle5}><i class="fa-solid fa-caret-down"></i></span>
          </div>
          <div className="etaj">
            <span ref={floorButtonsRefs[3]} onClick={handle4}>4</span>
            <span onClick={handle4}><i class="fa-solid fa-caret-up"></i></span>
            <span onClick={handle4}><i class="fa-solid fa-caret-down"></i></span>
          </div>
          <div className="etaj">
            <span ref={floorButtonsRefs[2]} onClick={handle3}>3</span>
            <span onClick={handle3}><i class="fa-solid fa-caret-up"></i></span>
            <span onClick={handle3}><i class="fa-solid fa-caret-down"></i></span>
          </div>
          <div className="etaj">
            <span ref={floorButtonsRefs[1]} onClick={handle2}>2</span>
            <span onClick={handle2}><i class="fa-solid fa-caret-up"></i></span>
            <span onClick={handle2}><i class="fa-solid fa-caret-down"></i></span>
          </div>
          <div className="etaj">
            <span ref={floorButtonsRefs[0]} onClick={handle1}>1</span>
            <span onClick={handle1}><i class="fa-solid fa-caret-up"></i></span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
