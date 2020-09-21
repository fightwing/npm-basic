import _ from 'romanize'
function transform(number) {

    const romanize = require('romanize')
    const result = romanize(10)
    return result;
}

export {
    transform
};