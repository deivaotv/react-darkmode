export const DARKMODE_UPDATE = value => ({
    type: 'DARKMODE_UPDATE',
    checked: value,
});

export const setDarkMode = (checked) => ({
    type: 'DARKMODE_UPDATE',
    payload: {
        checked
    }
});