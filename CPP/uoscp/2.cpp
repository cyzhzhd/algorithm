#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool compare(vector<long long> v1, vector<long long> v2)
{
  return v1[2] > v2[2];
}
int main()
{
  int n(0), m(0), l(0);
  cin >> n >> m >> l;
  vector<int> init_infectees(n, 0);
  for (auto &infectee : init_infectees)
  {
    cin >> infectee;
  }

  vector<vector<long long>> connects(l, vector<long long>(3, 0));
  for (auto &connect : connects)
  {
    for (auto &val : connect)
    {
      cin >> val;
    }
  }

  // 초기감염자 처리
  vector<int> infectees(m + 1, 0);
  vector<long long> time(m + 1, 0);
  for (auto infectee : init_infectees)
  {
    infectees[infectee] = 1;
    time[infectee] = 1000000001;
  }

  // 접촉 감염자 처리
  sort(connects.begin(), connects.end(), compare);
  for (auto &connect : connects)
  {
    if (infectees[connect[0]] == 0)
      continue;
    if (time[connect[0]] >= connect[2])
    {
      infectees[connect[1]] = 1;
      time[connect[1]] = time[connect[1]] > connect[2] ? time[connect[1]] : connect[2];
    }
  }
  for (auto &connect : connects)
  {
    if (infectees[connect[0]] == 0)
      continue;
    if (time[connect[0]] >= connect[2])
    {
      infectees[connect[1]] = 1;
      time[connect[1]] = time[connect[1]] > connect[2] ? time[connect[1]] : connect[2];
    }
  }

  for (auto i = 0; i < m + 1; ++i)
  {
    if (infectees[i] == 1)
    {
      cout << i << endl;
    }
  }

  return 0;
}