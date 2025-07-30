import sys
input = sys.stdin.readline

G = int(input())
P = int(input())
gates = []
find = [x for x in range(0, G+1)]

def Find(g):
    final_gate = g
    while (find[final_gate] != final_gate):
        final_gate = find[final_gate]
    while g != final_gate:
        find[g] = final_gate
        next = find[g]
        g = next
    return final_gate

def Use(g):
    usable = Find(g)
    if (usable > 0):
        find[usable] -= 1
        return True
    return False

def SearchAround(gates):
    sum = 0
    for i in range(P):
        g = gates[i]
        if (Use(g)):
            sum += 1
        else:   break
    return sum

for i in range(P):
    g = int(input())
    gates.append(g)

sum = SearchAround(gates)

print(sum)

