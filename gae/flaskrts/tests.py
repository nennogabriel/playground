import unittest
import tracemalloc

from tests.unit.api import *
from tests.unit.home import *

tracemalloc.start()


if __name__ == "__main__":
    unittest.main()
