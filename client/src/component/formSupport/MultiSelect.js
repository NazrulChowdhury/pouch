import React, { Component, useState } from "react"
import { default as ReactSelect } from "react-select"
import { components } from "react-select"
import CustomTag from "./CustomTag"

const MultiSelect = ({selectedTags,setSelectedTags, options}) => { 
    const [optionSelected, setOptionSelected] = useState('') 
    const labeledOptions = options.map(item => {
        return {
            value : item,
            label : item
        }
    })
    const handleChange = (selected) => {   
        setOptionSelected(selected)
        const items = selected.map(item => item.value)
        setSelectedTags(items)
    }
    const Option = (props) => {
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
            allowSelectAll={true}
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