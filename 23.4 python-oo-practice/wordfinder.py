"""Word Finder: finds random words from a dictionary."""

import random


class WordFinder:
    """Machine for finding random words from dictionary.

    >>> wf = WordFinder("words.txt")
    3 words read

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True
    """

    def __init__(self, path):
        """read dictionary and report number of items read"""
        dict_file = open(path)
        self.words = self.parse(dict_file)
        print(f"{len(self.words)} words read")

    def parse(self, dict_file):
        """Parse dict_file -> list of words"""
        return [w.strip() for w in dict_file]

    def random(self):
        """return a random word"""
        return random.choice(self.words)
