import { createElement } from "lwc";
import SaveComponent from "c/saveComponent";

// import { registerLdsTestWireAdapter } from '@salesforce/sfdx-lwc-jest';
// import { registerApexTestWireAdapter } from '@salesforce/sfdx-lwc-jest';

describe("c-save-component", () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    jest.clearAllMocks();
  });

  it("has component name on the header", () => {
    const element = createElement("c-save-component", {
      is: SaveComponent
    });
    document.body.appendChild(element);

    return Promise.resolve().then(() => {
      const componentHeader = element.shadowRoot.querySelector("h1");
      expect(componentHeader.textContent).toBe("saveComponent");
    });
  });
});
