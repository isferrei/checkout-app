import { render, screen } from "@testing-library/react";
import { CardLabels } from "./CardLabels";

describe("CardLabels component", () => {
  it("should render card labels with images and alt text", () => {
    const cards = [
      { img: "card1.png", alt: "Card 1" },
      { img: "card2.png", alt: "Card 2" },
      { img: "card3.png", alt: "Card 3" },
    ];

    render(<CardLabels cards={cards} />);

    // Check if card images are rendered with correct alt text
    cards.forEach((card) => {
      const imgElement = screen.getByAltText(card.alt);
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute("src", card.img);
    });

    // Check if Iugu logo is rendered
    const iuguLogoElement = screen.getByAltText("Iugu logo");
    expect(iuguLogoElement).toBeInTheDocument();
    expect(iuguLogoElement).toHaveAttribute("src", "/assets/iugu.png");
  });
});
