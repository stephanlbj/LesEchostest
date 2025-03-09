import { checkSubscriptionAccess } from "@/utils/checkSubscription";
import { Newsletter } from "@/types/newsletters";
import {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
} from "@/mocks/user"; 

describe("checkSubscriptionAccess", () => {
  const mockNewsletter = (subscriptions: string[]): Newsletter => ({
    id: "news-1",
    title: "Test Newsletter",
    description: "A sample newsletter",
    image: "/assets/sample.png",
    site: "https://example.com",
    subscriptions,
  });

  test.each([
    [
      "should return true if the newsletter has no required subscriptions",
      mockNewsletter([]),
      USER_WITH_ONE_SUBSCRIPTION,
      true,
    ],
    [
      "should return true if the user has the required subscription",
      mockNewsletter(["RIGHT_1"]),
      USER_WITH_ONE_SUBSCRIPTION,
      true,
    ],
    [
      "should return false if the user does not have the required subscription",
      mockNewsletter(["RIGHT_3"]),
      USER_WITH_ONE_SUBSCRIPTION,
      false,
    ],
    [
      "should return false if the user has no subscriptions but the newsletter requires one",
      mockNewsletter(["RIGHT_1"]),
      USER_WITHOUT_SUBSCRIPTION,
      false,
    ],
    [
      "should return true if the user has multiple required subscriptions",
      mockNewsletter(["RIGHT_1", "RIGHT_2"]),
      USER_WITH_MULTIPLE_SUBSCRIPTION,
      true,
    ],
     
  ])("%s", (_description, newsletter, user, expected) => {
    expect(checkSubscriptionAccess(newsletter, user)).toBe(expected);
  });
});
