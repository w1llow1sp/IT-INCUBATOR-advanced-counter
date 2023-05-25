export const loadState = () => {
    try {
        const maxValue = localStorage.getItem('maxInputValue');
        const minValue = localStorage.getItem('minInputValue');

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
        localStorage.setItem('maxInputValue', JSON.stringify(maxValue));
        localStorage.setItem('minInputValue', JSON.stringify(minValue));
    } catch {
        console.error('Failed to save state to local storage');
    }
};
