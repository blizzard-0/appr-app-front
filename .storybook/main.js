module.exports = {
  stories: [
    '../components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../modules/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next-router',
    '@storybook/addon-postcss',
  ],
};
