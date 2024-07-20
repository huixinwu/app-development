import React, { useState } from "react";

// ---- EXAMPLE 2 ----
// list of three messages
const messages = ["I think, therefore I am", "I have a dream", "The only thing we have to fear is fear itself"]

function App() {
  //set the state - example 1
  const [count, setCount] = useState(0)

  // set the state - example 2
  const [counter, setCounter] = useState(1)

  //set the state - example 3
  const [isOpen, setIsopen] = useState(false)

  //set the state - example 4
  // collecting multiple input data as states
  const [inputdata, setInputdata] = useState({})

 // function to collect the changes of each input data
  const handledata = function(e){
    const name = e.target.name
    const value = e.target.value
    setInputdata(values => ({...values, [name]:value})) //spread
  }
  // submit function
  const submitform = function (e) {
    e.preventDefault()
    alert(`Name: ${inputdata.fullname} \nAge: ${inputdata.age} \nGender: ${inputdata.gender} \nSuggestions: ${inputdata.usercomments}`)
  }

  return (
    <>
      <h1 className="title">Example 4: forms</h1>
      <section>
        <form className="signupform" onSubmit={submitform}>
          <fieldset>
            <legend>Sign up form</legend>
            <div className="formcontrol">
              <label for="name">Enter name:</label>
              <input
                id="name"
                type="text"
                placeholder="Type your name..."
                name="fullname"
                value={inputdata.fullname}
                onChange={handledata}
              />
            </div>

            <div className="formcontrol">
              <label for="age">Enter an age:</label>
              <input 
                id="age"
                type="number"
                name="age"
                min={1}
                max={99}
                value = {inputdata.age}
                onChange={handledata}
              />
            </div>

            <div className="formcontrol">
              <label for="selectgender">Select gender:</label>
              <select 
                id="selectgender"
                name="gender"
                value={inputdata.gender}
                onChange={handledata}
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="formcontrol">
                <label for="comments">Suggestions? </label>
                <textarea 
                  id="comments"
                  placeholder="Max 1000 characters"
                  maxLength={1000}
                  name="usercomments"
                  value={inputdata.usercomments}
                  onChange={handledata}
                />
            </div>

            <div className="formcontrol">
              <button type="submit">Submit</button>
            </div>
          </fieldset>
        </form>
      </section>

      <h1 className="title">Example 3: open and close button</h1>
      <section className="intro">
        <b>Cat (Felis catus)</b> , commonly referred to as the domestic cat or house cat <button onClick={function () { setIsopen(!isOpen) }}>{isOpen ? "Hide" : "Read More"}</button>
      </section>
      <section>
        {isOpen &&
          (
            <div className="readmore">
              The cat (Felis catus), commonly referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC
            </div>
          )
        }

      </section>

      <h1 className="title">Example 1</h1>
      <p>The count is = {count}</p>
      <button className="incrementbtn" onClick={function () { setCount(count + 1) }}>Increment</button>


      <h1 className="title">Example 2: slice app</h1>
      <section className="slicecontainer">
        <div className="slicewrapper">
          <div className={counter == 1 ? "active" : ""}>1</div>
          <div className={counter == 2 ? "active" : ""}>2</div>
          <div className={counter == 3 ? "active" : ""}>3</div>
        </div>

        <p className="displaymsg">"{messages[counter - 1]}"</p>

        <div className="groupbtn">
          <button className="prev_btn" onClick={function () { if (counter > 1) setCounter(counter - 1) }}>Previous</button>
          <button className="next_btn" onClick={function () { if (counter < 3) setCounter(counter + 1) }}>Next</button>
        </div>
      </section>


    </>
  );
}

export default App;
