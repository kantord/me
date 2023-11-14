import { createElement, forwardRef } from 'react'
import { styled } from './factory.js';
import { getWrapStyle } from '../patterns/wrap.js';

export const Wrap = /* @__PURE__ */ forwardRef(function Wrap(props, ref) {
  const { gap, rowGap, columnGap, align, justify, ...restProps } = props
const styleProps = getWrapStyle({gap, rowGap, columnGap, align, justify})
return createElement(styled.div, { ref, ...styleProps, ...restProps })
})