function analyzeArray(arr) {
  if (arr.length === 0) {
    throw new Error("Empty array, nothing to analyze.");
  }

  const resultObject = {};
  resultObject.sum = 0;
  resultObject.min = arr[0];
  resultObject.max = arr[0];
  resultObject.length = arr.length;

  for (let item of arr) {
    resultObject.sum += item;
    if (item > resultObject.max) {
      resultObject.max = item;
    }

    if (item < resultObject.min) {
      resultObject.min = min;
    }
  }

  resultObject.avg = resultObject.sum / resultObject.length;

  return resultObject;
}

module.exports = analyzeArray;