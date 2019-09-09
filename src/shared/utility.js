export const updateObject = (oldObject, updatedPropertioes) => {
    return {
        ...oldObject,
        ...updatedPropertioes
    }
};

export const checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
        isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    }

    return isValid;
};