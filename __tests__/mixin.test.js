const mixins = require('./../src/styles/mixins');

const mock = {
    replaceWith: jest.fn(),
};

test('button default generates with correct styles', () => {
    expect(mixins.button(mock, 'teal', 'white', 'tomato')).toMatchSnapshot();
});

test('button default generates with correct styles', () => {
    expect(mixins.padding(mock, 'sm')).toMatchSnapshot();
});
