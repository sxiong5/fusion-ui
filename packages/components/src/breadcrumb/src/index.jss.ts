import { computed } from 'vue'
import { css, cx, useColor, useRgbColor } from '@fusion-ui-vue/theme'
import type { ComponentStylingHook } from '../../../types'
import type { BreadcrumbProps } from './breadcrumb'

const useCss: ComponentStylingHook<BreadcrumbProps> = props =>
  computed(() => {
    const [$color] = useColor(props, 'color')
    const [$colorRgb] = useRgbColor(props, 'color')
    const breadcrumbStyle = css`
      --fn-breadcrumb-color: ${$color.value};
      --fn-breadcrumb-color-rgb: ${$colorRgb.value};
    `

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(breadcrumbStyle, styleFromCs)
  })

export default useCss
