// https://www.acmicpc.net/problem/14503

#include <iostream>
#include <vector>
using namespace std;

int main()
{
  int dir[4][2] = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}}; // N, E, S, W
  int nRow(0), nCol(0), x(0), y(0), currentDir(0);
  cin >> nRow >> nCol >> x >> y >> currentDir;
  vector<vector<int>> map(nRow, vector<int>(nCol, 0));
  for (auto &row : map)
  {
    for (auto &col : row)
    {
      cin >> col;
    }
  }

  int count(1);
  // 2 refers to room cleaned
  map[x][y] = 2;
  while (true)
  {
    // int temp = map[x][y];
    // map[x][y] = 9;
    // for (auto &row : map)
    // {
    //   for (auto &col : row)
    //   {
    //     cout << col << ' ';
    //   }
    //   cout << endl;
    // }
    // cout << endl;
    // map[x][y] = temp;
    // cout << count << endl;
    int leftSide = currentDir == 0 ? 3 : currentDir - 1;
    bool needCleaning = false;
    for (int i = 0; i < 4; ++i)
    {
      int newX = x + dir[i][0];
      int newY = y + dir[i][1];
      if (map[newX][newY] == 0)
      {
        needCleaning = true;
      }
    }
    if (!needCleaning)
    {
      int backSide = leftSide == 0 ? 3 : leftSide - 1;
      int backX = x + dir[backSide][0];
      int backY = y + dir[backSide][1];
      if (map[backX][backY] == 1)
      {
        break;
      }
      else
      {
        x = backX;
        y = backY;
        continue;
      }
    }

    int newX = x + dir[leftSide][0];
    int newY = y + dir[leftSide][1];
    if (map[newX][newY] == 0)
    {
      currentDir = leftSide;
      x = newX;
      y = newY;
      map[newX][newY] = 2;
      count++;
    }
    else
    {
      currentDir = leftSide;
    }
  }
  cout << count << endl;
  return 0;
}