import { RefObject, useEffect } from 'react';

const useOutsideAlert = (ref: RefObject<any>, callback: any) => {
	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (ref.current && !ref.current.contains(event.target)) {
				callback();
			}
		};

		// bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);
};

export default useOutsideAlert;
export { useOutsideAlert };
