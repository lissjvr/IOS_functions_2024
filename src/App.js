import { useEffect } from 'react';
import './App.css';

// ***** Tested on IOS 17+ with iphone 11 and above ****


const App = () => {
  useEffect(() => {
    //#region just some code to show content
    const before_loading =
      document.getElementById("content");
    before_loading.style.display = "block";
    let c = 0;
    for (let i = 0; i < 100; i++) {
      const new_div = document.createElement("div");
      new_div.className = "sub-block";
      new_div.innerHTML = `Scroll div ${c}${i}`;
      before_loading.appendChild(new_div);
    }
    c++;
    //#endregion end just some code to show content
    
    //add this to listen to IOS scrolling
    document.body.addEventListener('touchstart', scrollFunc, true) //user places a touch point on the touch surface
    // document.body.addEventListener('touchend', scrollFunc, true) //user removes a touch point from the surface

  }, [])

  const scrollFunc = () => {
    //Do something here
    //alert('my ios device is detecting scrolling!')
    //console.log('my ios device is detecting scrolling!')
  }

  return (
    <div id="content" className='App'>
      <div>How to trigger scrolling in IOS</div>
    </div>
  );
}

export default App;
