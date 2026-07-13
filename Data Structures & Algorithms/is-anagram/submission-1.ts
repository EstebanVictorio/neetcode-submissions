class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sStr = s.split("").sort().join("");
        const tStr = t.split("").sort().join("");
        return sStr === tStr;
    }
}
