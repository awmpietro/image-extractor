import { DISMISS_ALERT, SPAWN_ALERT } from '../types';

export const spawnAlert = (data: Record<string, unknown>): Record<string, unknown> => ({
    type: SPAWN_ALERT,
    payload: data,
});

export const dismissAlert = (): Record<string, unknown> => ({ type: DISMISS_ALERT });
