// https://www.acmicpc.net/problem/2696

#include <iostream>
#include <vector>
#include <queue>
#include <math.h>
using namespace std;

int main()
{
  int t(0);
  cin >> t;
  while (t--)
  {
    int n(0);
    cin >> n;

    int median;
    cin >> median;
    priority_queue<int> maxHeap;
    priority_queue<int, vector<int>, greater<int>> minHeap;
    int maxHeapLength(0), minHeapLength(0);
    vector<int> arr(n - 1, 0);
    for (auto &val : arr)
    {
      cin >> val;
    }
    cout << (n / 2) + 1 << endl;
    cout << median << ' ';
    for (int i = 0; i < n - 1; ++i)
    {

      if (arr[i] > median)
      {
        minHeap.push(arr[i]);
        minHeapLength++;
      }
      else
      {
        maxHeap.push(arr[i]);
        maxHeapLength++;
      }

      if (i % 2 == 1)
      {

        if (minHeapLength != maxHeapLength)
        {
          if (minHeapLength > maxHeapLength)
          {
            maxHeap.push(median);
            median = minHeap.top();
            minHeap.pop();
            maxHeapLength++;
            minHeapLength--;
          }
          else
          {
            minHeap.push(median);
            median = maxHeap.top();
            maxHeap.pop();
            maxHeapLength--;
            minHeapLength++;
          }
        }
        cout << median << ' ';
      }
    }
    cout << endl;
  }
  return 0;
}