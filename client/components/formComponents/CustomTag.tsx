import { Button } from "antd"
import React, { useState } from "react"
import { CustomLabelType } from "./MultiSelect"

interface CustomTagProps {
  selectedTags : string[]
  setSelectedTags :  React.Dispatch<React.SetStateAction<string[]>>
  optionSelected :  CustomLabelType[] 
  setOptionSelected : React.Dispatch<React.SetStateAction<CustomLabelType[] >>
}

const CustomTag = ({selectedTags, setSelectedTags, optionSelected, setOptionSelected} : CustomTagProps) => {
  const [ShowInput, setShowInput] = useState(false)
  const [showAddTags, setShowAddTags] = useState(true)
  const [newTag, setNewTag] = useState('')
  const [tagError, setTagError] = useState('')

  const addHandler = () => {
    if(newTag){
      if(newTag.length > 20){
        setTagError('tag is too long! maximum 20 characters allowed')
        return
      }
      setSelectedTags([...selectedTags,newTag])
      setOptionSelected([...optionSelected,{value : newTag, label : newTag}])
      setNewTag('')
      setTagError('')
    } 
  }

  return (
    <div>
      { showAddTags &&
      <div>
        <Button
          onClick={() => {
            setShowInput(true)
            setShowAddTags(false)
          }}
        >
          add new tag 
        </Button>
      </div>
      }
      {ShowInput && 
      <div>
        <input 
          type='text' 
          value={newTag}
          onChange={(e)=> setNewTag(e.target.value)}
        />
        <Button
          onClick={() => addHandler()}
        >
          add
        </Button>
      </div>
      }
      {tagError && <p style={{color : 'red'}}>{tagError}</p>}
    </div>
  )
}

export default CustomTag