const assert = require("assert");
const IntegerInterval = require("./integerInterval");

describe("整数閉区間を示すクラス integerInterval", () => {
  describe("下端点 3, 上端点 7 の整数閉区間を示す", () => {
    let integerInterval;
    beforeEach(() => {
      integerInterval = new IntegerInterval(3, 7);
    })
    describe("整数閉区間は下端点と上端点を返す", () => {
      test("整数閉区間の下端点である 3 を返す", () => {
        assert(integerInterval.lowerEnd === 3);
      });
      test("整数閉区間の上端点である 7 を返す", () => {
        assert(integerInterval.upperEnd === 7);
      });
    })
    describe("整数閉区間の文字列表記を返す", () => {
      test('整数閉区間の文字列表記である"[3,7]"', () => {
        assert(integerInterval.getSectionString() === "[3,7]");
      })
    })
    describe("指定した整数を含むかどうかを判定する", () => {
      describe("指定した整数を含む場合 true を返す", () => {
        test("整数区間の最小の値である 3 を渡した場合指定した整数区間に含まれるので true", () => {
          assert(integerInterval.isSectionRange(3) === true)
        })
        test("整数区間の最大の値である 7 を渡した場合指定した整数区間に含まれるので true ", () => {
          assert(integerInterval.isSectionRange(7) === true)
        })
      })
      describe("指定した整数を含まない場合 false を返す", () => {
        test("整数区間外の最小の値である 2 を渡した場合指定した整数区間に含まれないので false", () => {
          assert(integerInterval.isSectionRange(2) === false)
        })
        test("整数区間外の最小の値である 8 を渡した場合指定した整数区間に含まれないので false", () => {
          assert(integerInterval.isSectionRange(8) === false)
        })
      })
    })
  })
});
