import React from 'react';
import { getData } from '@/lib/getData';

const ServerComponent = () => {
	const MyList: any = getData();
	
  return (
		<>
			<h1>React Server Component</h1>
			<ul>
				{MyList.map((item: any) => (
					<li key={item.name}>{item.name} - {item.age}</li>
				))}
			</ul>
		</>
	);
};

export default ServerComponent;
