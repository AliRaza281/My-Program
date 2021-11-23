#include <iostream>
using namespace std;
int i;
int linerSearch()
{
    int n;
    cout << "Enter the total Size of Array : ";
    cin >> n;
    cout << "Enter the values One By One\n";
    int Array[n];
    for (int i = 0; i < n; i++)
    {
        cout << "Enter the value " << i + 1 << "\t: ";
        cin >> Array[i];
    }
    cout << "Values are Stored \n";
    cout << "Enter the Key To Find   : ";
    int key;
    cin >> key;
    for (i = 0; i <= n; i++)
    {
        if (Array[i] == key)
        {
            cout << "Key = "<<key<<"\n Found  At : \t"<<i+1;
            return i + 1;
        }
        else{
            cout<<"Element Not Found \n ";
        }
    }
}
int main()
{
    linerSearch();
}