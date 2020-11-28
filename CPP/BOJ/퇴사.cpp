// https://www.acmicpc.net/problem/14501
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int main()
{
  int n(0);
  cin >> n;
  vector<vector<int>> shift(n, vector<int>(2, 0));
  for (auto &day : shift)
  {
    for (auto &val : day)
    {
      cin >> val;
    }
  }

  int max(0);
  // day, earning
  queue<vector<int>> queue;
  queue.push({0, 0});
  while (!queue.empty())
  {
    vector<int> val = queue.front();
    queue.pop();

    int nextDay = val[0] + shift[val[0]][0];
    int nextExpectedEarnings = val[1] + shift[val[0]][1];
    if (val[0] + 1 < n)
    {
      queue.push({val[0] + 1, val[1]});
    }
    if (nextDay < n)
    {
      queue.push({nextDay, nextExpectedEarnings});
    }
    else if (nextDay == n)
    {
      max = max > nextExpectedEarnings ? max : nextExpectedEarnings;
    }
    else
    {
      max = max > val[1] ? max : val[1];
    }
  }
  cout << max << endl;
  return 0;
}