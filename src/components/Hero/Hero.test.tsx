"use client"
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";
 

describe("Hero component", () => {
  it("should render HeroTitle with the correct text", () => {
    render(<Hero />);
    const title = screen.getByRole('heading', { level: 1, name: /NEWSLETTERS/i });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("NEWSLETTERS");
  });
 
});
