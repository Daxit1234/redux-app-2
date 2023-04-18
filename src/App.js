import React from "react";
import { useRef ,useReducer} from "react";
import { useSelector,useDispatch } from "react-redux";
import { intcNumber,decNumber,filzero } from "./actions";

function App() {
  const mystate=useSelector((state)=>state.changeNUmber);
  const dispatch=useDispatch();


  //useref hook
  const refele=useRef()  //useref use ffor dom manupulation


  //usereducer hook
  let reducer=(state,action)=>{
    switch (action.type){
      case "inc":return state+action.payload
      case "dec":return state+action.payload
      default:
        return state
    }
  }
  const [state,dispatchreducer]=useReducer(reducer,0)


  let reducername=(state,action)=>{
    if(action.type==="change"){
      return state=action.payload
    }
  }
  const [statename,dispatchname]=useReducer(reducername,"daxit")

  let handlechange=(e)=>{
    let value=e.target.value
    return dispatchname({
      type:"change",
      payload:value
    })
  }

  return (
    <>
    <div className="App">
      <h1>this is reddux</h1>
      <div>
        <button onClick={()=>dispatch(decNumber(5))}>-</button>
        <input type="text"  maxLength="3" value={mystate} />
        <button onClick={()=>dispatch(intcNumber(5))}>+</button><br />
        <button onClick={()=>{dispatch(filzero())}}>zero</button>
      </div>
      <h1 ref={refele} onClick={()=>{refele.current.innerHTML="hello world"}}>hello</h1>
    </div>


    {/* that is use reducer */}
    <div>
      <button onClick={()=>dispatchreducer({type:"dec",payload:10})}>-</button>
      <h1>{state}</h1>
      <button  onClick={()=>dispatchreducer({type:"inc",payload:10})}>+</button><br />
      <input type="text" onChange={handlechange} />
      <h1>{statename}</h1>
    </div>
    </>
  );
}

export default App;
