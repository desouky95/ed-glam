import { getJestProjects } from '@nrwl/jest';
export default {
	projects: getJestProjects(),
	preset: 'ts-jest',
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
};
