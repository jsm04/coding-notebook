def generate_permutations(elements):
    n = len(elements)

    # Convert to list if input is not already a list
    if not isinstance(elements, list):
        elements = list(elements)

    if n == 1:
        yield elements
    else:
        for i in range(n):
            # Recursively generate permutations of n-1 elements
            for perm in generate_permutations(elements[:i] + elements[i+1:]):
                yield [elements[i]] + perm

            # If length of elements is odd, swap first and last element
            if n % 2 == 1:
                elements[0], elements[-1] = elements[-1], elements[0]
            # If length is even, swap ith and last element
            else:
                elements[i], elements[-1] = elements[-1], elements[i]

# Example usage
input_set = [1, 2, 3]
for permutation in generate_permutations(input_set):
    print(permutation)
