function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const sortedArr = [...nums1, ...nums2].sort((a, b) => a - b);
  if (sortedArr.length === 1) {
    return sortedArr[0];
  }

  if (sortedArr.length % 2 > 0) {
    const median = (sortedArr.length + 1) / 2;
    console.log("Impar e median", median);
    return sortedArr[median - 1];
  }

  const [minArr] = sortedArr.slice((sortedArr.length - 1) / 2);
  const [maxArr] = sortedArr.slice(sortedArr.length / 2);
  const median = (minArr + maxArr) / 2;

  return median > 0 ? median : 0;
}
