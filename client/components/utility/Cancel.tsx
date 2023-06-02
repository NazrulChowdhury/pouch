import { Button } from 'antd'
import React from 'react'

interface CancelProps {
  handleEditCancel:() => void
}

const Cancel = ({handleEditCancel} : CancelProps) => {
  return (
    <Button onClick={handleEditCancel}>
        Cancel
    </Button>
  )
}

export default Cancel