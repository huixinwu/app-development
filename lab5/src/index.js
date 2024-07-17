import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import parrot from './images/image5.jpg';
import User from './comments'
// import images
import girlavatar from './images/girl_avatar.png'
import businessmanavatar from './images/businessman_avatar.png'
import detectiveavatar from './images/detective_avatar.png'

//create content in the app using function component
const App = function(){
  // define a variable name
  let fullname ="Prof. Wu";
  // declare a function 
  function greeting(){
    return "Good evening!"
  }

  return(
    <div>
      <h1 style={{textAlign: "center", color:"orange"}}>Welcome to ReactJS {fullname}</h1>
      <p>{greeting()} Let's be familiar with JSX elements</p>
      <figure className='introimg'>
        <img src={parrot}/>
      </figure>

      {/* card */}
      <section className='cardcontainer'>
          <User image={girlavatar} name='Jessica' date='07/12/24' comments='Great job!'/>
          <User image={businessmanavatar} name='Peter' date='07/09/24' comments='I need more time'/>
          <User image={detectiveavatar} name='Jason' date='07/06/24' comments='Feeling lazy'/>
      </section>
    </div> 
  )
}


 
// rooting the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


