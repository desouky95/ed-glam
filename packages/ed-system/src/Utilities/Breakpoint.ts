export type Breakpoint = 'default' | 'sm' | 'md' | 'lg' | 'xl';
export type ResponsiveVal<T> = T | { [key in Breakpoint]?: T };
