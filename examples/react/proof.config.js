const BabelPlugin = require('@proof-ui/babel-plugin').default;
const JunitPlugin = require('@proof-ui/junit-plugin').default;
const SkipPlugin = require('@proof-ui/skip-tests-plugin').default;
const A11yPlugin = require('@proof-ui/a11y-plugin').default;
const ApplitoolsPlugin = require('@proof-ui/applitools-plugin').default;
const AddAllPlugin = require('@proof-ui/add-all-plugin').default;

const babelConfig = {
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    'babel-preset-power-assert',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
};

module.exports = {
  url: 'localhost:6006',
  logLevel: 'info',
  testMatch: '__automation__/**/*test.ts',
  plugins: [
    new AddAllPlugin(),
    new JunitPlugin(),
    new SkipPlugin(),
    new ApplitoolsPlugin(),
    new A11yPlugin(),
    new BabelPlugin({
      config: babelConfig,
    }),
  ],
  waitForRoot: 10000,
};
