import { groupNewsLetters } from "@/utils/groupNewsLetters";
import { Newsletter } from "@/types/newsletters";

describe("groupNewsLetters", () => {
  it("should group newsletters by their site", () => {
    const newsletters: Newsletter[] = [
      { id: "1", title: "Newsletter 1", site: "https://example1.com", description: "Description 1", image: "/image1.png" , subscriptions :[]},
      { id: "2", title: "Newsletter 2", site: "https://example1.com", description: "Description 2", image: "/image2.png" ,subscriptions: []},
      { id: "3", title: "Newsletter 3", site: "https://example2.com", description: "Description 3", image: "/image3.png",subscriptions:[] },
    ];

    const grouped = groupNewsLetters(newsletters);

    expect(grouped.size).toBe(2);  
    expect(grouped.get("https://example1.com")).toHaveLength(2); 
    expect(grouped.get("https://example2.com")).toHaveLength(1);  
  });

  it("should group newsletters without site under 'undefined'", () => {
    const newsletters: Newsletter[] = [
      { id: "1", title: "Newsletter 1", site: "https://example1.com", description: "Description 1", image: "/image1.png", subscriptions:[] },
      { id: "2", title: "Newsletter 2", site: "", description: "Description 2", image: "/image2.png", subscriptions:[] },
    ];

    const grouped = groupNewsLetters(newsletters);

    expect(grouped.size).toBe(2); 
    expect(grouped.get("https://example1.com")).toHaveLength(1); 
    expect(grouped.get("")).toHaveLength(1);  
  });

  it("should return an empty map if no newsletters are provided", () => {
    const grouped = groupNewsLetters([]);

    expect(grouped.size).toBe(0); 
  });
});
