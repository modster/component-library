import { newSpecPage } from "@stencil/core/testing";
import { MyTitle } from "./my-title";

describe("my-title", () => {
  it("renders", async () => {
    const { root } = await newSpecPage({
      components: [MyTitle],
      html: "<my-title></my-title>",
    });
    expect(root).toEqualHtml(`
      <my-title>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-title>
    `);
  });

  it("renders with values", async () => {
    const { root } = await newSpecPage({
      components: [MyTitle],
      html:
        `<my-title first="Stencil" last="'Don't call me a framework' JS"></my-title>`,
    });
    expect(root).toEqualHtml(`
      <my-title first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-title>
    `);
  });
});
