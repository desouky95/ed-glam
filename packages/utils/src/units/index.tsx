export type ContentType =
	| 'assignment'
	| 'document'
	| 'video'
	| 'test'
	| 'survey'
	| 'webinar'
	| 'webcontent';
export type UnitProgressStatus =
	| 'not started'
	| 'registered'
	| 'in progress'
	| 'failed'
	| 'not attended'
	| 'completed';
type ContentInfo<P> = {
	type: P;
	mdIcon: string;
};

type ContentInfoConfig = {
	[key in ContentType]: ContentInfo<key>;
};

export const ContentConfig: ContentInfoConfig = {
	document: {
		type: 'document',
		mdIcon: 'description',
	},
	video: {
		type: 'video',
		mdIcon: 'play_circle_filled',
	},
	test: {
		type: 'test',
		mdIcon: 'live_help',
	},
	survey: {
		type: 'survey',
		mdIcon: 'inventory',
	},
	assignment: {
		type: 'assignment',
		mdIcon: 'ballot',
	},
	webinar: {
		type: 'webinar',
		mdIcon: 'podcasts',
	},
	webcontent: {
		type: 'webcontent',
		mdIcon: 'document_scanner',
	},
};
