import unittest
from main import app as mainApp

app = mainApp.test_client()


class TestHome(unittest.TestCase):
    def setUp(self):
        self.response = app.get('/')

    def test_get(self):
        self.assertEqual(200, self.response.status_code)

    def test_content_type(self):
        self.assertIn('text/html', self.response.content_type)

    def test_content(self):
        self.assertIn('id="root"', self.response.data.decode('utf-8'))


if __name__ == "__main__":
    unittest.main()
