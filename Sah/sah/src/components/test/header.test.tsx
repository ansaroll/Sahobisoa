import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
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
    const nightModeButton = screen.getByTestId('night-mode-btn')
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
  });
});
