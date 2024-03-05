interface APIResponse {
  data: Array<string>;
}

export const cachedCatFacts = defineCachedFunction(
  async (): Promise<{
    data: null | APIResponse;
    error: null | Error;
  }> => {
    // TODO: if request fails, it should not be cached.
    try {
      const data: APIResponse = await $fetch(
        "https://meowfacts.herokuapp.com/?count=2000000000",
        { method: "get", cache: "default" },
      );

      return { data, error: null };
    } catch (error) {
      return { error: error as Error, data: null };
    }
  },
  {
    maxAge: 60 * 60,
    name: "catFacts",
  },
);
