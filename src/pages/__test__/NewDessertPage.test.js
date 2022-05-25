import { render, screen, fireEvent } from "@testing-library/react";
import NewDessertPage from "../NewDessertPage";
import { BrowserRouter, useNavigate } from "react-router-dom";
import * as router from "react-router";

describe("NewDessertPage test", () => {
  const MockNewDessertPage = () => {
    return (
      <BrowserRouter>
        <NewDessertPage />
      </BrowserRouter>
    );
  };

  const navigate = jest.fn();
  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  test("go to main page after submitting the form", () => {
    render(<MockNewDessertPage />);
    expect(navigate).toHaveBeenCalledWith("/");
  });
});
