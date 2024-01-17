import React from 'react';
import Child_RCC from './Child_RCC'
import { getData } from '@/lib/getData';

const Parent_RSC = () => {
	const MyList: any = getData();

	return (
		<>
			<h1>Parent RSC</h1>
			<p>Fetching data and passing props.</p>
			<Child_RCC
				list={MyList}
			/>
		</>
	);
};

export default Parent_RSC;
