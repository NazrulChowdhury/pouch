import React from "react";

export const withReactContext = ({Context, initialState}:{ Context: React.Context<any>;initialState: object}
    ) => (
    Story: React.ComponentType
  ) => {
    // Return the decorated component
    return (
      <Context.Provider value={initialState}>
        <Story />
      </Context.Provider>
    )
}