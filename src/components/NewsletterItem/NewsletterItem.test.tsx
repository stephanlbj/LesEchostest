import { render, screen } from "@testing-library/react";
import NewsletterItem from "./NewsletterItem";
import { MockImageProps, Newsletter } from "@/types/newsletters";
import { UserWithSubscriptions } from "@/types/user";
import { checkSubscriptionAccess } from "@/utils/checkSubscription";



jest.mock("next/image", () => ({
    __esModule: true,
    default: ({ src, alt, width, height, fetchPriority, loading, style, sizes }: MockImageProps) => {
        return (
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                data-fetchpriority={fetchPriority}
                data-loading={loading}
                style={style}
                sizes={sizes}
            />
        );
    },
}));
jest.mock("@/utils/checkSubscription");

describe("NewsletterItem", () => {
    const mockNewsletter: Newsletter = {
        id: "1",
        site: "site1",
        title: "Test Newsletter",
        description: "This is a test newsletter.",
        image: "/test-image.jpg",
        subscriptions: ["premium"],
    };

    const mockUserWithAccess: UserWithSubscriptions = {
        id: "user1",
        firstName: "Test",
        lastName: "User",
        gender: "M",
        email: "test@example.com",
        subscriptions: ["premium"],
    };

    const mockUserWithoutAccess: UserWithSubscriptions = {
        id: "user2",
        firstName: "Another",
        lastName: "User",
        gender: "F",
        email: "another@example.com",
        subscriptions: [],
    };

    it("renders newsletter information correctly with access", () => {
        (checkSubscriptionAccess as jest.Mock).mockReturnValue(true);

        render(<NewsletterItem newsletter={mockNewsletter} user={mockUserWithAccess} />);

        expect(screen.getByText("Test Newsletter")).toBeInTheDocument();
        expect(screen.getByText("This is a test newsletter.")).toBeInTheDocument();
        expect(screen.getByText("S'inscrire")).toBeInTheDocument();
        expect(screen.getByAltText("Image for Test Newsletter")).toBeInTheDocument();
    });

    it("renders newsletter information correctly without access", () => {
        (checkSubscriptionAccess as jest.Mock).mockReturnValue(false);

        render(<NewsletterItem newsletter={mockNewsletter} user={mockUserWithoutAccess} />);

        expect(screen.getByText("Test Newsletter")).toBeInTheDocument();
        expect(screen.getByText("This is a test newsletter.")).toBeInTheDocument();
        expect(screen.getByText("S'abonner")).toBeInTheDocument();
        expect(screen.getByAltText("Image for Test Newsletter")).toBeInTheDocument();
    });

    it("handles default image when no image is provided", () => {
        const newsletterWithoutImage: Newsletter = {
            ...mockNewsletter,
            image: "",
        };

        render(<NewsletterItem newsletter={newsletterWithoutImage} user={mockUserWithAccess} />);

        expect(screen.getByAltText("Image for Test Newsletter")).toHaveAttribute("src", "/assets/defaultimg.PNG");
    });


});