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
          Api: './src/services/api',
          App: './src',
          Assets: './src/assets',
          Components: './src/components',
          Hooks: './src/hooks',
          Global: './src/global',
          Modules: './src/components/modules',
          Reducers: './src/store/reducers',
          Screens: './src/screens',
          Services: './src/services',
          Store: './src/store',
          StoreTypes: './src/store/types',
          Theme: './src/global/theme',
          Types: './src/types',
          Utils: './src/utils',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
