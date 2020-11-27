// https://www.acmicpc.net/problem/1700

#include <iostream>
#include <vector>

using namespace std;

int HasPlugged(std::vector<int> sockets, int item);
int main()
{
	int n(0), k(0);
	std::cin >> n >> k;

	std::vector<int> items(k + 1);
	for (int i = 1; i <= k; ++i)
		std::cin >> items[i];

	// plug in unique consents.
	// lets say sockets : 3 and appliances num = 1, 1, 1, 2, 3
	// then plug in 1 2 3, not 1 1 1.
	std::vector<int> sockets(n + 1);
	int uniqueSocketIdx(1);
	for (int i = 1; i <= k; ++i)
	{
		if (!HasPlugged(sockets, items[i]))
			sockets[uniqueSocketIdx++] = items[i];
		if (uniqueSocketIdx == n + 1)
			break;
	}

	int plugOutCounter(0);
	for (int i = 1; i <= k; ++i)
	{
		// skip if the appliance has already plugged in
		if (HasPlugged(sockets, items[i]))
			continue;

		std::vector<bool> hasPlugged(n + 1, false);
		int socketCounter(0);
		int index(1);
		// find a socket which will be used relatively later
		// to do it, see orders and check which appliances will be used next until we find n - 1 appliances.
		while (socketCounter < n - 1 && i + index <= k)
		{
			int socketNum = HasPlugged(sockets, items[i + index]);
			// if the appliance is already in the waiting list, do not count it.
			if (socketNum && !hasPlugged[socketNum])
			{
				hasPlugged[socketNum] = true;
				socketCounter++;
			}
			index++;
		}

		for (int t = 1; t <= n; ++t)
		{
			// change the item in the socket.
			if (!hasPlugged[t])
			{
				sockets[t] = items[i];
				plugOutCounter++;
				break;
			}
		}
	}

	std::cout << plugOutCounter << std::endl;
}

// return 0(= false) when the item hasn't plugged in.
// return socketNum when the item has already plugged in.
int HasPlugged(std::vector<int> sockets, int item)
{
	int socketNum(0);
	for (int i = 1; i <= sockets.size() - 1; ++i)
	{
		if (sockets[i] == item)
		{
			socketNum = i;
			break;
		}
	}

	return socketNum;
}
