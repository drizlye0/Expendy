module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json', '.ts', '.tsx'],
        alias: {
          '@': './src',
        },
      },
    ],

    ['react-native-worklets/plugin', {}, 'worklets'],
    ['react-native-reanimated/plugin', {}, 'reanimated'],
  ],
};
