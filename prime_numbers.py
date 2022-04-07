from datetime import datetime
import sys

def get_prime_numbers(n):
    prime_numbers_array = []
    base_prime_nums = [2, 3, 5, 7]

    for i in range(2, n+1):
        if (
            base_prime_nums.__contains__(i) or \
            not ((i % 2 == 0) or (i % 3 == 0) or \
            (i % 5 == 0) or (i % 7 == 0))
            ):
             prime_numbers_array.append(i)

    return prime_numbers_array

def main():
    start = datetime.now()
    n = int(sys.argv[1])
    result = get_prime_numbers(n)
    print(result)
    print(datetime.now() - start)

main()