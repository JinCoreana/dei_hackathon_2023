import os
from flask import Flask, flash, request, redirect, url_for, render_template, send_from_directory
from werkzeug.utils import secure_filename
from utils.anonymizer import anonymize

APP_ROOT = os.path.dirname(os.path.abspath(__file__))
UPLOAD_FOLDER = os.path.join(APP_ROOT, 'CVs/uploads')
DOWNLOAD_FOLDER = os.path.join(APP_ROOT, 'CVs/downloads')
ALLOWED_EXTENSIONS = {'txt', 'pdf'}

app = Flask(__name__)
# Set the secret key to some random bytes. Keep this really secret!
app.secret_key = b'vjRyCsBPetq5aW5n'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['DOWNLOAD_FOLDER'] = DOWNLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000 # Limit file size to 16 MB


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/uploads/<string:name>')
def download_file(name):

    return send_from_directory(app.config["DOWNLOAD_FOLDER"], name, as_attachment=True)

@app.route("/anonymise", methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename) # type: ignore
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            '''file.save(filepath)
            ofilename = 'anonymized_cv.txt'
            ofilepath = os.path.join(app.config['DOWNLOAD_FOLDER'], ofilename)
            with open(ofilepath,'w', encoding='utf-8') as f:
                f.write(anonymize(filepath))'''
            response_body = {
                'result': anonymize(filepath),
                'message': 'Data processed successfully'
            }
            return response_body, 200
        
    return render_template('index.html')


if __name__ == "__main__":
    app.run()
