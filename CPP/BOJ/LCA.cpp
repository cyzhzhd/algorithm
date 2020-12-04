// https://www.hackerrank.com/challenges/binary-search-tree-lowest-common-ancestor/problem?h_r=internal-search
#include <iostream>
#include <stack>
#include <stdio.h>
#include <vector>
#include <math.h>
using namespace std;

vector<vector<int>> parents;
vector<int> getDepths(vector<vector<int>> &connectedList, int n)
{
  vector<int> depths(n + 1, 0);
  int size = (int)ceil(log2(n));
  parents.resize(n + 1, vector<int>(size));
  vector<bool> hasVisited(n, false);
  stack<int> stack;
  stack.push(1);
  parents[1][0] = 0;
  hasVisited[1] = true;
  while (!stack.empty())
  {
    int curIdx = stack.top();
    stack.pop();
    for (auto val : connectedList[curIdx])
    {
      if (hasVisited[val])
        continue;
      depths[val] = depths[curIdx] + 1;
      parents[val][0] = curIdx;
      hasVisited[val] = true;
      stack.push(val);
    }
  }
  return depths;
}

vector<int> setParents(vector<vector<int>> &connectedList, int n)
{
  vector<int> depths = getDepths(connectedList, n);
  for (int i = 1; i < parents[0].size(); ++i)
  {
    for (int j = 1; j < n + 1; ++j)
    {
      parents[j][i] = parents[parents[j][i - 1]][i - 1];
    }
  }
  return depths;
}
void LCA(vector<vector<int>> &queries, vector<int> &depths)
{
  for (auto &query : queries)
  {

    int val1 = query[0];
    int val2 = query[1];
    // match both depths of values
    if (depths[val1] > depths[val2])
    {
      int temp = val1;
      val1 = val2;
      val2 = temp;
    }

    for (int i = parents[0].size() - 1; i >= 0; i--)
    {
      if (depths[val2] - depths[val1] >= (1 << i))
      {
        val2 = parents[val2][i];
      }
    }

    //find LCA
    if (val1 == val2)
    {
      printf("%d\n", val1);
      continue;
    }
    for (int i = parents[0].size() - 1; i >= 0; i--)
    {
      if (parents[val1][i] != parents[val2][i])
      {
        val1 = parents[val1][i];
        val2 = parents[val2][i];
      }
    }
    printf("%d\n", parents[val2][0]);
  }
}

int main()
{
  int n(0);
  cin >> n;
  vector<vector<int>> connectedList(n + 1);
  for (int i = 1; i < n; ++i)
  {
    int from(0), to(0);
    scanf("%d %d", &from, &to);
    connectedList[from].push_back(to);
    connectedList[to].push_back(from);
  }
  int m(0);
  cin >> m;
  vector<vector<int>> queries(m, vector<int>(2, 0));
  for (auto &query : queries)
  {
    for (auto &val : query)
    {
      scanf("%d", &val);
    }
  }

  vector<int> depths = setParents(connectedList, n);
  LCA(queries, depths);
  return 0;
}
