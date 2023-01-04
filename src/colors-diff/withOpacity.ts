function differenceWithOpacity(metric: (arg0: any, arg1: any) => any, std: { opacity: number; }, smp: { opacity: number; }) {
	let dist = metric(std, smp);
	return Math.sqrt(Math.pow(dist, 2) + Math.pow(std.opacity - smp.opacity, 2));
}

export default differenceWithOpacity;