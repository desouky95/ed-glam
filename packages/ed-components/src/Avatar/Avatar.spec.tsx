import { create } from 'react-test-renderer';
import { Avatar } from '.';

it('render avatar', () => {
	const component = create(<Avatar />).toJSON();
	expect(component).toMatchSnapshot();
});
