import React from 'react'
import { screen, render } from '@testing-library/react'
import MultiSelect from '@components/formComponents/MultiSelect'

describe('MultiSelect component test suit', () => {
  it('Should render MultiSelect component without errors', () => {
    render(
      <MultiSelect 
        selectedTags ={[]}
        setSelectedTags ={() => {}}
        options ={[]}
      />
    )
  })
  it('Should render MultiSelect component with selected tags', () => {
    const selectedTags = ['tag1', 'tag2', 'tag3']
    render(
      <MultiSelect
        selectedTags={selectedTags}
        setSelectedTags={() => {}}
        options={[]}
      />
    )
    selectedTags.map(tag =>{
      const tagElement = screen.getByText(tag)
      expect(tagElement).toBeInTheDocument()
    })
  })
})