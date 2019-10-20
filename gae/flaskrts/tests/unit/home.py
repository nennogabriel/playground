import unittest
from src.main import app as mainApp
app = mainApp.test_client()


class TestReactIndexFileRootURL(unittest.TestCase):
    def setUp(self):
        self.response = app.get('/')

    def test_it_should_be_able_to_request(self):
        self.assertEqual(200, self.response.status_code)

    def test_it_should_return_html_content_type(self):
        self.assertIn('text/html', self.response.content_type)

    def test_it_should_have_a_tag_with_id_root_in_content(self):
        self.assertIn('id="root"', self.response.data.decode('utf-8'))


class TestReactIndexFileNotRoot(unittest.TestCase):
    def setUp(self):
        self.response = app.get('/abapua')

    def test_it_should_be_able_to_request(self):
        self.assertEqual(200, self.response.status_code)

    def test_it_should_return_html_content_type(self):
        self.assertIn('text/html', self.response.content_type)

    def test_it_should_have_a_tag_with_id_root_in_content(self):
        self.assertIn('id="root"', self.response.data.decode('utf-8'))
