export default defineEventHandler(() => {
  // try {
  //   const data = await $fetch(
  //     "https://meqwdqowfacts.herokuapp.com/?count=2000000000",
  //     { method: "get", cache: "no-cache" },
  //   );

  //   setResponseStatus(event, 200);

  //   return {
  //     facts: data,
  //   };
  // } catch (err) {
  //   setResponseStatus(event, 500);

  //   return {
  //     error: err,
  //   };
  // }

  return {
    hello: "world",
  };
});
