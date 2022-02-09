module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-case': [0, 'always', 'start-case'],
    'type-enum': [
      2,
      'always',
      ['Fix', 'Chore', 'New', 'Docs', 'Breaking', 'Upgrade', 'Update', 'Build'],
    ],
    'subject-case': [0, 'always', 'start-case'],
  },
};
