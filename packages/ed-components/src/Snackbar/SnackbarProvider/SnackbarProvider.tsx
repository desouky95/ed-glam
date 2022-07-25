import { Portal } from '@eduact/ed-system';
import { FC, useEffect, useMemo, useState } from 'react';
import Snackbar from '../Snackbar/Snackbar';
import React from 'react';
import {
	OpenSnackbarOptions,
	SnackbarContext,
} from '../SnackbarContext/SnackbarContext';
import { useDelayedUnmount } from '@eduact/utils';

const SnackbarProvider: FC = ({ children }) => {
	const defaultTimeout = 2000;

	const [open, setOpen] = useState(false);
	const [config, setConfig] = useState<OpenSnackbarOptions | null>(null);
	const hasTransition = useDelayedUnmount({ delay: 1000, mounted: open });
	const openSnackbar = (options: OpenSnackbarOptions) => {
		setConfig(options);
		setOpen(true);
		setTimeout(() => setOpen(false), options.timeout ?? defaultTimeout);
	};
	const el = useMemo(() => document.createElement('div'), []);

	useEffect(() => {
		el.className = 'snackbar-container';
	}, []);

	return (
		<SnackbarContext.Provider value={{ openSnackbar }}>
			<Portal>
				{((open && config) || hasTransition) && (
					<Snackbar text={config?.text ?? ''} {...config} />
				)}
			</Portal>
			{children}
		</SnackbarContext.Provider>
	);
};

export default SnackbarProvider;
