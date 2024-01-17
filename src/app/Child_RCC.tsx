"use client"

import React, {useState} from 'react';

const Child_RCC = (data: any) => {
  const myList: any = data.list;
  const [state, setState] = useState<boolean>(false);

  const handleButtonClick = () => {
    if(state == true) {
      setState(false);
    } else {
      setState(true);
    }
  };

  return (
		<>
      <h1>Child RCC</h1>
			<ul className='list' hidden={state}>
				{myList.map((item: any) => (
					<li key={item.name}>{item.name} - {item.age}</li>
				))}
			</ul>
      <br/>
      <button className='button' onClick={handleButtonClick}>Click To Hide Items</button>
		</>
  );
};

export default Child_RCC;
