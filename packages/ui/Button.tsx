import * as React from "react"
export const Button = () => {
  return (
    <button className="p-6 bg-slate-500" onClick={() => console.log("clicked")}>
      Boop
    </button>
  )
}
