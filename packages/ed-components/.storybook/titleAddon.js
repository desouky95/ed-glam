const { addons } = require('@storybook/addons');
const { STORY_RENDERED } = require('@storybook/core-events');

addons.register('TitleAddon', (api) => {
	const cunstomTitle = 'abc'; // Define your customTitle title
	let interval = null;
	const setTitle = () => {
		clearTimeout(interval);
		let storyData = null;
		try {
			storyData = api.getCurrentStoryData(); // Some time get error
		} catch (e) {}
		let title;
		if (!storyData) {
			title = cunstomTitle;
		} else {
			title = `${storyData.kind} - ${storyData.name} ⋅ ${cunstomTitle}`;
		}
		if (document.title !== title) {
			// As few dom operations as possible
			document.title = title;
		}
		interval = setTimeout(setTitle, 100);
	};
	setTitle();
	api.on(STORY_RENDERED, (story) => {
		setTitle();
	});
});
