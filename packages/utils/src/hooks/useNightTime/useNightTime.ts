import { useEffect, useRef } from 'react';

function useNightTime() {
	const isNight = useRef<null | boolean>(null);
	useEffect(() => {
		let date = new Date();
		console.log(date.getHours());
		isNight.current = date.getHours() > 18 || date.getHours() < 6;
	}, []);

	return isNight.current;
}

export default useNightTime;
