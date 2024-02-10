import React from 'react';
// import CompA from './components/CompA';
// import CompB from './components/CompB';
// import CompC from './components/CompC';
import Home from './components/Home';

const App = () => {
  let a = 10
  const arr = [1,2,3,4,5]
  const obj = {
    batch:'FSD55',
    team :'suresh'
  }
    const arrobj = [
      {id:1,name:'Anbu',designation:'fsd'},
      {id:2,name:'yusrin',designation:'manager'},
      {id:3,name:'gopi',designation:'fsd'},
      // {id:4,name:'rafi',designation:'fsd'},
    ]
  

  return (
    <div>
       
      <h1>App Component </h1>
      {/* <CompA arr={arr} a={a}/> */}
      {/* <CompB obj={obj}/> */}
      {/* <CompC arrobj = {arrobj}/> */}
      <Home arrobj ={arrobj} />
    </div>
  );
};

export default App;