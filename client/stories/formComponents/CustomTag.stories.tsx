import CustomTag from "@components/formComponents/CustomTag";
import {Meta, StoryObj} from "@storybook/react"
import { action } from '@storybook/addon-actions'

const meta : Meta <typeof CustomTag> = {
    title : 'components/formComponents/CustomTag',
    component : CustomTag,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CustomTag>;

export const customTag : Story = {
   args : {
    selectedTags : [], 
    setSelectedTags : (data) => action('tag Submitted')(data), 
    optionSelected : [], 
    setOptionSelected : (data) => action('tag with option Submitted')(data)
   },
   argTypes:{
        selectedTags : {
            description : 'receives already selected tags'
        },
        setSelectedTags : {
            description : 'adds new tag to the already selected tags'
        },
        optionSelected: {
            description : 'receives already selected tags options params.'
        },
        setOptionSelected : {
            description : 'adds new tags options param'
        }
    }
}