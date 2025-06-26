import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("Home Page Tests", () => {
  it("renders home page", () => {
    render(<HomePage />);
    
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });

  it("renders about section", () => {
    render(<HomePage />);
    
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });

  it("renders experience section", () => {
    render(<HomePage />);
    
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it("renders projects section", () => {
    render(<HomePage />);
    
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  });

  it("renders footer section", () => {
    render(<HomePage />);
    
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

});
