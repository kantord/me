import { createElement, forwardRef } from 'react'
import { styled } from './factory.js';
import { getContainerStyle } from '../patterns/container.js';

export const Container = /* @__PURE__ */ forwardRef(function Container(props, ref) {
  const styleProps = getContainerStyle()
return createElement(styled.div, { ref, ...styleProps, ...props })
})