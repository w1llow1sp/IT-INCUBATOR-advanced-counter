export const loadState = () => {
    try {
        const maxValue = localStorage.getItem('maxValue');
        const minValue = localStorage.getItem('minValue');

        if (maxValue === null || minValue === null) {
            return undefined;
        }

        const maxValueParsed = JSON.parse(maxValue);
        const minValueParsed = JSON.parse(minValue);

        return { maxInputValue: maxValueParsed, minInputValue: minValueParsed };
    } catch (err) {
        return undefined;
    }
};

export const saveState = (maxValue: string, minValue: string) => {
    try {
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('minValue', JSON.stringify(minValue));
    } catch {
        console.error('Failed to save state to local storage');
    }
};
