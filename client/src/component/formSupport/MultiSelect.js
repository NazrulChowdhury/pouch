import React, { Component, useState } from "react"
import { colourOptions } from "./data.js"
import { default as ReactSelect } from "react-select"
import { components } from "react-select"

const MultiSelect = ({setState, options, reactHookFormRegister}) => { 
    const [optionSelected, setOptionSelected] = useState('') 
    const labeledOptions = options.map(item => {
        return {
            value : item,
            label : item
        }
    })
    const   handleChange = (selected) => {   
        setOptionSelected(selected)
        const items = selected.map(item => item.value)
        setState(items)
    }
    const Option = (props) => {
        return (
          <div>
            <components.Option {...props}>
              <input
                type="checkbox"
                checked={props.isSelected}
                onChange={() => null}
                {...reactHookFormRegister("postTags")}
              />{" "}
              <label>{props.label}</label>
            </components.Option>
          </div>
        )
    } 

    return(
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
    )
}

export default MultiSelect