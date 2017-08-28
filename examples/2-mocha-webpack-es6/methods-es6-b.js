const b = {
    func(name) {
        this.lastName = name;

        return {
            value: 'hello, ' + name,
            object: b
        };
    }
};

b.self = b;

export default b;