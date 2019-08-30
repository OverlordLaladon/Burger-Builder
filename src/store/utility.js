export const updateObject = (oldObject, updatedPropertioes) => {
    return {
        ...oldObject,
        ...updatedPropertioes
    }
}