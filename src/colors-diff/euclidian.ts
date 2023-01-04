import { lab, rgb, hsl, hcl, cubehelix, RGBColor, LabColor, HCLColor, HSLColor, CubehelixColor } from 'd3-color';

function euclidean(ca1: number, ca2: number, ca3: number, cb1: number, cb2: number, cb3: number) {
	return Math.sqrt(Math.pow(ca1 - cb1, 2) + Math.pow(ca2 - cb2, 2) + Math.pow(ca3 - cb3, 2));
}

function differenceEuclideanRGB(stdd: string, smpp: string) {
	const std = rgb(stdd); 
    const smp = rgb(smpp);
	return euclidean(std.r, std.g, std.b, smp.r, smp.g, smp.b);
}

function differenceEuclideanLab(stdd: string, smpp: string) {
	const std = lab(stdd); 
    const smp = lab(smpp);
	return euclidean(std.l, std.a, std.b, smp.l, smp.a, smp.b);
}

function differenceEuclideanHcl(stdd: string, smpp: string) {
    const std = hcl(stdd);
    const smp = hcl(smpp);
	return euclidean(std.h, std.c, std.l, smp.h, smp.c, smp.l);
}

function differenceEuclideanHsl(stdd: string, smpp: string) {
    const std = hsl(stdd);
    const smp = hsl(smpp);
	return euclidean(std.h, std.s, std.l, smp.h, smp.s, smp.l);
}

function differenceEuclideanCubehelix(stdd: string, smpp: string) {
	const std = cubehelix(stdd);
    const smp = cubehelix(smpp);
	return euclidean(std.h, std.s, std.l, smp.h, smp.s, smp.l);
}

export {
	euclidean,
	differenceEuclideanRGB,
	differenceEuclideanLab,
	differenceEuclideanHcl,
	differenceEuclideanHsl,
	differenceEuclideanCubehelix
};