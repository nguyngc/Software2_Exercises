import mysql.connector
from flask import Flask

db_connection = mysql.connector.connect(
    host='127.0.0.1',
    port=3306,
    database='flight_game',
    user='root',
    password='ngoc',
    autocommit=True
)

app = Flask(__name__)


@app.route('/airport/<icao>')
def airport(icao):
    # try:
    sql = f"SELECT name, municipality FROM airport WHERE ident = '{icao}'"
    cursor = db_connection.cursor()
    cursor.execute(sql)
    result = cursor.fetchone()
    if cursor.rowcount > 0:
        response = {
            "ICAO": icao,
            "Name": result[0],
            "Location": result[1]
        }

    return response


if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=5000)
