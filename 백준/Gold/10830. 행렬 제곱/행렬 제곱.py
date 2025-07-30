import sys
input = sys.stdin.readline

# A, B는 동일한 크기의 정방 행렬이라 가정
def Dot(A, B):
    N = len(A)
    res = [[0]*N for _ in range(N)]
    for i in range(N):
        for j in range(N):
            for k in range(N):
                res[i][j] += A[i][k] * B[k][j]
            res[i][j] %= 1000
    return res

def MatrixPower(M, r):
    if r == 1:
        return [[x % 1000 for x in row] for row in M]

    half = MatrixPower(M, r // 2)
    temp = Dot(half, half)
    if r % 2 == 0:
        return temp
    else:
        return Dot(temp, M)

[N, B] = map(int, input().split(' '))
A = []
for i in range(N):
    A.append(list(map(int, input().split(' '))))

result_A = MatrixPower(A, B)
for row in result_A:
    print(' '.join(map(str, row)))