import React, { useEffect, useState } from "react"
import { default as ReactSelect, ActionMeta, MultiValue } from "react-select"
import { components } from "react-select"
import CustomTag from "./CustomTag"

interface MultiSelectPropsType {
  selectedTags : string[]
  setSelectedTags : React.Dispatch<React.SetStateAction<string[]>>
  options : string[]
}
export interface CustomLabelType {
    value: string
    label: string
}

const MultiSelect = ({selectedTags, setSelectedTags, options } : MultiSelectPropsType) => { 

 const [optionSelected, setOptionSelected] = useState<CustomLabelType[]>([])
  const labeledOptions = options.map(item => {
    return {
      value : item,
      label : item
    }
  })

  const handleChange = (selected: MultiValue<CustomLabelType>, actionMeta: ActionMeta<CustomLabelType>) => {   
    setOptionSelected(selected as CustomLabelType[])
    const items = (selected as CustomLabelType[]).map(item => item.value)
    setSelectedTags(items)
  }

  const Option = (props: any) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    )
  } 

  useEffect(() => {
    if(selectedTags){
      const preSelectedTags : CustomLabelType[] = selectedTags.map((tag) => {
          return {
            value : tag,
            label : tag
        }
      })
      setOptionSelected(preSelectedTags)
    }
  },[selectedTags])

  return(
    <div>
      <span
        // class="d-inline-block"
        data-toggle="popover"
        data-trigger="focus"
        data-content="Please selecet account(s)"
      >
        <ReactSelect
          options={labeledOptions}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option
          }}
          onChange={handleChange}
         // allowSelectAll={true}
          value={optionSelected}
        />
      </span>
      <CustomTag 
        selectedTags = {selectedTags}
        setSelectedTags = {setSelectedTags} 
        optionSelected = {optionSelected}
        setOptionSelected = {setOptionSelected}
      />
    </div>
  )
}

export default MultiSelect