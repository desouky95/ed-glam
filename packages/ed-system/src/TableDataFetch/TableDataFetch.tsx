import React, { useCallback, useEffect } from 'react';
import { SortDirection, TableDataFetchProps } from './TableDataFetch.types';
import { useSearchParams } from 'react-router-dom';

const TableDataFetch: React.VoidFunctionComponent<TableDataFetchProps> = ({
	filters,
	render,
	request,
}) => {
	const [params] = useSearchParams();

	const getData = useCallback(() => {
		let sortBy = params.get('field')
			? {
					field: params.get('field'),
					direction: params.get('direction') as SortDirection,
			  }
			: null;
		const from = params.get('from');
		const to = params.get('to');
		const perPage = params.get('perPage') ? Number(params.get('perPage')) : 10;
		const page = params.get('page') ? Number(params.get('page')) : 1;
		const query = params.get('query');
		const filters: Array<any> = [];
		params.forEach((value, key) => {
			if (key.includes('FILTER')) {
				filters.push({ [key.replace('FILTER_', '')]: value });
			}
		});
		return {
			sortBy,
			from,
			to,
			filters,
			perPage,
			page,
			query,
		};
	}, [params.toString()]);

	useEffect(() => {
		request(getData());
	}, [params.toString()]);

	return <>{render()}</>;
};

export default TableDataFetch;
