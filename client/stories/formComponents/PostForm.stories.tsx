import PostForm from "@components/formComponents/PostForm"
import { GlobalContext } from "@contexts/globalContext"
import {withReactContext} from '../../.storybook/decorators/contextDecorator'
import { action } from '@storybook/addon-actions';
import{IPostForm} from '@types'
import {Meta, StoryObj} from "@storybook/react"

const meta: Meta<typeof PostForm> = {
  title : 'components/formComponents/PostForm',
  component : PostForm,
  decorators: [
    withReactContext({
        Context : GlobalContext,
        initialState : {
          navs : ['item1', 'item2']
        }
    })
  ]
}
export default meta

type Story = StoryObj<typeof PostForm>;
export const NewForm : Story ={
  args: {
    submitForm : (formData: IPostForm['data']) => action('Form Submitted')(formData)
  },
}

export const EditForm : Story = {
  args: {
    submitForm : (formData) => action('Form Submitted')(formData),
    data : {
      _id:'someDocumentId', 
      title:'some Title',
      description:'some description here',
      tags :['firstTag', 'secondTag'],
      userId:'someRandomUserId'
    }
  }
}

