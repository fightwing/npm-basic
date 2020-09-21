import {transform} from "../src/romanizer";


describe('transform', () => {
    it('should return X when 10 input', () => {
        const formatted = transform(10);
        expect(formatted).toEqual("X");
    });


});