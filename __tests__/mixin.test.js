const mixins = require('./../src/styles/mixins');

const mock = {
    replaceWith: jest.fn(),
};

test('button default generates with correct styles', () => {
    expect(mixins.button(mock, 'teal', 'white', 'tomato')).toMatchSnapshot();
});

test('padding generates with small size', () => {
    expect(mixins.padding(mock, 'sm')).toMatchSnapshot();
});

test('font-size render with 20px - 1.25rem', () => {
    expect(mixins.fontSize(mock, '20')).toMatchSnapshot();
});
