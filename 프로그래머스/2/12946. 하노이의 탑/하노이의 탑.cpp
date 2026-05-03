#include <string>
#include <vector>

using namespace std;
vector<vector<int>> answer;

// 1~k번 원판을 a 기둥에서 b 기둥으로 옮기기
void func(int k, int a, int b) {
    if (k == 1) {
        vector<int> ans = {a, b};
        answer.push_back(ans);
        return;
    }
    int poll = 6 - a - b;
    
    // 1~k-1번 원판을 나머지 기둥으로 옮기고, k번 원판을 b 기둥으로 옮기기.
    // 그 다음에 1~k-1번 원판을 나머지 기둥에서 b 기둥으로 옮기기.
    func(k-1, a, poll);
    vector<int> ans = {a, b};
    answer.push_back(ans);
    func(k-1, poll, b);
}

vector<vector<int>> solution(int n) {
    func(n, 1, 3);
    return answer;
}