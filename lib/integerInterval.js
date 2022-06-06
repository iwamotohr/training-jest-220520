class IntegerInterval {
    constructor(lowerEnd, upperEnd) {
        this.lowerEnd = lowerEnd;
        this.upperEnd = upperEnd;
    }

    // getSectionから文字列が返って来ることが想像しにくい
    getSectionString() {
        return `[${this.lowerEnd},${this.upperEnd}]`;
    }

    // true false が返って来ることが想像しにくい ライブラリなどから考える
    isSectionRange(num) {
        if (this.lowerEnd <= num && this.upperEnd >= num) {
            return true;
        }
        return false;
    }
};
module.exports = IntegerInterval;
