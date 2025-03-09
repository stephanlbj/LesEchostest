import { Config } from 'jest'; 
import nextJest from 'next/jest';   

const createJestConfig = nextJest({
  dir: './',   
});

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],  
};

export default createJestConfig(config);  
