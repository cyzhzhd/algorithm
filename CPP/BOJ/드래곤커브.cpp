// https://www.acmicpc.net/problem/15685
#include <iostream>
#include <vector>
using namespace std;

vector<int> get_diff(vector<int> &pos1, vector<int> &pos2)
{
  int dx = pos2[0] - pos1[0];
  int dy = pos2[1] - pos1[1];
  return vector<int>{dx, dy};
}

int main()
{
  int n(0);
  cin >> n;
  vector<vector<int>> infos(n, vector<int>(4, 0));
  for (auto &info : infos)
  {
    for (auto &val : info)
    {
      cin >> val;
    }
  }

  int dir[4][2] = {{0, 1}, {-1, 0}, {0, -1}, {1, 0}}; // R, U, D, L
  vector<vector<int>> map(101, vector<int>(101, 0));
  for (auto &info : infos)
  {
    vector<vector<int>> curv;
    curv.push_back({info[1], info[0]});
    curv.push_back({info[1] + dir[info[2]][0], info[0] + dir[info[2]][1]});
    map[info[1]][info[0]] = 1;
    map[info[1] + dir[info[2]][0]][info[0] + dir[info[2]][1]] = 1;

    for (int i = 0; i < info[3]; ++i)
    {
      vector<vector<int>> oldCurv = curv;
      vector<vector<int>> newCurv;
      while (oldCurv.size() > 1)
      {
        auto pos1 = oldCurv.back();
        oldCurv.pop_back();
        auto pos2 = oldCurv.back();
        auto diff = get_diff(pos1, pos2);
        int newX, newY;
        if (newCurv.size() > 0)
        {
          newX = newCurv[newCurv.size() - 1][0] + diff[1];
          newY = newCurv[newCurv.size() - 1][1] - diff[0];
        }
        else
        {
          newX = pos1[0] + diff[1];
          newY = pos1[1] - diff[0];
        }
        if (0 <= newX && newX < 101 && 0 <= newY && newY < 101)
        {
          newCurv.push_back({newX, newY});
          map[newX][newY] = 1;
        }
      }
      curv.reserve(curv.size() + newCurv.size());
      curv.insert(curv.end(), newCurv.begin(), newCurv.end());
    }
  }

  int count(0);
  for (int i = 0; i < 101; ++i)
  {
    for (int j = 0; j < 101; ++j)
    {
      if (map[i][j] == 1)
      {
        bool bool1 = i + 1 < 101 && map[i + 1][j] == 1;
        bool bool2 = j + 1 < 101 && map[i][j + 1] == 1;
        bool bool3 = i + 1 < 101 && j + 1 < 101 && map[i + 1][j + 1] == 1;
        if (bool1 && bool2 && bool3)
        {
          count++;
        }
      }
    }
  }

  cout << count << endl;
  return 0;
}
