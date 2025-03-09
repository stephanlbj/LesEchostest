import { QueryClient } from "@tanstack/react-query";
import prefetchNewsLetters from "@/utils/prefetchNewsLetters";
import { getNewsletters } from "@/lib/api/getNewsLetters";
import { NewslettersResponse } from "@/types/newsletters";

jest.mock("@/lib/api/getNewsLetters");

describe("prefetchNewsLetters", () => {
  let queryClient: QueryClient;
  let prefetchSpy: jest.SpyInstance;
  let setQueryDataSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    queryClient = new QueryClient();
    prefetchSpy = jest.spyOn(queryClient, "prefetchInfiniteQuery");
    setQueryDataSpy = jest.spyOn(queryClient, "setQueryData");
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    jest.clearAllMocks();  
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it("should prefetch newsletters successfully", async () => {
    const mockResponse: NewslettersResponse = { data: [], currentPage: 1, nextPage: 2 };
    (getNewsletters as jest.Mock).mockResolvedValue(mockResponse);

    await prefetchNewsLetters(queryClient);

    expect(prefetchSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        queryKey: ["newsletters"],
        queryFn: expect.any(Function),
        initialPageParam: 0,
        getNextPageParam: expect.any(Function),
      })
    );
  });

  it("should call getNextPageParam correctly", async () => {
    const mockResponse: NewslettersResponse = { data: [], currentPage: 1, nextPage: 2 };
    (getNewsletters as jest.Mock).mockResolvedValue(mockResponse);

    await prefetchNewsLetters(queryClient);

    const getNextPageParamFn = prefetchSpy.mock.calls[0][0].getNextPageParam;
    expect(getNextPageParamFn(mockResponse)).toBe(2);
  });

  it("should call queryFn with the correct pageParam", async () => {
    const mockResponse: NewslettersResponse = { data: [], currentPage: 1, nextPage: null };
    (getNewsletters as jest.Mock).mockResolvedValue(mockResponse);

    await prefetchNewsLetters(queryClient);

    const queryFn = prefetchSpy.mock.calls[0][0].queryFn;
    await queryFn({ pageParam: 1 });

    expect(getNewsletters).toHaveBeenCalledWith({ pageParam: 1 });
  });

  it("should handle errors and set empty data when fetching fails", async () => {
    prefetchSpy.mockImplementation(() => Promise.reject(new Error("API Error"))); 
     
    await prefetchNewsLetters(queryClient);

    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error prefetching newLetters:",
      expect.any(Error)
    );

    expect(setQueryDataSpy).toHaveBeenCalledWith(["newsletters"], expect.any(Function));
  });
});
