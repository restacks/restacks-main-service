//@flow

export const APP_IS_RUNNING = 'APP_IS_RUNNING';

export function bootstrap () {
    return {
        type: APP_IS_RUNNING
    }
}