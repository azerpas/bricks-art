import { lab, LabColor } from 'd3-color';
import { euclidean } from './euclidian';

var θ = 26 / 180 * Math.PI;
var cosθ = Math.cos(θ);
var sinθ = Math.sin(θ);
var factor = 100/Math.log(139/100); // ~ 303.67

function din99o(color: LabColor, kCH: number, kE: number) {
	var l = factor / kE * Math.log(1 + 0.0039 * color.l);
	if (color.a === 0 && color.b === 0) {
		return lab(l, 0, 0); // achromatic colors
	}
	var e = color.a * cosθ + color.b * sinθ;
	var f = 0.83 * (color.b * cosθ - color.a * sinθ);
	var G = Math.sqrt(e * e + f * f);
	var c = Math.log(1 + 0.075 * G) / (0.0435 * kCH * kE);
	var h = (Math.atan2(f, e) + θ) / Math.PI * 180;
	return lab(l, c * Math.cos(h / 180 * Math.PI), c * Math.sin(h / 180 * Math.PI));
}

function differenceDin99o(kCH?: number, kE?: number) {
	kCH = kCH !== undefined ? kCH : 1;
	kE = kE !== undefined ? kE : 1;

	return function(stdd: string, smpp: string) {
		const std = din99o(lab(stdd), kCH!, kE!);
		const smp = din99o(lab(smpp), kCH!, kE!);
		return euclidean(std.l, std.a, std.b, smp.l, smp.a, smp.b);
	}
}