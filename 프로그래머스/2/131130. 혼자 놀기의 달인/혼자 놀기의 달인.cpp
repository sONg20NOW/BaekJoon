#include <string>
#include <vector>

using namespace std;

int max_cnt;
int nmax_cnt;

int open[101];

void updateCnt(int n) {
    if (max_cnt < n) {
        nmax_cnt = max_cnt;
        max_cnt = n;
    } else if (nmax_cnt < n) {
        nmax_cnt = n;
    }
}

// i번째 상자를 열 때 열린 상자 개수 반환
// open[i] = 0이어야 함.
int openBox(vector<int> cards, int i) {
    int cnt = 0;
    int next_i = i;
    while(open[next_i - 1] != 1) {
        cnt++;
        open[next_i - 1] = 1;
        next_i = cards[next_i - 1];
    }
    
    return cnt;
}

int solution(vector<int> cards) {
    int answer = 0;
    
    for (int i = 1; i <= cards.size(); i++) {
        if (open[i-1] != 1) {
            int res = openBox(cards, i);
            updateCnt(res);
        }
    }
    
    answer = max_cnt * nmax_cnt;
    
    return answer;
}