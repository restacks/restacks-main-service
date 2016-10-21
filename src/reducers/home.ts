export type HomeState = { message: 'Hello Restack' }
export const home = (state: HomeState, action): HomeState => {
    return Object.assign({}, state);
};