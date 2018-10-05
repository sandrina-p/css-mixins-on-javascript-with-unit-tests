const paddingSizes = {
    sm: '0.2rem 0.5rem',
    md: '0.5rem 1rem',
    lg: '1rem 2rem',
}
const mixins = {

    // The first argument, mixin, is used to connect postCSS-mixins
    button(mixin, bg, color, bgHover) {
        return {
            background: bg,
            color: color,
            '&:hover, &:focus': {
                background: bgHover,
            }
        };
    },
    padding(mixin, size) {
        return {
            padding: paddingSizes[size],
        }
    },
    fontSize(mixin, px) {
        return {
            'font-size': (px / 16) + 'rem',
        }
    }
};

module.exports = mixins;
