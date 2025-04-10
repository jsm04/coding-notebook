# Slicing to get Substrings


def main():
    splicing()
    inputing()


def splicing():
    s = "abcdefgh"
    print(s)
    # Start Stop Step Syntax
    print(s[3:6])
    print(s[0:6:2])
    print(s[-1:-5:-2])


def inputing():
    n = input("Input a number")
    i = input("Input a string")
    print(i * 5)
    print(n * 5)


main()
