#include <iostream>
#include <vector>
using namespace std;

int main()
{
  int B(0), N(0);
  cin >> B >> N;
  vector<int> C(N, 0);
  for (auto &val : C)
  {
    cin >> val;
  }

  int total(0);
  for (auto val : C)
  {
    total += val;
  }
  if (B - total >= 40)
  {
    cout << "possible" << endl;
  }
  else
  {
    cout << "impossible" << endl;
  }
  return 0;
}