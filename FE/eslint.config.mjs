import { dirname } from 'path';

import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const compat = new FlatCompat({ baseDirectory: _dirname });

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      semi: ['error'],
    },
  }),
];
export default eslintConfig;
