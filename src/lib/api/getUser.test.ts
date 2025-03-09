import { USER_WITH_ONE_SUBSCRIPTION, USER_WITHOUT_SUBSCRIPTION, USER_WITH_MULTIPLE_SUBSCRIPTION, UserWithSubscriptions } from "@/types/user";
import { getUser } from "@/lib/api/getUser";

jest.mock("@/types/user", () => ({
  USER_WITH_ONE_SUBSCRIPTION: { id: "1", firstName: "Jamie", lastName: "Doe", gender: "M", email: "jamie.doe@example.com", subscriptions: ["sub1"] },
  USER_WITHOUT_SUBSCRIPTION: { id: "2", firstName: "Jamie", lastName: "Doe", gender: "M", email: "jamie.doe@example.com", subscriptions: [] },
  USER_WITH_MULTIPLE_SUBSCRIPTION: { id: "3", firstName: "Jamie", lastName: "Doe", gender: "M", email: "jamie.doe@example.com", subscriptions: ["sub1", "sub2"] },
}));

describe("getUser", () => {
  let randomSpy: jest.SpyInstance;

  beforeEach(() => {
    randomSpy = jest.spyOn(global.Math, "random");
  });

  afterEach(() => {
    randomSpy.mockRestore();
  });

  it("should return a user with one subscription", async () => {
    randomSpy.mockReturnValue(0);
    const user: UserWithSubscriptions = await getUser();
    expect(user.id).toBe("1");
    expect(user.subscriptions).toHaveLength(1);
    expect(user.subscriptions).toContain("sub1");
  });

  it("should return a user with no subscriptions", async () => {
    randomSpy.mockReturnValue(0.4);
    const user: UserWithSubscriptions = await getUser();
    expect(user.id).toBe("2");
    expect(user.subscriptions).toHaveLength(0);
  });

  it("should return a user with multiple subscriptions", async () => {
    randomSpy.mockReturnValue(0.8);
    const user: UserWithSubscriptions = await getUser();
    expect(user.id).toBe("3");
    expect(user.subscriptions).toHaveLength(2);
    expect(user.subscriptions).toContain("sub1");
    expect(user.subscriptions).toContain("sub2");
  });

  it("should return a user with random subscriptions", async () => {
    randomSpy.mockReturnValue(0.2);
    const user: UserWithSubscriptions = await getUser();
    expect(user).toMatchObject({
      id: expect.any(String),
      subscriptions: expect.any(Array),
    });
  });
});