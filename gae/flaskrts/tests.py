import unittest
import tracemalloc

from tests.unit.api import *
from tests.unit.home import *


if __name__ == "__main__":
    tracemalloc.start()
    unittest.main()
