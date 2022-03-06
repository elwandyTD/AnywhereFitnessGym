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
          Assets: './src/assets',
          Components: './src/components',
          Hooks: './src/hooks',
          Global: './src/global',
          Modules: './src/components/modules',
          Reducers: './src/store/reducers',
          Screens: './src/screens',
          Store: './src/store',
          Theme: './src/global/theme',
          Types: './src/types',
          Utils: './src/utils',
        },
      },
    ],
  ],
};
