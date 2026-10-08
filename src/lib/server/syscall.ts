import { execSync } from 'child_process';

export type SysCallResult<T> = { status: 200; result: T } | { status: 500; message: string };

export interface SysError {
	message: string;
}

export function uptimeEnJours(): SysCallResult<number> {
    const COMMAND = "uptime | awk '{print $3}' FS=' '";
    const time = execSync(COMMAND);
	try {
		if (!time.includes('day')) {
            return { status: 200, result: 0};
		}
        return { status: 200, result: time[0] };
	} catch {
		return { status: 500, message: 'Décodage impossible' };
	}
}

export function CalculeDerniereMAJEnJours(): SysCallResult<number> {
    const COMMAND = "tac /var/log/apt/history.log | grep Upgrade -m1 -B1 | head -n1 | cut -d' ' -f2";
    const time = execSync(COMMAND);
}
