"use client"

import React from 'react';

const Child_RCC = (data: any) => {
  const myList: any = data.list;
  return (
		<>
      <h1>Child RCC</h1>
			<ul>
				{myList.map((item: any) => (
					<li key={item.name}>{item.name} - {item.age}</li>
				))}
			</ul>
		</>
  );
};

export default Child_RCC;
