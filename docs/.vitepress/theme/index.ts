import DefaultTheme from 'vitepress/theme';
import './custom.scss';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
  },
}