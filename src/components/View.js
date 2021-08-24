// @flow
// @jsx glam
import React from 'react'
import glam from 'glam'

import { Div, Img } from '../primitives'
import { type PropsWithStyles } from '../types'
import { className } from '../utils'
import { getSource } from './component-helpers'
import componentBaseClassNames from './componentBaseClassNames'

type Props = PropsWithStyles & {
  data: Object,
  isFullscreen: boolean,
  isModal: boolean,
}

export const viewCSS = () => ({
  lineHeight: 0,
  position: 'relative',
  textAlign: 'center',
})

const viewBaseClassName = componentBaseClassNames.View

const View = (props: Props) => {
  const { data, formatters, getStyles, index, isFullscreen, isModal } = props
  const innerProps = {
    // alt: formatters.getAltText({ data, index }),
    src: getSource({ data, isFullscreen }),
  }

  console.log("INSIDE VIEW, data: ", data)
  console.log("INSIDE VIEW, src: ", getSource({ data, isFullscreen }))
  console.log("INSIDE VIEW, innerProps: ", innerProps)

  return (
    <Div css={getStyles(viewBaseClassName, props)} className={className(viewBaseClassName, { isFullscreen, isModal })}>
      <Img
        {...innerProps}
        className={className('view-image', { isFullscreen, isModal })}
        css={{
          height: 'auto',
          maxHeight: '100vh',
          maxWidth: '100%',
          userSelect: 'none',
        }}
      />
    </Div>
  )
}

export default View
