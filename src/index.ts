import * as React from 'react';
import * as styledComponents from 'styled-components';
import { Theme } from '@material-ui/core';
import {
  ThemedStyledComponentsModule,
  ThemedStyledProps,
  ThemedStyledFunction,
} from 'styled-components';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
} = styledComponents as ThemedStyledComponentsModule<Theme>;

const styledWithProps = <
  SProps,
  TProps extends object = Theme,
  U extends HTMLElement = HTMLElement
>(
  styledFunction: ThemedStyledFunction<any, any>,
): ThemedStyledFunction<SProps & React.HTMLProps<U>, TProps> => {
  return styledFunction;
};

type StyledProps<P> = ThemedStyledProps<P, Theme>;

export { css, createGlobalStyle, keyframes, StyledProps, styledWithProps, styled };
export default styled;

export * from './StyleProvider';
