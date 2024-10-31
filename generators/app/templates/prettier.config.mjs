import tailwindPlugin from 'prettier-plugin-tailwindcss';

const config = {
  bracketSpacing: true,
  semi: false,
  trailingComma: 'all',
  printWidth: 140,
  tabWidth: 2,
  singleQuote: true,
  plugins: [tailwindPlugin],
}

export default config;
