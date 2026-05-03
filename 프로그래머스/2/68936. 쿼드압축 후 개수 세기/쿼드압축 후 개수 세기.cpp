#include <string>
#include <vector>

using namespace std;

int cnt[2];

int board[1025][1025];

// board의 k x k 격자, 시작점 (r,c)가 모두 같은 수인지 확인하는 함수
bool commonAll(int k, int r, int c) {
    if (k == 1) return true;
    int std = board[r][c];
    for (int i = r; i < r + k; i++) {
        for (int j = c; j < c + k; j++) {
            if (board[i][j] != std)   return false;
        }
    }
    
    return true;
}

// k x k 격자, 시작점 (r,c)를 기준으로 압축 시도
void func(int k, int r, int c) {
    // 모든 값이 같은 지 확인
    if (commonAll(k, r, c)) {
        cnt[board[r][c]]++;
        return;
    }
    // 값이 일치하지 않다면 4개 영역으로 쪼개서 다시 압축 시도.
    int next_k = k >> 1;
    func(next_k, r, c);
    func(next_k, r, c + next_k);
    func(next_k, r + next_k, c);
    func(next_k, r + next_k, c + next_k);
}

vector<int> solution(vector<vector<int>> arr) {    
    int n = arr.size();
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            board[i][j] = arr[i][j];
        }
    }
    
    func(n, 0, 0);
    
    vector<int> answer;
    for(int i = 0; i < 2; i++) {
        answer.push_back(cnt[i]);
    }
    return answer;
}