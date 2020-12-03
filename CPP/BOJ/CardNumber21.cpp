#include <iostream>
#include <vector>
#include <algorithm>
#include <math.h>
using namespace std;

vector<int> binarySearch(vector<int> arr, int val, int left, int right);
int getBoundaries(vector<int> boundIdx, vector<int> arr, int val, int dval, bool isUpper);
int main()
{
  int n(0), m(0);
  cin >> n;
  vector<int> arr1(n, 0);
  for (auto &val : arr1)
  {
    cin >> val;
  }
  cin >> m;
  vector<int> arr2(m, 0);
  for (auto &val : arr2)
  {
    cin >> val;
  }
  sort(arr1.begin(), arr1.end());

  vector<int> result;
  for (auto val : arr2)
  {
    vector<int> indices = binarySearch(arr1, val, 0, arr1.size() - 1);
    if (indices[1] == -1)
    {
      result.push_back(0);
      continue;
    }

    int upperBound = getBoundaries(indices, arr1, val, 1, 1);
    int lowerBound = getBoundaries(indices, arr1, val, -1, 0);
    result.push_back(upperBound - lowerBound + 1);
  }

  cout << endl;
  for (auto val : result)
  {
    printf("%d ", val);
  }
}

vector<int> binarySearch(vector<int> arr, int val, int left, int right)
{
  int mid = floor((left + right) / 2);
  if (val == arr[mid])
  {
    return {left, mid, right};
  }
  if (left == mid)
  {
    return {-1, -1, -1};
  }

  if (val > arr[mid])
  {
    return binarySearch(arr, val, mid, right);
  }
  else
  {
    return binarySearch(arr, val, left, mid);
  }
}

int getBoundaries(vector<int> boundIdx, vector<int> arr, int val, int dval, bool isUpper)
{
  while (boundIdx[1] + dval >= 0 && arr[boundIdx[1]] == arr[boundIdx[1] + dval])
  {
    if (isUpper)
    {
      boundIdx = binarySearch(arr, val, boundIdx[1] + 1, boundIdx[2]);
    }
    else
    {
      boundIdx = binarySearch(arr, val, boundIdx[0], boundIdx[1]);
    }
  }
  return boundIdx[1];
}