import { cachedCatFacts } from "~/server/services/fetch-facts";
import { generateRandomNumber } from "~/utils";

export default defineEventHandler(async (event) => {
  const { error, data: facts } = await cachedCatFacts();

  if (error) {
    setResponseStatus(event, 500);
    return sendError(event, error);
  }

  setResponseStatus(event, 200);

  return {
    facts: facts?.data,
    currentFact: facts?.data[generateRandomNumber()],
  };
});
