import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { useState } from "react";
function Filter({search}) {
  const [filterrating,setFilterrating]=useState("")
  const onStarClick=(nextValue) => {
    setFilterrating={filterrating:nextValue}
  }

  return (
    <div className="filteration">
      <input style={{width: '27%',marginTop:20}} onChange={(e) =>search(e)} name="key" ></input>
      <StarRatingComponent 
          name="rate" 
          starCount={5}
          onStarClick={(nextValue, prevValue, name) =>search({target:{name:name,value:nextValue}})}
        />
    </div>
  )
}

export default Filter