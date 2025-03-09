import { getNewsletters } from "@/lib/api/getNewsLetters"; 
import { NewslettersResponse } from "@/types/newsletters";

jest.mock("@/mocks/newsletters", () => ({
  NEWSLETTER_ITEMS: Array.from({ length: 30 }, (_, i) => ({
    id: `newsletter-${i}`,
    title: `Newsletter ${i + 1}`,
    description: `Description for newsletter ${i + 1}`,
    image: `/assets/sample.png`,
    site: `https://example.com/${i + 1}`,
    subscriptions: [],
  })),
}));

describe("getNewsletters", () => {
  it("should return newsletters with the correct data and pagination", async () => {
    const pageParam = 0;
    const response: NewslettersResponse = await getNewsletters({ pageParam });

    expect(response.data).toHaveLength(10);
    expect(response.data[0].id).toBe("newsletter-0");
    expect(response.data[9].id).toBe("newsletter-9");

    expect(response.currentPage).toBe(pageParam);
    expect(response.nextPage).toBe(10);

    const nextPageResponse: NewslettersResponse = await getNewsletters({ pageParam: 10 });
    expect(nextPageResponse.data).toHaveLength(10);
    expect(nextPageResponse.nextPage).toBe(20);
  });

  it("should handle the last page correctly when there are fewer than 10 items left", async () => {
    const pageParam = 20;
    const response: NewslettersResponse = await getNewsletters({ pageParam });

    expect(response.data).toHaveLength(10);
    expect(response.nextPage).toBe(null);
  });

  it("should return empty list if the pageParam exceeds available data", async () => {
    const pageParam = 30;
    const response: NewslettersResponse = await getNewsletters({ pageParam });

    expect(response.data).toHaveLength(0);
    expect(response.nextPage).toBe(null);
  });
});
