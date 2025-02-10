import os
import sys
from collections import defaultdict


# Function to count file types in a directory
def count_file_types(directory):
    counter = defaultdict(int)
    for root, dirs, files in os.walk(directory):
        for file in files:
            extension = os.path.splitext(file)[1]
            counter[extension] += 1
    return counter


def main():
    # Get the directory path from the command line arguments
    if len(sys.argv) != 2:
        print("Usage: python count_files.py <directory_path>")
        sys.exit(1)

    directory = sys.argv[1]
    results = count_file_types(directory)

    # Print the results
    for extension, quantity in results.items():
        print(f"{extension}: {quantity}")


if __name__ == "__main__":
    main()
