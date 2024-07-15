import React, { useState, useEffect } from 'react';

import './App.css';

function App() {

  const [myArray, setMyArray] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const elementMasseg = () => {
    if (inputValue === '') {
      console.log('not');
    } else {
      const updatedArray = [...myArray, inputValue];
      setMyArray(updatedArray);
      myLocalStorig(updatedArray);
      setCount1(count1 + 1);
      setCount2(count2 + 1);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const updatedArray = [...myArray];
    updatedArray.splice(index, 1);
    setMyArray(updatedArray);
    myLocalStorig(updatedArray);
    setCount1(count1 - 1);
    setCount2(count2 - 1);
  };

  const removeAllTasks = () => {
    localStorage.setItem('test', JSON.stringify([]));
    setMyArray([]);
    setCount1(0);
  };

  const myLocalStorig = (updatedArray) => {
    localStorage.setItem('test', JSON.stringify(updatedArray));
  };

  const getData = () => {
    const data = localStorage.getItem('test');
    if (data) {
      const parsedData = JSON.parse(data);
      setMyArray(parsedData);
      setCount1(parsedData.length);
    }
  };

  return (


    <>
      <div className="container">
        <div className="home-element">
          <div className="background">
            <div className="myinput">
              <input
                className="text"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="click" onClick={elementMasseg}>
                click
              </div>
            </div>
            <div className="mymassage"></div>
            <div className="element">
              {myArray.map((item, index) => (
                <div key={index} className="content">
                  {item}
                  <div className="Delete" onClick={() => handleDelete(index)}>
                    Delete
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="counter">
            <div className="count1">
              count <span>{count1}</span>
            </div>
            <div className="count2">
              count <span>{count2}</span>
            </div>
          </div>
          <div className="removeAll" onClick={removeAllTasks}>
            removeAll
          </div>
        </div>
      </div>
    </>
  )
};

export default App

