import { validTodo } from "../index"

describe("Utils", () => {
  describe("validTodo", () => {
    it("returns false if is blank", () => {
      expect(validTodo("", [])).toEqual(false);
      expect(validTodo(" ", [])).toEqual(false);
      expect(validTodo("  ", [])).toEqual(false);
    })

    it("returns false if already added", () => {
      expect(validTodo("a", ["a"])).toEqual(false);
      expect(validTodo("b", ["a", "b"])).toEqual(false);
    })

    it("returns true if valid and does not exists", () => {
      expect(validTodo("a", [])).toEqual(true);
      expect(validTodo("b", ["a"])).toEqual(true);
    })
  })
})