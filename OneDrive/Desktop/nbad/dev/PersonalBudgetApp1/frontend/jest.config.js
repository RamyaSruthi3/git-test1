module.exports = {
  // ...other config options... //
  testEnvironment: 'jsdom', // using jsdom for testing React components (inside it block)
  transform: { // using babel to transpile your test files (inside it block)
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // matching all .js, .jsx, .ts, and .tsx files (inside it block)
  },
  transformIgnorePatterns: [ // ignore certain files from being transformed (inside it block)
    'node_modules/(?!babel-jest)', // exclude babel-jest from being transformed (inside it block)
  ],
  setupFilesAfterEnv: ['<root>/setupTests.js'], // run the custom setup code after loading the environment variables (inside it block)
};