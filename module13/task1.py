from flask import Flask

app = Flask(__name__)


@app.route('/prime_number/<num>')
def prime_number(num):
    input_num = int(num)
    prime_number = True
    for i in range(2, input_num - 1):
        if input_num % i == 0:
            prime_number = False
            break

    response = {
        "Number": input_num,
        "isPrime": prime_number
    }
    return response


if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=5000)
