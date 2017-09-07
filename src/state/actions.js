export const CHANGE_BAZ = 'CHANGE_BAZ';

export function changeBaz(baz) {
    return {
        type: CHANGE_BAZ,
        payload: baz,
    };
}