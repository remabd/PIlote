import { exec } from 'node:child_process';
import { Temporal } from '@js-temporal/polyfill';
import { Data, Effect } from 'effect';

export type SysCallResult<T> = { status: 200; result: T } | { status: 500; message: string };

export class SysError extends Data.TaggedError('SysCallError')<{
	readonly message: string;
}> {}

export const uptimeEnJours = (): Effect.Effect<number, SysError> => {
	let jours = 0;
	const COMMAND = "uptime | awk '{print $3}' FS=' '";
	exec(COMMAND, (error, stdout, stderr) => {
		if (error || stderr) {
			return Effect.fail(new Error('System Call Error'));
		}
		jours = stdout.includes('day') ? parseInt(stdout[0]) : 0;
	});
	return Effect.succeed(jours);
};

export const CalculeDerniereMAJEnJours = (): Effect.Effect<number, SysError> => {
	const DATEISOREGEX = new RegExp('^\d{4}-\d{2}-\d{2}$');
	let date = '';
	const COMMAND = "tac /var/log/apt/history.log | grep Upgrade -m1 -B1 | head -n1 | cut -d' ' -f2";
	exec(COMMAND, (error, stdout, stderr) => {
		if (error || stderr) {
			return Effect.fail(new Error('System Call Error'));
		}
		date = stdout;
	});
	if (!DATEISOREGEX.test(date)) return Effect.fail(new Error('Stdout error'));
	const temporalMaj = Temporal.PlainDate.from(date);
	const temporalNow = Temporal.Now.plainDateISO();
	return Effect.succeed(temporalMaj.until(temporalNow).days);
};
