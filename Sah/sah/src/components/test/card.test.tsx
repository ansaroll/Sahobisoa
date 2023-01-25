import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "../Card";
import { ThemeDarkLightProvider } from "../../utils/context";

describe("Card Test:", () => {
  it("should render title & img", () => {
    render(
      <ThemeDarkLightProvider>
        <Card
          title="Harry Potter"
          picture="./assets/profile.png"
          label="Devops Freelance"
          isActive={true}
        />
      </ThemeDarkLightProvider>
    );

    const cardPicture = screen.getByRole("img");
    const cardTitle = screen.getByText("Harry Potter");
    expect(cardPicture).toBeInTheDocument();
    expect(cardTitle).toBeInTheDocument();
  });

  it("should add 🌟 on click Card", () => {
    render(
      <ThemeDarkLightProvider>
        <Card
          title="Harry Potter"
          picture="./assets/profile.png"
          label="Devops Freelance"
          isActive={true}
        />
      </ThemeDarkLightProvider>
    );
    const cardTitle = screen.getByText("Harry Potter");
    const parentNode = cardTitle.closest("div");
    fireEvent.click(parentNode!);
    expect(cardTitle.textContent).toBe("🌟 Harry Potter 🌟");
  });
});
