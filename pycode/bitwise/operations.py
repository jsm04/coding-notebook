def bitwise_sum(a, b):
    while b != 0:
        carry = a & b  # Calculate the carry
        a = a ^ b  # Calculate the sum without carry
        b = carry << 1  # Shift carry left

    return a

"""
    a       -> 0110
    b       -> 0111
    carry   -> 0110
    a       -> 0001
    b       -> 1100
    b != 0
    carry   -> 1101
    a       -> 1101
    b       ->
"""
# Example usage
result = bitwise_sum(6, 7)
print(result)  # Output: 13
