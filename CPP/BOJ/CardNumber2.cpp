#include <iostream>
#include <vector>
using namespace std;

int main()
{
  int n(0), m(0);
  cin >> n;
  vector<int> arr1(n, 0);
  vector<int> hashMap(20000001, 0);
  for (auto &val : arr1)
  {
    cin >> val;
    val += 10000000;
    hashMap[val]++;
  }
  cin >> m;
  vector<int> arr2(m, 0);
  for (auto &val : arr2)
  {
    cin >> val;
    val += 10000000;
  }
  for (auto &val : arr2)
  {
    // cout << hashMap[val] << ' ';
    printf("%d ", hashMap[val]);
  }
  cout << endl;
  return 0;
}