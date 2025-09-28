import js from '@eslint/js'
import globals from 'globals'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'
import {fileURLToPath} from "node:url";
import path from 'node:path'

const __filename__ = fileURLToPath(import.meta.url)
const __dirname__ = path.dirname(__filename__)

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        plugins: {
            js,
            'typescript-eslint': tseslint,
            '@stylistic': stylistic
        },
        extends: [
            'js/recommended',
            'typescript-eslint/recommended',
        ],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest
            },
            parser: tsParser,
            ecmaVersion: 2023,
            sourceType: 'module',
            parserOptions: {
                projectService: true,
                tsconfigRootDir: __dirname__
            }
        },
        settings: {
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    project: 'tsconfig.eslint.json'
                }
            }
        },
        rules: {
            '@stylistic/indent': ['error', 4],
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/quotes': ['warn', 'single', { avoidEscape: true }],
            '@stylistic/array-bracket-newline': ['error', 'consistent'],
            '@stylistic/array-bracket-spacing': ['error', 'always'],
            '@stylistic/array-element-newline': ['error', 'consistent'],
            '@stylistic/arrow-parens': ['error', 'as-needed'],
            '@stylistic/arrow-spacing': ['error', { 'before': true, 'after': true }],
            '@stylistic/block-spacing': ['error', 'always'],
            '@stylistic/brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
            'eqeqeq': ['error', 'always'],
            'eol-last': ['error', 'always']
        }
    },
    eslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    tseslint.configs.recommendedTypeChecked
])
