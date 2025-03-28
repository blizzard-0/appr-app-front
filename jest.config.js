module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/consts/(.*)$': '<rootDir>/consts/$1',
    '^@/modules/(.*)$': '<rootDir>/modules/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
    '^@/generated/(.*)$': '<rootDir>/generated/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/components/**/*.test.tsx'],
  collectCoverageFrom: [
    '<rootDir>/components/**/*.tsx',
    '!<rootDir>/components/**/*.stories.tsx',
    '!<rootDir>/components/**/index.tsx',
  ],
  // collectCoverage: true,
  // coverageReporters: ['json', 'html'],
};
