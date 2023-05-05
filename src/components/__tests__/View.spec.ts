import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import View from "@/components/View.vue";

// it.only --> to run this certain test
// it.skip -->> to skip this certain test
// --coverage
describe("View", () => {
  const viewText = "Hello from inside a view";
  it("render span correctly ", async () => {
    //arrange
    const viewId = "viewId";
    render(View, {
      props: { element: "span", id: viewId },
      slots: { default: viewText },
    });
    const view = await screen.findByText(viewText);
    //assertions
    expect(view.id).toBe(viewId);
    expect(view.innerHTML).toBe(viewText);
    expect(view.nodeName).toBe("SPAN");
  });
  it("Snap shot matches", () => {
    const wrapper = render(View, {
      props: { element: "div" },
      slots: { default: viewText },
      
    });
    expect(wrapper).toMatchSnapshot();
  });
});
