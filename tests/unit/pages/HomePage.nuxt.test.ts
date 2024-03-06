import { mountSuspended, registerEndpoint } from "@nuxt/test-utils/runtime";
import { afterEach, describe, expect, test, vi } from "vitest";
import app from "~/app.vue";

const mockResponseValues = ["Cats are cool", "I love cats", "Cats are special"];
registerEndpoint("/api/cats/fact", () => ({
  fact: mockResponseValues[
    Math.round(Math.random() * mockResponseValues.length - 1)
  ],
}));

describe("If the GET request to server API route is successful, then:", async () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  const homePage = await mountSuspended(app, { route: "/" });

  test("Render title with correct text", () => {
    const title = homePage.get("[data-testid='content-success-title']");

    expect(title).toBeTruthy();
    expect(title?.text()).toBe("cat fact:");
  });

  test("Render paragraph containing a cat fact", () => {
    const successText = homePage.get("[data-testid='content-success-text']");

    expect(successText.isVisible()).toBe(true);
  });

  test("Does not render error title", () => {
    const title = homePage.element.querySelector(
      "[data-testid='content-fail-title']",
    );

    expect(title).not.toBeTruthy();
  });

  test("Does not render error paragraph", () => {
    const errorText = homePage.element.querySelector(
      "[data-testid='content-fail-text']",
    );

    expect(errorText).not.toBeTruthy();
  });

  test("Renders button with valid label", () => {
    const btn = homePage.get("[data-testid='content-refetch-button']");

    expect(btn).toBeTruthy();
    expect(btn.text()).toBe("get a random cat fact");
  });

  test("Makes a request when the button is clicked", async () => {
    const _fetch = vi.fn();
    vi.stubGlobal("$fetch", _fetch);

    const btn = homePage.get("[data-testid='content-refetch-button']");

    await btn.trigger("click");

    expect(_fetch).toBeCalledTimes(1);
  });
});
