#include <string>
#include <iostream>
#include <bits/stdc++.h>

using namespace std;

bool func(string s) {
    stack<char> ST;
    
    for (char c : s) {
        switch(c) {
            case '(':
                ST.push(c);
                break;
            case ')':
                if (ST.empty()) return false;
                ST.pop();
                break;
            default:
                break;
        }
    }
    
    if (!ST.empty())    return false;
    return true;
}

bool solution(string s)
{
    bool answer = true;
    
    answer = func(s);

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    cout << "Hello Cpp" << endl;

    return answer;
}