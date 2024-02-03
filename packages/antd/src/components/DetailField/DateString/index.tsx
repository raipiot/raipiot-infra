import './index.scss'

import type { CommonTimeFormatter, LocalTimeFormatter } from '@raipiot-infra/utils'
import { DateUtils } from '@raipiot-infra/utils'
import { Skeleton, Tooltip } from 'antd'
import { isNil } from 'lodash-es'
import { memo } from 'react'

export interface DateStringProps {
  /**
   * 日期、时间字符串
   */
  value?: string
  /**
   * 文本颜色
   */
  textColor?: string
  /**
   * 短日期格式
   */
  shortDateFormatter?: CommonTimeFormatter | LocalTimeFormatter
  /**
   * 长日期格式
   */
  longDateFormatter?: CommonTimeFormatter | LocalTimeFormatter
}

export const DateString = memo<DateStringProps>(
  ({
    value,
    textColor,
    shortDateFormatter = 'MM-DD HH:mm',
    longDateFormatter = 'YYYY-MM-DD HH:mm:ss'
  }) => {
    let label
    let fullLabel
    if (!isNil(value)) {
      fullLabel = DateUtils.formatTime(value, longDateFormatter)
      label = DateUtils.isCurrentYear(value)
        ? DateUtils.formatTime(value, shortDateFormatter)
        : fullLabel
    }

    return (
      <Skeleton
        loading={isNil(label)}
        paragraph={{ rows: 1 }}
      >
        <Tooltip
          className={['date-string--tooltip'].join(' ')}
          title={fullLabel}
        >
          <span style={{ color: textColor }}>{label}</span>
        </Tooltip>
      </Skeleton>
    )
  }
)
