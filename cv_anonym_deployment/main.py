from PyPDF2 import PdfReader
import re
import requests
import json


# Read PDF file
def extract_text(filepath):
    reader = PdfReader(filepath)

    all_text = ""

    # Extract text from the PDF file
    for page in reader.pages:
        page_text = page.extract_text()
        all_text += text + " "

    return all_text


def _get_personal_data(id):
    response = requests.get(f"https://subdomain.sage.hr/api/recruitment/applicants/{id}")
    return json.loads(response.read())


def _get_keywords(personal_data):
    keyword_list = []
    for field, field_value in personal_data["data"].items():
        if " " in str(field_value):
            keyword_list += field_value.split()
        elif field_value is not None and field_value != {}:
            keyword_list.append(field_value)
    return keyword_list


def final_filter(id, text):
    # personal_data = _get_personal_data(id)
    keyword_list = _get_keywords(personal_data)
    for keyword in keyword_list:
        text = re.sub(str(keyword), "*****", text, flags=re.IGNORECASE)
    return text


def main():
    filename = 'example_cv.pdf'
    text = extract_text(filename)
    personal_data = {
        "data": {
            "id": 3,
            "full_name": "Bona Chow",
            "first_name": "Bona",
            "last_name": "Chow",
            "email": "bonachowfakeemail@gmail.com",
            "address": "54 Long Street, Anytown, XP9 8JQ",
            "summary": None,
            "phone_number": "07777888999",
            "source": "referral",
            "created_at": "2020-10-21T12:58:43Z",
            "disqualified_date": "2020-10-28",
            "hired_date": None,
            "stage": {},
            "position_id": 1,
            "added_by": {},
            "referrer": {}
        }
    }
    print(final_filter(23, text))


if __name__ == "__main__":
    main()