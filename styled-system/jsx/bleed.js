import { createElement, forwardRef } from 'react'
import { styled } from './factory.js';
import { getBleedStyle } from '../patterns/bleed.js';

export const Bleed = /* @__PURE__ */ forwardRef(function Bleed(props, ref) {
  const { inline, block, ...restProps } = props
const styleProps = getBleedStyle({inline, block})
return createElement(styled.div, { ref, ...styleProps, ...restProps })
})