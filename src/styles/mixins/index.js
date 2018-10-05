const paddingSizes = {
    sm: '0.2rem 0.5rem',
    md: '0.5rem 1rem',
    lg: '1rem 2rem',
};

const breakpoints = {
  sm: '20em',
  md: '60em',
  lg: '80em',
};

function padding(mixin, size) {
    return {
        padding: paddingSizes[size],
    }
}

function button(mixin, bg, color, bgHover) {
    return {
        background: bg,
        color: color,
        padding: '0.5rem',
        '&:hover, &:focus': {
            background: bgHover,
        },
    };
}

function fontSize(mixin, px) {
    const pxNumb = px * 1 // convert String to Number
    return {
        'font-size': (pxNumb / 16) + 'rem',
        [`@media (min-width: ${breakpoints.md})`]: {
            'font-size': ((pxNumb + 2) / 16) + 'rem',
        },
    };
}

const mixins = {
    padding,
    button,
    fontSize
};

module.exports = mixins;
