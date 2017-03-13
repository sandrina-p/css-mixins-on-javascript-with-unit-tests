// PostCSS is needed to make this work
const postcss = require('postcss');

const paddingsSizes = {
    sm: '0.2rem 0.5rem',
    md: '0.5rem 1rem',
    lg: '1rem 2rem',
}
const mixins = {

    // The first argument, mixin, is used to connect postCSS-mixins
    button(mixin, bg, color, bgHover, colorHover) {
        colorHover = colorHover || color;

        return {
            background: bg,
            color: color,
            'border-color': color,
            '&:hover, &:focus': {
                background: bgHover,
                color: colorHover,
                'border-color': colorHover,
            }
        };
    },

    padding(mixin, size) {
        return {
            padding: paddingsSizes[size],
        }
    }
};

module.exports = mixins;
