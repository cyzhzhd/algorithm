#include <iostream>
#include <stdio.h>
#include <vector>
#include <algorithm>
using namespace std;

int upperBound(vector<int> &arr, int val, int left, int right);
int lowerBound(vector<int> &arr, int val, int left, int right);
int main()
{
  int n(0), m(0);
  cin >> n;
  vector<int> arr1(n, 0);
  for (auto &val : arr1)
  {
    scanf("%d", &val);
  }
  cin >> m;
  vector<int> arr2(m, 0);
  for (auto &val : arr2)
  {
    scanf("%d", &val);
  }
  sort(arr1.begin(), arr1.end());

  for (auto val : arr2)
  {
    int upperIdx = upperBound(arr1, val, 0, arr1.size() - 1);
    int lowerIdx = lowerBound(arr1, val, 0, arr1.size() - 1);

    printf("%d ", upperIdx - lowerIdx + 1);
  }
} 

int upperBound(vector<int> &arr, int val, int left, int right)
{
  while (right - left > 0)
  {
    int mid = (left + right) / 2;
    val >= arr[mid] ? left = mid + 1 : right = mid;
  }
  if (arr[right] == val)
    return right;
  else
    return right - 1;
}

int lowerBound(vector<int> &arr, int val, int left, int right)
{
  while (right - left > 0)
  {
    int mid = (left + right) / 2;
    val > arr[mid] ? left = mid + 1 : right = mid;
  }
  return right;
}