import unittest
from main import app
server = app.test_client()


class TestEnviroment(unittest.TestCase):
    def test_if_Flask_in_testing_mode(self):
        self.assertEqual(app.config['TESTING'], True)


class TestReactIndexFileRootURL(unittest.TestCase):
    def setUp(self):
        self.response = server.get('/')

    def test_it_should_be_able_to_request(self):
        self.assertEqual(200, self.response.status_code)

    def test_it_should_return_html_content_type(self):
        self.assertIn('text/html', self.response.content_type)

    def test_it_should_have_a_tag_with_id_root_in_content(self):
        self.assertIn('id="root"', self.response.data.decode('utf-8'))


# class TestReactIndexFileNotRoot(unittest.TestCase):
#     def setUp(self):
#         self.response = server.get('/abapua')

#     def test_it_should_be_able_to_request(self):
#         self.assertEqual(200, self.response.status_code)

#     def test_it_should_return_html_content_type(self):
#         self.assertIn('text/html', self.response.content_type)

#     def test_it_should_have_a_tag_with_id_root_in_content(self):
#         self.assertIn('id="root"', self.response.data.decode('utf-8'))


# class TestReactIndexFileNotRootSecondLevel(unittest.TestCase):
#     def setUp(self):
#         self.response = server.get('/abapua/buapa')

#     def test_it_should_be_able_to_request(self):
#         self.assertEqual(200, self.response.status_code)

#     def test_it_should_return_html_content_type(self):
#         self.assertIn('text/html', self.response.content_type)

#     def test_it_should_have_a_tag_with_id_root_in_content(self):
#         self.assertIn('id="root"', self.response.data.decode('utf-8'))


# class TestReactIndexFileNotRootThirdLevel(unittest.TestCase):
#     def setUp(self):
#         self.response = server.get('/abapua/buapa/cpua')

#     def test_it_should_be_able_to_request(self):
#         self.assertEqual(200, self.response.status_code)

#     def test_it_should_return_html_content_type(self):
#         self.assertIn('text/html', self.response.content_type)

#     def test_it_should_have_a_tag_with_id_root_in_content(self):
#         self.assertIn('id="root"', self.response.data.decode('utf-8'))
