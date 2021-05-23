const bl = {
  // name: 'artemisa-client',
  // version: '0.1.0',
  // private: true,
  dependencies: {
    '@babel/core': '7.12.3',
    '@pmmmwh/react-refresh-webpack-plugin': '0.4.3',
    '@svgr/webpack': '5.5.0',
    '@testing-library/jest-dom': '^5.12.0',
    '@testing-library/react': '^11.2.7',
    '@testing-library/user-event': '^12.8.3',
    // '@typescript-eslint/eslint-plugin': '^4.5.0',
    // '@typescript-eslint/parser': '^4.5.0',
    arwes: '^1.0.0-alpha.5',
    // 'babel-eslint': '^10.1.0',
    'babel-jest': '^26.6.0',
    'babel-loader': '8.1.0',
    'babel-plugin-named-asset-import': '^0.3.7',
    'babel-preset-react-app': '^10.0.0',
    bfj: '^7.0.2',
    camelcase: '^6.1.0',
    'case-sensitive-paths-webpack-plugin': '2.3.0',
    'css-loader': '4.3.0',
    dotenv: '8.2.0',
    'dotenv-expand': '5.1.0',
    // eslint: '^7.11.0',
    // 'eslint-config-react-app': '^6.0.0',
    // 'eslint-plugin-flowtype': '^5.2.0',
    // 'eslint-plugin-import': '^2.22.1',
    // 'eslint-plugin-jest': '^24.1.0',
    // 'eslint-plugin-jsx-a11y': '^6.3.1',
    // 'eslint-plugin-react': '^7.21.5',
    // 'eslint-plugin-react-hooks': '^4.2.0',
    // 'eslint-plugin-testing-library': '^3.9.2',
    // 'eslint-webpack-plugin': '^2.5.2',
    'file-loader': '6.1.1',
    'fs-extra': '^9.0.1',
    'html-webpack-plugin': '4.5.0',
    'identity-obj-proxy': '3.0.0',
    jest: '26.6.0',
    'jest-circus': '26.6.0',
    'jest-resolve': '26.6.0',
    'jest-watch-typeahead': '0.6.1',
    'mini-css-extract-plugin': '0.11.3',
    'optimize-css-assets-webpack-plugin': '5.0.4',
    'pnp-webpack-plugin': '1.6.4',
    'postcss-flexbugs-fixes': '4.2.1',
    'postcss-loader': '3.0.0',
    'postcss-normalize': '8.0.1',
    'postcss-preset-env': '6.7.0',
    'postcss-safe-parser': '5.0.2',
    prompts: '2.4.0',
    react: '^17.0.2',
    'react-app-polyfill': '^2.0.0',
    'react-dev-utils': '^11.0.3',
    'react-dom': '^17.0.2',
    'react-refresh': '^0.8.3',
    resolve: '1.18.1',
    'resolve-url-loader': '^3.1.2',
    'sass-loader': '^10.0.5',
    semver: '7.3.2',
    'style-loader': '1.3.0',
    'terser-webpack-plugin': '4.2.3',
    'ts-pnp': '1.2.0',
    'url-loader': '4.1.1',
    'web-vitals': '^1.1.2',
    webpack: '4.44.2',
    'webpack-dev-server': '3.11.1',
    'webpack-manifest-plugin': '2.2.0',
    'workbox-webpack-plugin': '5.1.4'
  },
  scripts: {
    start: 'node scripts/start.js',
    build: 'node scripts/build.js',
    test: 'node scripts/test.js'
  },
  eslintConfig: {
    extends: ['react-app', 'react-app/jest']
  },
  browserslist: {
    production: ['>0.2%', 'not dead', 'not op_mini all'],
    development: [
      'last 1 chrome version',
      'last 1 firefox version',
      'last 1 safari version'
    ]
  },
  jest: {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
    setupFiles: ['react-app-polyfill/jsdom'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    testMatch: [
      '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
      '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'
    ],
    testEnvironment: 'jsdom',
    testRunner:
      '/home/alali/Development/artemisa/client/node_modules/jest-circus/runner.js',
    transform: {
      '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$':
        '<rootDir>/config/jest/babelTransform.js',
      '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
      '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
        '<rootDir>/config/jest/fileTransform.js'
    },
    transformIgnorePatterns: [
      '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
      '^.+\\.module\\.(css|sass|scss)$'
    ],
    modulePaths: [],
    moduleNameMapper: {
      '^react-native$': 'react-native-web',
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
    },
    moduleFileExtensions: [
      'web.js',
      'js',
      'web.ts',
      'ts',
      'web.tsx',
      'tsx',
      'json',
      'web.jsx',
      'jsx',
      'node'
    ],
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname'
    ],
    resetMocks: true
  },
  babel: {
    presets: ['react-app']
  }
};
