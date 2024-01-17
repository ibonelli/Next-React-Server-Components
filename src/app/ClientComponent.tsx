"use client"

import React, { useEffect, useState } from 'react';

const ClientComponent = () => {
  const [myList, setMyList] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/namelist`);
        if (!response.ok) throw Error('Did not receive data');
        const data = await response.json();
        setMyList(data.MyList);
      } catch (error) {
        console.error("Cound not fetch past touchbase data.")
      }
    };
    fetchData();
  }, []);

  return (
		<>
      <h1>React Client Component</h1>
			<ul>
				{myList.map((item: any) => (
					<li key={item.name}>{item.name} - {item.age}</li>
				))}
			</ul>
		</>
  );
};

export default ClientComponent;
