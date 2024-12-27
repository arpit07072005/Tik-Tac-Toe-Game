import React, { useState } from 'react'

function TicTak() {
  const [input,setInput]=useState(Array(9).fill(null))
  const [enterx ,setEnterx]=useState(true)
  const [winner, setWinner]=useState(null)
const handlebtn=(i)=>{
  return (
    <button className='btn-main' onClick={()=>handlebtnclick(i)}>{input[i]}</button>
  )
}
const handlebtnclick=(i)=>{
  if(input[i]!=null){
    return
  }
  const update=[...input]
  update[i]=enterx ? "X" : "O"
 setInput(update)
  setEnterx(!enterx)
  const check=  handlecheck(update);
  if(check){
    setWinner(check)
  }
}
const handlecheck=(input)=>{
  const possibilty=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
for(let i=0;i<possibilty.length;i++){
  const [a,b,c]=possibilty[i]

  if(input[a]===input[b]&&input[b]===input[c]){
    return(input[a])
  }
}
return false
}
const handlereset=()=>{
  setInput(Array(9).fill(null))
  setWinner(null)
}
  return (
    <>
    <div className='container'>
      <div className="row1">
        {handlebtn(0)}
        {handlebtn(1)}
        {handlebtn(2)}
      </div>
      <div className="row2">
      {handlebtn(3)}
      {handlebtn(4)}
      {handlebtn(5)}
      </div>
      <div className="row3">
      {handlebtn(6)}
      {handlebtn(7)}
      {handlebtn(8)}
      </div>
      <button className="reset" onClick={handlereset}>Restart</button>
    {winner&& <div className='winner'><h1>{winner} is the winner <br /><img src="pngtree-creative-winner-trophy-transparent-png-image_6610219.png" alt="" /></h1></div>}
    </div>
    </>
  )
}

export default TicTak
