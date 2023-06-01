import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomTag from "@components/formComponents/CustomTag";


describe("CustomTag component test suit", () => {
  it("should render add new tag button", () => {
    render(
      <CustomTag
        selectedTags={[]}
        setSelectedTags={() => {}}
        optionSelected={[]}
        setOptionSelected={() => {}}
      />
    );

    const addButton = screen.getByText("add new tag")
    expect(addButton).toBeInTheDocument()
  })

  it("should show input field and add button when add new tag button is clicked", () => {
    render(
      <CustomTag
        selectedTags={[]}
        setSelectedTags={() => {}}
        optionSelected={[]}
        setOptionSelected={() => {}}
      />
    )

    const addButton = screen.getByText("add new tag")
    fireEvent.click(addButton);

    const inputField = screen.getByRole("textbox")
    expect(inputField).toBeInTheDocument()

    const addButtonInInput = screen.getByText("add")
    expect(addButtonInInput).toBeInTheDocument()
  })

  it("should add a new tag when the add button is clicked with a valid tag", () => {
    const setSelectedTagsMock = jest.fn()
    const setOptionSelectedMock = jest.fn()

    render(
      <CustomTag
        selectedTags={[]}
        setSelectedTags={setSelectedTagsMock}
        optionSelected={[]}
        setOptionSelected={setOptionSelectedMock}
      />
    )

    const addButton = screen.getByText("add new tag")
    fireEvent.click(addButton)

    const inputField = screen.getByRole("textbox")
    fireEvent.change(inputField, { target: { value: "New Tag" } })

    const addButtonInInput = screen.getByText("add")
    fireEvent.click(addButtonInInput)

    expect(setSelectedTagsMock).toHaveBeenCalledWith(["New Tag"])
    expect(setOptionSelectedMock).toHaveBeenCalledWith([
      { value: "New Tag", label: "New Tag" },
    ])
  })

  it("should display an error message when adding a tag longer than 50 characters", () => {
    render(
      <CustomTag
        selectedTags={[]}
        setSelectedTags={() => {}}
        optionSelected={[]}
        setOptionSelected={() => {}}
      />
    )

    const addButton = screen.getByText("add new tag")
    fireEvent.click(addButton)

    const inputField = screen.getByRole("textbox")
    fireEvent.change(inputField, {
      target: { value: "this tag is > 20 char" },
    })

    const addButtonInInput = screen.getByText("add")
    fireEvent.click(addButtonInInput)

    const errorText = screen.getByText(/tag is too long!/)
    expect(errorText).toBeInTheDocument()
  })
})
