import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, test } from "vitest";
import ImagesGrid from "~/components/ImagesGrid.vue";

describe("ImagesGrid to render", async () => {
  const component = await mountSuspended(ImagesGrid);

  test("into the DOM", () => {
    expect(component.exists()).toBe(true);
  });

  test("three cat images", () => {
    // TODO
    expect(1 + 1).toBe(2);
  });
});
