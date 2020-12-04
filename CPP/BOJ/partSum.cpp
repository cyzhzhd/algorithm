// https://www.acmicpc.net/problem/2042

#include <iostream>
#include <vector>
#include <math.h>
using namespace std;
long long buildSegmentTree(vector<long long> &tree, vector<int> &nums, int node, int startIdx, int endIdx);
void modify(vector<long long> &tree, int node, int startIdx, int endIdx, int target, int diff);
long long search(vector<long long> &tree, int node, int startIdx, int endIdx, int leftTargetIdx, int rightTargetIdx);

int main()
{
  int n(0), m(0), k(0);
  cin >> n >> m >> k;
  vector<int> nums(n, 0);
  vector<vector<int>> queries(m + k, vector<int>(3));
  for (auto &num : nums)
  {
    cin >> num;
  }
  for (auto &query : queries)
  {
    for (auto &val : query)
    {
      cin >> val;
    }
  }

  int h = (int)ceil(log2(n));
  vector<long long> tree(1 << (h + 1));
  buildSegmentTree(tree, nums, 1, 0, n - 1);

  for (auto query : queries)
  {
    if (query[0] == 1)
    {
      int diff = query[2] - nums[query[1] - 1];
      nums[query[1] - 1] = query[2];
      modify(tree, 1, 0, n - 1, query[1] - 1, diff);
    }
    else
    {
      cout << search(tree, 1, 0, n - 1, query[1] - 1, query[2] - 1) << endl;
    }
  }
  return 0;
}

long long buildSegmentTree(vector<long long> &tree, vector<int> &nums, int node, int startIdx, int endIdx)
{
  if (startIdx == endIdx)
  {
    tree[node] = nums[startIdx];
  }
  else
  {
    int midIdx = (startIdx + endIdx) / 2;
    tree[node] = buildSegmentTree(tree, nums, node * 2, startIdx, midIdx) + buildSegmentTree(tree, nums, node * 2 + 1, midIdx + 1, endIdx);
  }
  return tree[node];
}

void modify(vector<long long> &tree, int node, int startIdx, int endIdx, int target, int diff)
{
  if (!(startIdx <= target && target <= endIdx))
    return;

  tree[node] += diff;

  if (startIdx == endIdx)
    return;
  int midIdx = (startIdx + endIdx) / 2;
  modify(tree, node * 2, startIdx, midIdx, target, diff);
  modify(tree, node * 2 + 1, midIdx + 1, endIdx, target, diff);
}

long long search(vector<long long> &tree, int node, int startIdx, int endIdx, int leftTargetIdx, int rightTargetIdx)
{
  if (leftTargetIdx > endIdx || rightTargetIdx < startIdx)
    return 0;

  if (leftTargetIdx <= startIdx && rightTargetIdx >= endIdx)
    return tree[node];

  int midIdx = (startIdx + endIdx) / 2;
  return search(tree, node * 2, startIdx, midIdx, leftTargetIdx, rightTargetIdx) + search(tree, node * 2 + 1, midIdx + 1, endIdx, leftTargetIdx, rightTargetIdx);
}