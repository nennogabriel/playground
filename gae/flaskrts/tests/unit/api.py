import unittest
from main import app
server = app.test_client()


class TestApi(unittest.TestCase):
    def test_it_should_able_to_request(self):
        response = server.get('/api/')
        self.assertEqual(200, response.status_code)

    def test_it_should_return_json_content_type(self):
        response = server.get('/api/')
        self.assertIn('json', response.content_type)
