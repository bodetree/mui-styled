import * as React from 'react';
import { create } from 'jss';

import { createGenerateClassName, jssPreset, MuiThemeProvider, Theme } from '@material-ui/core';

import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { JssProvider } from 'react-jss';

const generateClassName = createGenerateClassName();
const jssOpts = jssPreset();
jssOpts.insertionPoint = 'jss-insertion-point';
const jss = create(jssOpts);

export interface StyleProviderProps {
  theme: Theme;
}

export const StyleProvider: React.SFC<StyleProviderProps> = ({ theme, children }) => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </MuiThemeProvider>
  </JssProvider>
);
