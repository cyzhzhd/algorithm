#include <iostream>
#include <vector>
using namespace std;

void DFS(vector<vector<int>> &map, vector<vector<bool>> &hasVisited, int x, int y, int sum, int count, vector<vector<int>> &path);
void calculate_T_Form(vector<vector<int>> &map, int x, int y);
int maxSum(0);

int main()
{
  int n(0), m(0);
  cin >> n >> m;
  vector<vector<int>> map(n, vector<int>(m));
  for (auto &row : map)
  {
    for (auto &col : row)
    {
      cin >> col;
    }
  }

  vector<vector<bool>> hasVisited(n, vector<bool>(m, false));
  vector<vector<int>> path;
  for (int i = 0; i < n; ++i)
  {
    for (int j = 0; j < m; ++j)
    {
      path.push_back({i, j});
      hasVisited[i][j] = true;
      DFS(map, hasVisited, i, j, map[i][j], 1, path);
      hasVisited[i][j] = false;
      path.pop_back();

      calculate_T_Form(map, i, j);
    }
  }

  cout << maxSum << endl;
  return 0;
}

void DFS(vector<vector<int>> &map, vector<vector<bool>> &hasVisited, int x, int y, int sum, int count, vector<vector<int>> &path)
{
  if (count == 4)
  {
    // if (maxSum < sum)
    // {
    //   for (auto &row : path)
    //   {
    //     for (auto &val : row)
    //     {
    //       cout << val << ' ';
    //     }
    //     cout << endl;
    //   }
    //   cout << endl;
    // }
    maxSum = maxSum > sum ? maxSum : sum;
    return;
  }
  int dx[4] = {1, 0, -1, 0};
  int dy[4] = {0, 1, 0, -1};

  for (int i = 0; i < 4; ++i)
  {
    int newX = x + dx[i];
    int newY = y + dy[i];
    int rowSize = map.size();
    int colSize = map[0].size();
    if (!(0 <= newX && newX < rowSize && 0 <= newY && newY < colSize))
      continue;
    if (hasVisited[newX][newY])
      continue;

    hasVisited[newX][newY] = true;
    path.push_back({newX, newY});
    DFS(map, hasVisited, newX, newY, sum + map[newX][newY], count + 1, path);
    hasVisited[newX][newY] = false;
    path.pop_back();
  }
}

void calculate_T_Form(vector<vector<int>> &map, int x, int y)
{
  int dx[4][4] = {{-1, 0, 0, 1}, {0, 0, 0, 1}, {-1, 0, 1, 0}, {-1, 0, 0, 0}};
  int dy[4][4] = {{0, 0, -1, 0}, {-1, 0, 1, 0}, {0, 0, 0, 1}, {0, -1, 0, 1}};

  int rowSize = map.size();
  int colSize = map[0].size();
  for (int i = 0; i < 4; ++i)
  {
    bool isComplete = true;
    int sum(0);
    for (int j = 0; j < 4; ++j)
    {
      int newX = x + dx[i][j];
      int newY = y + dy[i][j];
      if (!(0 <= newX && newX < rowSize && 0 <= newY && newY < colSize))
      {
        isComplete = false;
        continue;
      }
      sum += map[newX][newY];
    }
    maxSum = maxSum > sum ? maxSum : sum;
  }
}