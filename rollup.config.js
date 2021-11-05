import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
const path = require('path');

const makeEntry = (dir, out) => ({
    input: `assets/${dir}/index.js`,
    treeshake: false,
    output: {
        file: `public/build/${out}.js`,
        format: "umd",
        sourcemap: false,
    },
    plugins: [
        nodeResolve(),
        commonjs(),
    ]
})

export default [
    makeEntry('components','components'),
];