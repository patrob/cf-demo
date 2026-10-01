import { test } from "node:test";
import assert from "node:assert/strict";
import { helloFactory } from "../src/index.js";

test("helloFactory returns hello factory", () => {
  assert.equal(helloFactory(), "hello factory");
});
