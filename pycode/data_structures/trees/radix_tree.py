class RadixNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False
        self.value = None

class RadixTree:
    def __init__(self):
        self.root = RadixNode()

    def insert(self, word: str, value=None):
        node = self.root
        while word:
            for key in node.children.items():
                common_prefix = self.common_prefix(word, key)
                if common_prefix:
                    # Case 1: The key matches completely
                    if common_prefix == key:
                        word = word[len(common_prefix):]
                        node = node.children[key]
                        break
                    # Case 2: The common prefix is shorter than the existing key
                    if common_prefix != key:
                        self.split_node(node, key, common_prefix)
                        word = word[len(common_prefix):]
                        node = node.children[common_prefix]
                        break
            else:
                node.children[word] = RadixNode()
                node = node.children[word]
                word = ""
        node.is_end_of_word = True
        node.value = value

    def search(self, word: str):
        node = self.root
        while word:
            for key in node.children.items():
                if word.startswith(key):
                    word = word[len(key):]
                    node = node.children[key]
                    break
            else:
                return False, None
        return node.is_end_of_word, node.value

    def common_prefix(self, str1: str, str2: str):
        min_length = min(len(str1), len(str2))
        for i in range(min_length):
            if str1[i] != str2[i]:
                return str1[:i]
        return str1[:min_length]

    def split_node(self, node, key, common_prefix):
        remaining_key = key[len(common_prefix):]
        child_node = node.children.pop(key)
        node.children[common_prefix] = RadixNode()
        node.children[common_prefix].children[remaining_key] = child_node

# Example usage
radix_tree = RadixTree()
words = [("apple", 1), ("app", 2), ("apply", 3), ("bat", 4), ("bath", 5), ("batman", 6)]

for curr_word, curr_value in words:
    radix_tree.insert(curr_word, curr_value)

# Search for words
print(radix_tree.search("apple"))  # (True, 1)
print(radix_tree.search("app"))    # (True, 2)
print(radix_tree.search("apples")) # (False, None)
print(radix_tree.search("bat"))    # (True, 4)
print(radix_tree.search("bath"))   # (True, 5)
print(radix_tree.search("batman")) # (True, 6)
print(radix_tree.search("batcave"))# (False, None)
