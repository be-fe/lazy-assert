import b from './methods-es6-b';

const a = {
    func(name) {
        return 'greeting: ' + b.func(name);
    }
};

export default a;