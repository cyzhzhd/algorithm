#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
  int n(0);
  cin >> n;
  vector<long long> arr(n, 0);
  for (auto &i : arr)
  {
    cin >> i;
  }
  vector<long long> front;
  vector<long long> back;
  if (n % 2 == 0)
  {
    front = vector<long long>(&arr[0], &arr[n / 2]);
    back = vector<long long>(&arr[n / 2], &arr[n]);
  }
  else
  {
    front = vector<long long>(&arr[0], &arr[n / 2]);
    back = vector<long long>(&arr[(n / 2) + 1], &arr[n]);
  }
  reverse(back.begin(), back.end());
  int size = front.size();
  for (int i = 0; i < size; ++i)
  {
    if (front[i] != back[i])
    {
      cout << "D" << endl;
      return 0;
    }
  }

  bool isIncreasing(true), isDecreasing(true);
  for (int i = 0; i < size - 1; ++i)
  {
    if (front[i] >= front[i + 1])
    {
      isIncreasing = false;
    }
    if (front[i] <= front[i + 1])
    {
      isDecreasing = false;
    }
  }

  if (isIncreasing)
  {
    cout << "1" << endl;
  }
  else if (isDecreasing)
  {
    cout << "2" << endl;
  }
  else
  {
    cout << "3" << endl;
  }
  return 0;
}