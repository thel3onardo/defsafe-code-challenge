import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, test } from "vitest";
import ImagesGrid from "~/components/ImagesGrid.vue";

describe("ImagesGrid to render", async () => {
  const component = await mountSuspended(ImagesGrid);

  test("into the DOM", () => {
    expect(component.exists()).toBe(true);
  });

  test("three cat images with valid src and alt values", () => {
    const firstImage = component.get("[data-testid='images-cat-1']");
    const secondImage = component.get("[data-testid='images-cat-2']");
    const thirdImage = component.get("[data-testid='images-cat-3']");

    expect(firstImage.isVisible()).toBe(true);
    expect(secondImage.isVisible()).toBe(true);
    expect(thirdImage.isVisible()).toBe(true);

    expect(firstImage.attributes().src).toMatch("cat1.jpeg");
    expect(secondImage.attributes().src).toMatch("cat2.jpeg");
    expect(thirdImage.attributes().src).toMatch("cat3.jpeg");

    expect(firstImage.attributes().alt).toBe("Just a cat");
    expect(secondImage.attributes().alt).toBe("Another cute cat");
    expect(thirdImage.attributes().alt).toBe("Just another cute cat");
  });
});
