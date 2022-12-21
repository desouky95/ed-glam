import React, { useEffect } from 'react';

type UseCsvTableArgs = { file: Blob | string };
const useCsvTable = (args: UseCsvTableArgs) => {
	const handleFile = (file: Blob | string) => {
		if (window.FileReader) {
			// FileReader are supported.
			getAsText(file);
		} else {
			alert('FileReader are not supported in this browser.');
		}
	};

	const getAsText = (fileToRead: Blob | string) => {
		var reader = new FileReader();
		reader.onload = loadHandler;
		reader.onerror = errorHandler;
		if (typeof args.file === 'string') {
			fetch(fileToRead as string, {
				headers: {
					Authorization:
						'Bearer MTcwMw.MutvUmFFfQPaabb0mhtEbrXOdPz0AO9wi8N7LEFoGqb_QXUIziTOpbeylip1',
				},
			})
				.then((res) => res.blob())
				.then((value) => {
					const file = new File([value], 'csv', { type: value.type });
					reader.readAsDataURL(file);
				});
		} else {
			reader.readAsText(fileToRead as Blob);
		}
	};
	const loadHandler = (event: ProgressEvent<FileReader>) => {
		var csv = event.target?.result;
		if (csv) {
			processData(csv as string);
		}
	};
	const errorHandler = (event: ProgressEvent<FileReader>) => {
		if (event.target?.error?.name == 'NotReadableError') {
			alert('Cannot read file !');
		}
	};
	function dataUrItoBlob(dataUri: string) {
		debugger;
		var binary = atob(dataUri.split(',')[1]);
		var mimeString = dataUri.split(',')[0].split(':')[1].split(';')[0];
		var array = [];
		for (var i = 0; i < binary.length; i++) {
			array.push(binary.charCodeAt(i));
		}
		return new Blob([new Uint8Array(array)], { type: mimeString });
	}

	const processData = (csv: string) => {
		var allTextLines = csv.split(/\r\n|\n/);
		var lines = [];
		while (allTextLines.length) {
			lines.push(allTextLines.shift()?.split(','));
		}
		console.log(lines);
		// drawOutput(lines);
	};

	useEffect(() => {
		handleFile(args.file);
	}, [args.file]);
};

export default useCsvTable;
