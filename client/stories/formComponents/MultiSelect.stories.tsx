import MultiSelect from "@components/formComponents/MultiSelect"
import {Meta, StoryObj} from "@storybook/react"
import { action } from '@storybook/addon-actions';

const meta : Meta<typeof MultiSelect> = {
    title : 'components/formComponents/MultiSelect',
    component : MultiSelect,
    args:{
        options:['option 1', 'option 2', 'option 3'],
        setSelectedTags : (data) => action('new tag submitted')(data)
    }
}
export default meta

type story = StoryObj<typeof MultiSelect>

export const withoutSelectedOptions : story = {
    args : {
        selectedTags : [],
    }
}

export const withSelectedOptions : story = {
    args : {
       selectedTags:['option 3'],
    }
}

  
  
  
  
  
  
