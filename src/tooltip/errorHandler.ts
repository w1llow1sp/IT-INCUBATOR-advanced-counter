// errorHandler.ts

interface Error {
    message: string;
}

export function validateValues(
    minValue: number,
    maxValue: number
): Error[] | null {
    const errors: Error[] = [];

    if (minValue >= maxValue) {
        errors.push({ message: "Values cant be equal!" });
    }

    if (minValue < 0 || maxValue < 0) {
        errors.push({ message: "Values cant be less than 0" });
    }

    return errors.length ? errors : null;
}
