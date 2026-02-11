import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Avatar from "@/components/Avatar"

describe("Avatar", () => {
  it("renders successfully with a name prop", () => {
    render(<Avatar name="John Doe" />)
    const avatar = screen.getByRole("img", { hidden: true })
    expect(avatar).toBeInTheDocument()
  })

  it("displays first letter for single word names", () => {
    render(<Avatar name="Alice" />)
    expect(screen.getByText("A")).toBeInTheDocument()
  })

  it("displays first 2 uppercase letters for PascalCase names", () => {
    render(<Avatar name="JohnDoe" />)
    expect(screen.getByText("JD")).toBeInTheDocument()
  })

  it("displays first 2 uppercase letters for multi-word names", () => {
    render(<Avatar name="Jane Smith" />)
    expect(screen.getByText("JS")).toBeInTheDocument()
  })
})
