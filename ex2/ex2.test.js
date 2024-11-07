const {
  removeOddNumbers,
  removeEvenNumbers,
  flattenArraysOnce,
  flattenArraysTotally,
  squareNumbers,
  squareEvenNumbers,
} = require("./ex2.js");

describe("ex2", () => {
  describe("removeOddNumbers", () => {
    test.each([
      [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [2, 4, 6, 8],
      ],
      [
        [1, 2, 3, 4, 5],
        [2, 4],
      ],
      [[1, 3, 5], []],
      [
        [2, 4, 6],
        [2, 4, 6],
      ],
      [[], []],
      [[0], [0]],
      [
        [-4, -3, -2, -1, 0, 1, 2, 3, 4],
        [-4, -2, 0, 2, 4],
      ],
    ])("should remove odd numbers", (input, expected) => {
      expect(removeOddNumbers(input)).toEqual(expected);
    });
  });

  describe("removeEvenNumbers", () => {
    test.each([
      [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 3, 5, 7, 9],
      ],
      [
        [1, 2, 3, 4, 5],
        [1, 3, 5],
      ],
      [
        [1, 3, 5],
        [1, 3, 5],
      ],
      [[2, 4, 6], []],
      [[], []],
      [[0], []],
      [
        [-4, -3, -2, -1, 0, 1, 2, 3, 4],
        [-3, -1, 1, 3],
      ],
    ])("should remove odd numbers", (input, expected) => {
      expect(removeEvenNumbers(input)).toEqual(expected);
    });
  });

  describe("flattenArraysOnce", () => {
    it("should flatten an array", () => {
      expect(flattenArraysOnce([1, 2, 3, [4, 5, 6], [7, 8, 9]])).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9,
      ]);
    });

    it("should only flatten one level of an array", () => {
      expect(flattenArraysOnce([1, 2, 3, [[4, 5], 6], [[7, 8, 9]]])).toEqual([
        1,
        2,
        3,
        [4, 5],
        6,
        [7, 8, 9],
      ]);
    });
    it("should not error on empty array", () => {
      expect(flattenArraysOnce([])).toEqual([]);
    });
    it("should not error on empty 2d array", () => {
      expect(flattenArraysOnce([[]])).toEqual([]);
    });
  });
  describe("flattenArraysTotally", () => {
    it("should flatten an array", () => {
      expect(flattenArraysTotally([1, 2, 3, [4, 5, 6], [7, 8, 9]])).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9,
      ]);
    });

    it("should flatten all levels of an array", () => {
      expect(flattenArraysTotally([1, 2, 3, [[4, 5], 6], [[7, 8, 9]]])).toEqual(
        [1, 2, 3, 4, 5, 6, 7, 8, 9]
      );
    });
    it("should not error on empty array", () => {
      expect(flattenArraysTotally([])).toEqual([]);
    });
    it("should not error on empty 2d array", () => {
      expect(flattenArraysTotally([[]])).toEqual([]);
    });
  });

  describe("squareNumbers", () => {
    test.each([
      [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 4, 9, 16, 25, 36, 49, 64, 81],
      ],
      [
        [1, 2, 3, 4, 5],
        [1, 4, 9, 16, 25],
      ],
      [
        [1, 3, 5],
        [1, 9, 25],
      ],
      [
        [2, 4, 6],
        [4, 16, 36],
      ],
      [[], []],
      [[0], [0]],
      [
        [-4, -3, -2, -1, 0, 1, 2, 3, 4],
        [16, 9, 4, 1, 0, 1, 4, 9, 16],
      ],
    ])("should square numbers", (input, expected) => {
      expect(squareNumbers(input)).toEqual(expected);
    });
  });

  describe("squareEvenNumbers", () => {
    test.each([
      [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 16, 36, 64],
      ],
      [
        [1, 2, 3, 4, 5],
        [4, 16],
      ],
      [[1, 3, 5], []],
      [
        [2, 4, 6],
        [4, 16, 36],
      ],
      [[], []],
      [[0], [0]],
      [
        [-4, -3, -2, -1, 0, 1, 2, 3, 4],
        [16, 4, 0, 4, 16],
      ],
    ])(
      "should remove odd numbers and square even numbers",
      (input, expected) => {
        expect(squareEvenNumbers(input)).toEqual(expected);
      }
    );
  });
});
