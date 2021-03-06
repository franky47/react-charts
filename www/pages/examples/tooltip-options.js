// @source sourceCode
import React from 'react'

//

import useChartConfig from 'hooks/useChartConfig'
import Box from 'components/Box'
import SyntaxHighlighter from 'components/SyntaxHighlighter'
import { Chart } from 'react-charts'

let sourceCode

export default () => {
  const {
    data,
    tooltipAlign,
    tooltipAnchor,
    randomizeData,
    Options
  } = useChartConfig({
    series: 10,
    show: ['tooltipAlign', 'tooltipAnchor']
  })

  const axes = React.useMemo(
    () => [
      { primary: true, position: 'bottom', type: 'time' },
      { position: 'left', type: 'linear' }
    ],
    []
  )

  const tooltip = React.useMemo(
    () => ({
      align: tooltipAlign,
      anchor: tooltipAnchor
    }),
    [tooltipAlign, tooltipAnchor]
  )

  return (
    <>
      {Options}
      <br />
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <Box>
        <Chart
          data={data}
          axes={axes}
          primaryCursor
          secondaryCursor
          tooltip={tooltip}
        />
      </Box>
      <br />
      <SyntaxHighlighter code={sourceCode} />
    </>
  )
}
// @source sourceCode
