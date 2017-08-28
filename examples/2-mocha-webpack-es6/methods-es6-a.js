import b from './methods-es6-b';

const a = {
    func(name) {
        return {
            greeting: b.func(name).value,
            ref: b.func(name).object
        };
    }
};

export default a;