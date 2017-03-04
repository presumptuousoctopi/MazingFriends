# Download and ubuntu
FROM ubuntu:latest
RUN apt-get update && apt-get install -y --no-install-recommends apt-utils

# Download utils
RUN apt-get -f install
RUN apt-get install -y wget
RUN apt-get update -y
RUN apt-get install -y git
RUN apt-get install -y curl
RUN apt-get install -y vim
RUN apt-get install -y build-essential
RUN apt-get install -y nodejs

# Install Docker Compose
RUN curl -L https://github.com/docker/compose/releases/download/1.11.1/run.sh > /usr/local/bin/docker-compose
RUN chmod +x /usr/local/bin/docker-compose

# Download node
RUN   \
  cd /opt && \
  wget http://nodejs.org/dist/v0.10.28/node-v0.10.28-linux-x64.tar.gz && \
  tar -xzf node-v0.10.28-linux-x64.tar.gz && \
  mv node-v0.10.28-linux-x64 node && \
  cd /usr/local/bin && \
  ln -s /opt/node/bin/* . && \
  rm -f /opt/node-v0.10.28-linux-x64.tar.gz

RUN git clone https://github.com/ehdwn1212/MazingFriends;
RUN cd MazingFriends && npm install;

COPY start.sh /MazingFriends

EXPOSE 3000

RUN chmod +x /MazingFriends/start.sh
CMD /MazingFriends/start.sh
