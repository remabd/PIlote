import { uptimeEnJours, CalculeDerniereMAJEnJours } from '#lib/server/syscall.js';
import { Effect } from 'effect';

export interface Datas {
	uptime: string | number;
	lastMaj: string | number;
}

export const load = () => {
	const data: Datas = {
		uptime: 0,
		lastMaj: 0
	};
	try {
		data.uptime = Effect.runSync(uptimeEnJours());
	} catch {
		data.uptime = 'NaN';
	}

	try {
		data.lastMaj = Effect.runSync(CalculeDerniereMAJEnJours());
	} catch {
		data.lastMaj = 'NaN';
	}

	return data;
};
