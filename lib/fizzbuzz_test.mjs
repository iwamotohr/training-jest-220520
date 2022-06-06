// import { strict as assert } from "assert";
const assert = require("assert")
const fizzbuzz = require("./fizzbuzz.mjs");

describe("fizzbuzz関数は数を文字列に変換する", () => {
  describe("3の倍数のときは数の代わりにFizzに変換する", () => {
    test("3を渡すと文字列Fizzを返す", () => {
      assert.equal(fizzbuzz(3), "Fizz");
    });
  });
  describe("5の倍数のときは数の代わりにBuzzに変換する", () => {
    test("5を渡すと文字列Buzzを返す", () => {
      assert.equal(fizzbuzz(5), "Buzz");
    });
  });
  describe("その他の数のときはそのまま文字列に変換する", () => {
    test("1を渡すと文字列1を返す", () => {
      assert.equal(fizzbuzz(1), "1");
    });
  });
  test.each([
    { input: 3, reason: "同値類の中の最小の3の倍数" },
    { input: 99, reason: "同値類の中の最大の3の倍数" }
  ])("$inputを渡すと文字列 Fizz を返す（$reason）", (input, reason) => {
    assert.equal(fizzbuzz(input), "Fizz", reason);
  });
});
