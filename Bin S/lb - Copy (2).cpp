
#include <bits/stdc++.h>
using namespace std;

int lowerBound(int arr[], int n, int x) {
    for (int i = 0; i < n; i++) {
        if (arr[i] >= x) {
            // lower bound found:
            cout<< i<<endl;
        }
    }
    //return n;
}

int main()
{
    int arr[] = {3, 5, 8, 15, 19};
    int n = 5, x = 20;
    int ind = lowerBound(arr, n, x);
    cout << "The lower bound is the index: " << ind << "\n";
    return 0;
}


