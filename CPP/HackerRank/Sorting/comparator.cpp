// https://www.hackerrank.com/challenges/ctci-comparator-sorting/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

struct Player
{
  int score;
  string name;
};

class Checker
{
public:
  // complete this method
  static int comparator(Player a, Player b)
  {
    if (a.score > b.score)
    {
      return 1;
    }
    else if (a.score < b.score)
    {
      return -1;
    }
    else
    {
      int size = a.name.length() > b.name.length() ? b.name.length() : a.name.length();
      for (int i = 0; i < size; ++i)
      {
        if (a.name[i] > b.name[i])
        {
          return -1;
        }
        else if (a.name[i] < b.name[i])
        {
          return 1;
        }
      }
      if (a.name.length() > b.name.length())
        return 1;
      else
        return -1;
    }
  }
};

bool compare(Player a, Player b)
{
  if (Checker::comparator(a, b) == -1)
    return false;
  return true;
}
int main()
{
  int n;
  cin >> n;
  vector<Player> players;
  string name;
  int score;
  for (int i = 0; i < n; i++)
  {
    cin >> name >> score;
    Player player;
    player.name = name, player.score = score;
    players.push_back(player);
  }
  sort(players.begin(), players.end(), compare);
  cout << endl;
  for (int i = 0; i < players.size(); i++)
  {
    cout << players[i].name << " " << players[i].score << endl;
  }
  return 0;
}