///<reference types="cypress"/>

import { login } from "../support/helper";
import { findProduct } from "../support/helper";

it("Order", () => {

  login();
  findProduct();

});
