import sys

T = int(sys.stdin.readline())

for i in range(1, T + 1):
    number = sys.stdin.readline().rstrip().split(' ')
    result = int(number[0]) + int(number[1])
    print(f'Case #{i}: {result}')
