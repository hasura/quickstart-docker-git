FROM jin09/app_engine

MAINTAINER Gautam Jain <gautam.jain9@yahoo.com>

RUN mkdir /home/src/

COPY / /home/src/

# RUN ls -la /home/src/*

RUN rm -f /home/src/Dockerfile

RUN pip install -r /home/src/requirements.txt

CMD ["python", "/home/google_appengine/dev_appserver.py", "/home/src/app.yaml", "--skip_sdk_update_check=yes", "--host", "0.0.0.0", "--port", "8080"]