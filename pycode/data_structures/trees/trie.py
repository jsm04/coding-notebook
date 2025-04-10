class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False


class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, w: str):
        node = self.root
        for char in w:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search(self, w: str) -> bool:
        node = self.root
        for char in w:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word

    def starts_with(self, prefix: str) -> bool:
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True


# Example usage
trie = Trie()
words = ["apple", "app", "apply", "bat", "bath", "batman"]

for word in words:
    trie.insert(word)

# Search for words
print(trie.search("apple"))  # True
print(trie.search("app"))  # True
print(trie.search("apples"))  # False

# Check for prefixes
print(trie.starts_with("app"))  # True
print(trie.starts_with("bat"))  # True
print(trie.starts_with("batc"))  # False
