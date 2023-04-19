import { useState } from 'react'
import React from 'react';

  
const List =  (props) => {

    const per = props.person;

    const items = per.map((item) => {
        return (
        <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.imgUrl} />
        </div>
        );
    });
  return (
    <div>
      {items}
    </div>
  );
}

export default List
