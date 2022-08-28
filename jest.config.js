module.exports = {
    verbose: true,
    roots: [
        "<rootDir>/out"
    ],
    testMatch: [
        "**/__tests__/**/*.+(ts|js)",
        "**/?(*.)+(spec|test).+(ts|js)"
    ],
    transform: {
        "^.+\\.(ts)$": [
            "ts-jest"
        ],
    },
};
