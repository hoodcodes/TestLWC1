import { LightningElement, api } from "lwc";
export default class SaveComponent extends LightningElement {
  @api show;

  clickedButtonLabel;

  handleClick(event) {
    this.clickedButtonLabel = event.target.label;
  }
}
