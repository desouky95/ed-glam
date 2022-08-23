import { Breakpoint, ResponsiveVal } from './Breakpoint';

export const getDynamicVariant = (
	value: ResponsiveVal<any>,
	scale?: Breakpoint
) => {
	const getFinalScale = (): Breakpoint | undefined => {
		if (typeof value !== 'object') return;
		if (!scale) return 'sm';
		if (value[scale]) return scale;
		if (!value[scale] && scale == 'lg') {
			return value['md'] ? 'md' : 'sm';
		} else if (!value[scale] && scale === 'md') 'sm';
		return 'sm';
	};
	return value && typeof value === 'object'
		? value[getFinalScale() ?? 'sm']
		: value;
};
