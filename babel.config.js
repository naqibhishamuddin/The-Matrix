module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ios.jsx',
          '.android.jsx',
          '.jsx',
          '.json',
        ],
        alias: {
          components: './app/components',
          screens: './app/screens',
          assets: './assets',
          utils: './app/utils',
          misc: './app/misc',
        },
      },
    ],
  ],
};
