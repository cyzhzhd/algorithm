#include <iostream>
#include <cmath>
#include <vector>
#include <string>
using namespace std;
void moveHanoiRing(int num, int from, int by, int to);

int main()
{
  int n(0);
  cin >> n;
  string answer = to_string(pow(2, n));
  int idx = answer.find('.');
  answer = answer.substr(0, idx);
  answer[answer.length() - 1] -= 1;
  cout << answer << endl;

  if (n <= 20)
  {
    moveHanoiRing(n, 1, 2, 3);
  }
  return 0;
}

void moveHanoiRing(int num, int from, int by, int to)
{
  if (num == 1)
  {
    printf("%d %d\n", from, to);
    return;
  }
  moveHanoiRing(num - 1, from, to, by);
  printf("%d %d\n", from, to);
  moveHanoiRing(num - 1, by, from, to);
}