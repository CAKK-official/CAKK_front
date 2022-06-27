export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Intro',
        'Components',
        'Page',
        [
          'Header',
          'Footer',
          'Layout',
          'Banner Container',
          'Item Grid Container',
        ],
      ],
    },
  },
}
