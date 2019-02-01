function BinarySearch (list, item) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    let mid = (low + high) / 2
    let guess = list[mid]

    if (guess === item) {
      return mid
    }

    if (guess > item) {
      high = mid
    } else {
      low = mid
    }
  }

  return undefined
}

const myList = [1, 3, 5, 7, 9]

console.log(BinarySearch(myList, 3))
