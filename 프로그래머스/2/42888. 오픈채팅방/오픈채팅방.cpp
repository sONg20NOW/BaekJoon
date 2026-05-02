#include <string>
#include <vector>
#include <bits/stdc++.h>

using namespace std;

vector<string> solution(vector<string> record) {
    vector<string> answer;
    queue<string> Q;
    map<string, string> M;
    
    for (string r : record) {
        vector<string> info;
        stringstream ss;
        for (char c : r) {
            if (c == ' ') {
                info.push_back(ss.str());
                ss.str("");
            }
            else {
                ss << c;  
            }
        }
        info.push_back(ss.str());
        ss.str("");
        
        // for (string i : info) {
        //     cout << i << ' ';
        // }
        // cout << '\n';
        if (info[0].compare("Enter") == 0) {
            M[info[1]] = info[2];
        } else if (info[0].compare("Leave") == 0) {
            
        } else {
            M[info[1]] = info[2];
        }
    }
    
    for (string r : record) {
        vector<string> info;
        stringstream ss;
        for (char c : r) {
            if (c == ' ') {
                info.push_back(ss.str());
                ss.str("");
            } else  ss << c;
        }
        info.push_back(ss.str());
        ss.str("");
        
        // for (string i : info) {
        //     cout << i << ' ';
        // }
        // cout << '\n';
        if (info[0].compare("Enter") == 0) {
            ss << M[info[1]] << "님이 들어왔습니다.";
            answer.push_back(ss.str());
        } else if (info[0].compare("Leave") == 0) {
            ss << M[info[1]] << "님이 나갔습니다.";
            answer.push_back(ss.str());
        }
    }    
    return answer;
}