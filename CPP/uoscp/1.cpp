#include <iostream>
#include <vector>
#include <string>
#include <math.h>
using namespace std;

// void translation(int num, int digit, string &snum)
// {
//   if (num < digit)
//   {
//     snum = snum + to_string(num);
//     return;
//   }
//   translation(num / digit, digit, snum);
//   snum = snum + to_string(num % digit);
// }

long long translation(long long num, int digit)
{
  string snum = to_string(num);
  long long result(0);
  for (int i = 0; i < snum.size(); ++i)
  {
    result += (snum[i] - '0') * pow(digit, snum.size() - i - 1);
  }

  return result;
}

int calculate(long long num, vector<long long> &val)
{
  int minDigit(0);
  string snum = to_string(num);
  for (int i = 0; i < snum.size(); ++i)
  {
    minDigit = minDigit > snum[i] - '0' ? minDigit : (snum[i] + 1) - '0';
  }
  for (int i = minDigit; i <= 10; ++i)
  {
    val[i] = translation(num, i);
  }

  return minDigit;
}

int main()
{
  long long num1(0), num2(0);
  cin >> num1 >> num2;
  vector<long long> val1(11, 0);
  vector<long long> val2(11, 0);

  int minDigit = calculate(num1, val1);
  int minDigit2 = calculate(num2, val2);

  int count(0);
  for (int i = minDigit; i <= 10; ++i)
  {
    for (int j = minDigit2; j <= 10; ++j)
    {
      if (val1[i] == val2[j])
      {
        count++;
      }
    }
  }
  cout << count << endl;
  return 0;
}
