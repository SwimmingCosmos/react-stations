// DO NOT DELETE

import './App.css'
import React, { useState } from 'react';
import Header from './Header';
/**
 * @type {() => JSX.Element}
 */


export const App = () => {
    const[dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
    function press() 
    {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) =>  res.json()) 
      .then(json => {
         console.log(json);
         setDogUrl(json.message)
        })
    }
  return (
    <div>
      {/* <>犬サイト</> */}
      <Header/>
      <img src = {dogUrl} ></img>
      <button onClick={press}>更新</button>
      <p>犬の画像を表示するサイトです</p>
    </div>
  )
}
