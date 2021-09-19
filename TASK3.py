#Task 1
def reverseBits(a):
    return int('{0:b}'.format(a)[::-1], 2)

def factorial(a):
    s = 1
    for i in range(1, a+1):
        s*=i
    return s

def getUniqueWords(a):
    return set(a.split(" "))

print(reverseBits(417))
print(reverseBits(267))
print(reverseBits(0))
print(reverseBits(2017))
print(reverseBits(1023))
print(reverseBits(1024))

print()

print(factorial(0))
print(factorial(1))
print(factorial(4))
print(factorial(7))
print(factorial(17))

print()

print(getUniqueWords("easy come easy go"))
print(getUniqueWords("first things first"))
print(getUniqueWords(""))