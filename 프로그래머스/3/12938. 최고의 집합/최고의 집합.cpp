#include <string>
#include <vector>
#include <bits/stdc++.h>

using namespace std;

vector<int> solution(int n, int s) {
    vector<int> answer;
    
    int basic = s / n;
    int remain = s;
    
    if (basic == 0) {
        answer.push_back(-1);
        return answer;
    }
    for (int i = 0; i < n; i++) {
        answer.push_back(basic);
        remain -= basic;
    }
    for (int i = n-1; (i >= 0) && (remain > 0); i--) {
        answer[i]++;
        remain--;
    }
    
    return answer;
}