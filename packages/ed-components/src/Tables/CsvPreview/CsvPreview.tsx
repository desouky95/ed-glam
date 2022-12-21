import { useCsvTable } from '@eduact/utils';
import React from 'react';

type CsvPreviewProps = {
	file: Blob | string;
};
const CsvPreview: React.VoidFunctionComponent<CsvPreviewProps> = ({ file }) => {
	useCsvTable({
		file,
	});
	return <div>CsvPreview</div>;
};

export default CsvPreview;
