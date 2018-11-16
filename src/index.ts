import * as styledComponents from 'styled-components';
import { Theme } from '@material-ui/core';
import { ThemedStyledComponentsModule } from 'styled-components';

const styled: ThemedStyledComponentsModule<Theme> = {
  default: styledComponents.default,
  css: styledComponents.css,
  createGlobalStyle: styledComponents.createGlobalStyle,
  keyframes: styledComponents.keyframes,
  withTheme: styledComponents.withTheme,
  ThemeConsumer: styledComponents.ThemeConsumer,
  ThemeContext: styledComponents.ThemeContext,
  ThemeProvider: styledComponents.ThemeProvider,
};

const {
  css,
  createGlobalStyle,
  keyframes,
  withTheme,
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
} = styled;

export * from './StyleProvider';
export { css, createGlobalStyle, keyframes, withTheme, ThemeConsumer, ThemeContext, ThemeProvider };
export default styled;
