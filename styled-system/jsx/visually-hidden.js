import { createElement, forwardRef } from 'react'
import { styled } from './factory.js';
import { getVisuallyHiddenStyle } from '../patterns/visually-hidden.js';

export const VisuallyHidden = /* @__PURE__ */ forwardRef(function VisuallyHidden(props, ref) {
  const styleProps = getVisuallyHiddenStyle()
return createElement(styled.div, { ref, ...styleProps, ...props })
})