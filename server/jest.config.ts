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
    //moduleDirectories: ['node_modules', 'src']
    moduleNameMapper: {
        '@app': '<rootDir>/src/app.ts',
        "@services/(.*)" : '<rootDir>/src/services/$1',
        "@util/(.*)" : '<rootDir>/src/util/$1',
        "@models/(.*)" : '<rootDir>/src/models/$1'
    }
}
