import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, test } from "vitest";
import Header from "~/components/Header.vue";

describe("Header component", async () => {
  const headerComponent = await mountSuspended(Header);

  test("Render into the DOM", () => {
    expect(headerComponent.exists()).toBe(true);
  });

  test("Has h1 element with valid text", () => {
    const h1El = headerComponent.get("h1");

    expect(h1El).toBeTruthy();
    expect(h1El?.text().trim()).toBe("the defsafe cat facts page");
  });
});
