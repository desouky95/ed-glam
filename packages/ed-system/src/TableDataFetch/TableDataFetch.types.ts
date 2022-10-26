export type SortDirection = 'desc' | 'asc' | null;
declare type Filter = {
	name: string;
	options: Array<{ name: string; value: string }>;
	type: 'dropdown';
	value: string;
};

export type TableDataFetchRequestArgs = {
	page?: number;
	perPage: number;
	sortBy?: {
		field: string | null;
		direction: SortDirection;
	} | null;
	from?: string | null;
	to?: string | null;
	filters: Array<{ [key: string]: string }> | null;
	query?: string | null;
};

export type TableDataFetchProps = {
	filters: Array<Filter>;
	render: () => JSX.Element;
	request: (data: TableDataFetchRequestArgs) => void;
};
