import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import Header from "../Header";
import Test from "./Test";
import { BrowserRouter } from "react-router-dom";
import { ThemeDarkLightProvider } from "../../utils/context";

describe("Header test", () => {
  test("should render correctly", async () => {
    render(
      <BrowserRouter>
        <ThemeDarkLightProvider>
          <Header />
        </ThemeDarkLightProvider>
      </BrowserRouter>
    );
    const nightModeButton = screen.getByRole('button')
  });
});
