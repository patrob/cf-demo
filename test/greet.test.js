import { test } from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/index.js";

test("greet returns hello world by default", () => {
  assert.equal(greet(), "hello world");
});

test("greet includes the given name", () => {
  assert.equal(greet("patrob"), "hello patrob");
});
