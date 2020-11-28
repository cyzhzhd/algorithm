#include <iostream>
#include <vector>
#include <algorithm>
#include <stack>
using namespace std;

bool compare(vector<int> v1, vector<int> v2)
{
  return v1[1] > v2[1];
}
bool hasFinished(vector<bool> hasVisited)
{
  for (auto val : hasVisited)
  {
    if (val == false)
      return false;
  }
  return true;
}
int main()
{
  int n(0);
  cin >> n;
  vector<vector<int>> tanks(n, vector<int>(2, 0));
  for (auto &tank : tanks)
  {
    for (auto &val : tank)
    {
      cin >> val;
    }
  }

  // 물탱크 연결 정보 리스트
  vector<vector<vector<int>>> connections(n);
  for (int i = 0; i < n - 1; ++i)
  {
    int u(0), v(0), w(0);
    cin >> u >> v >> w;
    connections[u - 1].push_back({v - 1, w});
  }

  for (auto &connection : connections)
  {
    sort(connection.begin(), connection.end(), compare);
  }

  // 물 채우기
  vector<bool> capacity(n, 0);
  for (int i = 0; i < tanks.size(); ++i)
  {
    capacity[i] = tanks[i][0] * tanks[i][1];
  }

  vector<int> order;
  vector<int> real_order;
  vector<bool> hasVisited(n, false);
  order.push_back(0);
  while (!hasFinished(hasVisited))
  {
    int cur = order.size() - 1;
    int val = order[cur];
    while (hasVisited[val])
    {
      val = order[--cur];
    }
    hasVisited[val] = true;
    for (int i = 0; i < connections[val].size(); ++i)
    {
      order.push_back(connections[val][i][0]);
    }
    if (connections[val].size() == 0)
    {
      real_order.push_back(val);
    }
  }

  return 0;
}