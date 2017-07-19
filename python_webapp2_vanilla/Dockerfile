FROM jin09/webapp2

MAINTAINER Gautam Jain <gautam.jain9@yahoo.com>

RUN mkdir /home/src/

COPY / /home/src/

RUN rm -f /home/src/Dockerfile

RUN pip install -r /home/src/requirements.txt

CMD ["python", "/home/src/main.py"]
