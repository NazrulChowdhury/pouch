import { Button } from 'antd'
import React from 'react'

const Cancel = ({handleEditCancel}) => {
  return (
    <Button onClick={handleEditCancel}>
        Cancel
    </Button>
  )
}

export default Cancel