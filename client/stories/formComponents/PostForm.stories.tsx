import PostForm from "@components/formComponents/PostForm"
import { GlobalContext } from "@contexts/globalContext"
import {withReactContext} from '../../.storybook/decorators/contextDecorator'
import { action } from '@storybook/addon-actions';
import{IPostFormProps} from '@types'
import {Meta, StoryObj} from "@storybook/react"


const meta: Meta<typeof PostForm> = { 
  title : 'components/formComponents/PostForm',
  component : PostForm,
  tags: ['autodocs'],
  decorators: [
    withReactContext({
        Context : GlobalContext,
        initialState : {
          navs : ['item1', 'item2']
        }
    })
  ],
  args: {
    submitForm : (formData: IPostFormProps['data']) => action('Form Submitted')(formData),  
  }
}
export default meta

type Story = StoryObj<typeof PostForm>;

/** this is a new form which will be used to submit new post */ 
export const NewForm : Story ={
  args: {
    data : undefined 
  }
}

/** pre-populated form for editing an existing post. */
export const EditForm : Story = {
  args: {
    data : {
      _id:'someDocumentId', 
      title:'some Title',
      description:'some description here',
      tags :['firstTag', 'secondTag'],
      userId:'someRandomUserId'
    },
  }
}

