/*
import React, { Component, useEffect, useState } from "react"
import { default as ReactSelect } from "react-select"
import { components } from "react-select"
import CustomTag from "./CustomTag"

interface MultiSelectPropsType {
  selectedTags : string[]
  setSelectedTags : React.Dispatch<React.SetStateAction<string[]>>
  options : string[]
}
interface LabelType {
    value: string
    label: string
}
interface OptionProps {
  label: string
  isSelected: boolean
}

const MultiSelect = ({selectedTags, setSelectedTags, options } : MultiSelectPropsType) => { 

 const [optionSelected, setOptionSelected] = useState<LabelType[] | undefined>(undefined)
  const labeledOptions = options.map(item => {
    return {
      value : item,
      label : item
    }
  })

  const handleChange = (selected : LabelType[]) => {   
    setOptionSelected(selected )
    const items = selected.map(item => item.value)
    setSelectedTags(items)
  }

  const Option = (props : OptionProps) => {
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
      const preSelectedTags : LabelType[] = selectedTags.map((tag) => {
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

*/

import React, { useEffect, useState } from "react"
import { default as ReactSelect, ActionMeta, MultiValue } from "react-select"
import { components } from "react-select"
import CustomTag from "./CustomTag"

interface MultiSelectPropsType {
  selectedTags : string[]
  setSelectedTags : React.Dispatch<React.SetStateAction<string[]>>
  options : string[]
}
export interface LabelType {
    value: string
    label: string
}

const MultiSelect = ({selectedTags, setSelectedTags, options } : MultiSelectPropsType) => { 

 const [optionSelected, setOptionSelected] = useState<LabelType[]>([])
  const labeledOptions = options.map(item => {
    return {
      value : item,
      label : item
    }
  })

  const handleChange = (selected: MultiValue<LabelType>, actionMeta: ActionMeta<LabelType>) => {   
    setOptionSelected(selected as LabelType[])
    const items = (selected as LabelType[]).map(item => item.value)
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
      const preSelectedTags : LabelType[] = selectedTags.map((tag) => {
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