class Solution {
    findBounds(arr, k) {
        const lowerBound = this.findLowerBound(arr, k);

        const upperBound = this.findUpperBound(arr, k);

        return [lowerBound, upperBound];
    }

    findLowerBound(arr, k) {
        let left = 0, right = arr.length - 1;
        let result = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] >= k) {
                result = mid;
                right = mid - 1; 
            } else {
                left = mid + 1;
            }
        }

        return result;
    }

    findUpperBound(arr, k) {
        let left = 0, right = arr.length - 1;
        let result = arr.length;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid]> k) {
                result = mid;
                right = mid - 1; 
            } else {
                left = mid + 1;
            }
        }

        return result;
    }
}

const solution = new Solution();
const arr = [1, 2, 4, 4, 4, 6, 8, 10];
const k = 4;
console.log(solution.findBounds(arr, k));
