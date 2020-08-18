const capitalize = word => {
    if (typeof word === 'string') {
        return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
        throw new Error('Not a string sent');
    }
};

const reverseString = word => {
    if (typeof word === 'string') {
        let splitted = word.split("").reverse();
        return splitted.join("");
    } else {
        throw new Error('Not a string sent');
    }
}

export {
    capitalize,
    reverseString,
};