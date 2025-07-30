import sys
input = sys.stdin.readline

def CheckUnite(pixels):
    color = pixels[0][0]
    for row in pixels:
        for i in row:
            if (color != i):
                return -1
    return color

def Divide(pixels):
    N = len(pixels)
    # 만약 픽셀의 모든 색이 같다면 해당 색 리턴
    color = CheckUnite(pixels)
    if color != -1:
        return str(color)
    # 그렇지 않다면 네 구역으로 나눠서 다시 보기.
    half_N = int(N / 2)
    divided = []
    divided.append([row[:half_N] for row in pixels[:half_N]])
    divided.append([row[half_N:] for row in pixels[:half_N]])
    divided.append([row[:half_N] for row in pixels[half_N:]])
    divided.append([row[half_N:] for row in pixels[half_N:]])
    answer = '('
    for set in divided:
        answer += Divide(set)
    answer += ')'
    return answer


N = int(input())
pixels = []
for r in range(N):
    row = input().strip()
    pixels.append([int(c) for c in row])

print(Divide(pixels))