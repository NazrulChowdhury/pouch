export default {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/**/*.test.ts"],
    verbose: true,
    forceExit: true,
    clearMocks: true,
    resetMocks: true,
    restoreMocks: true,
    testPathIgnorePatterns: ["./node_modules/", "./build/"],
    setupFilesAfterEnv: ["jest-chain"],
    //moduleDirectories: ['node_modules', 'src']
    moduleNameMapper: {
        '@app': '<rootDir>/src/app.ts',
        '@types': '<rootDir>/src/types/',
        '@routes': '<rootDir>/src/routes/',
        '@fixtures': '<rootDir>/src/fixtures/',
        "@services/(.*)" : '<rootDir>/src/services/$1',
        "@util/(.*)" : '<rootDir>/src/util/$1',
        "@models/(.*)" : '<rootDir>/src/models/$1', 
        "@controllers/(.*)" : '<rootDir>/src/controllers/$1',
        "@middlewares/(.*)" : '<rootDir>/src/middlewares/$1',
    }
}
