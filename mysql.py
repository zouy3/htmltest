import pymysql


def connect():
    conn = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        passwd='lrm12350039',
        db='haocai',
        charset='utf8'
    )
    cur = conn.cursor()
    return conn, cur


def query(sql):
    conn, cur = connect()
    cur.execute(sql)
    re = cur.fetchall()
    cur.close()
    return re


def change(sql):
    conn, cur = connect()
    cur.execute(sql)
    connect.commit()
    cur.close()
    return
