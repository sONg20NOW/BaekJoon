#include <bits/stdc++.h>
using namespace std;

using ll = long long;

ll MOD(ll A, ll B, ll C) {
    if (B == 1) {
        return A % C;
    }
    ll k = B / 2;

    if (B % 2 == 1) {
        return MOD(A, k, C) * MOD(A, k+1, C) % C;
    } else {
        return MOD(A, k, C) * MOD(A, k, C) % C;
    }
}

int main() {
    ll A, B, C;
    cin >> A >> B >> C;

    cout << MOD(A, B, C) << '\n';
}