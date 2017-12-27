FROM jin09/webapp2

MAINTAINER Gautam Jain <gautam.jain9@yahoo.com>

RUN mkdir /home/src/

COPY /app /home/src/

RUN pip install -r /home/src/requirements.txt

CMD ["python", "/home/src/main.py"]
