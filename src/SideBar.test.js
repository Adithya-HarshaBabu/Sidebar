import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import SideBar from "./SideBar";
import data from "./data";

describe("SideBar unit tests", () => {
  let page;
  const expectedMenuItems = ["Installation", "Main Concept", "Testing"];
  const expectedSubMenuItems = [
    "Getting started",
    "Adding to new website",
    "JSX",
    "Rendering",
  ];

  beforeEach(() => {
    page = render(<SideBar data={data} />);
  });

  afterAll(() => {
    cleanup();
  });

  it("Renders without errors and matches snapshot", () => {
    expect(page).toBeTruthy();
    expect(page).toMatchSnapshot();
  });

  it("Renders menu correctly", () => {
    const { getByText } = page;
    expectedMenuItems.forEach((menu) => {
      expect(getByText(menu)).toBeInTheDocument();
    });
  });

  it("Does not render sub menu on initial load", () => {
    const { queryByText } = page;
    expectedSubMenuItems.forEach((subMenu) => {
      expect(queryByText(subMenu)).not.toBeInTheDocument();
    });
  });

  it("Expand item as expected", () => {
    const { queryByText, getByTestId } = page;
    fireEvent.click(getByTestId("icon-Installation"));
    expect(queryByText("Getting started")).toBeInTheDocument();
    expect(queryByText("Adding to new website")).toBeInTheDocument();
  });

  it("Closes menu when clicked on expanded icon as expected", () => {
    const { queryByText, getByTestId } = page;
    fireEvent.click(getByTestId("icon-Installation"));
    expect(queryByText("Getting started")).toBeInTheDocument();
    expect(queryByText("Adding to new website")).toBeInTheDocument();
    fireEvent.click(getByTestId("icon-Installation"));
    expect(queryByText("Getting started")).not.toBeInTheDocument();
    expect(queryByText("Adding to new website")).not.toBeInTheDocument();
  });
});
