import React, { useContext } from 'react';
import { SnackbarContext } from '../SnackbarContext/SnackbarContext';

const useSnackbar = () => {
	const context = useContext(SnackbarContext);
	if (!context) {
		throw new Error('No SnackProvider found !!!');
	}
	return { ...context };
};

export default useSnackbar;
