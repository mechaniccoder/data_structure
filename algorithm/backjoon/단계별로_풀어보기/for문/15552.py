import sys

t = sys.stdin.readline()

for repeat in range(0, int(t)):
    num = sys.stdin.readline().split(" ")
    print(int(num[0] + int(num[1])))
