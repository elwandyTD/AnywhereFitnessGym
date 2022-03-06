module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
        alias: {
          Actions: './src/store/actions',
          App: './src',
          Components: './src/components',
          Hooks: './src/hooks',
          Globals: './src/globals',
          Reducers: './src/reducers',
          Store: './src/store',
          Types: './src/types',
          Utils: './src/utils',
        },
      },
    ],
  ],
};
