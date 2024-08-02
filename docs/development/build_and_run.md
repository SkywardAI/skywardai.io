---
layout: default
title: Build and Run
parent: Development
---


# Building code and running the application

The SkywardAI Chat backend is a Python-based application that uses the FastAPI framework to provide a RESTful API for the SkywardAI Chat frontend. This guide will walk you through the process of setting up the backend on your local machine.


## Prerequisites

Please install Docker and Docker Compose on your machine before proceeding. You can find installation instructions for Docker [here](https://docs.docker.com/get-docker/).


## Step 1: Clone the repository

First, clone the SkywardAI Chat repository to your local machine by running the following command:

```bash
git clone https://github.com/SkywardAI/kirin.git
```

## Step 2: Navigate to the project directory

Change into the project directory by running the following command:

```bash
cd kirin
```

{: .warning }

> Please go to check the latest version of frontend in the [releases](https://github.com/SkywardAI/chat-frontend/pkgs/container/rebel), and update it in docker-compose.yml file in [here](https://github.com/SkywardAI/chat-backend/blob/f73fff482b64cc45bde89fb5e7b4a8e5d1789481/docker-compose.yaml#L138).



## Step 3: Build and run the images

Setting up environment variables for the backend by creating a `.env` file in the root directory of the project. You can use the following template to create the `.env` file:

```
make up
```

```bash

vscode ➜ /workspaces/chat-backend (main) $ make up
[+] Building 780.4s (16/16) FINISHED                                                                         docker:default
 => [backend_app internal] load build definition from Dockerfile                                                       0.0s
 => => transferring dockerfile: 1.04kB                                                                                 0.0s
 => [backend_app internal] load .dockerignore                                                                          0.0s
 => => transferring context: 2B                                                                                        0.0s
 => [backend_app internal] load metadata for docker.io/library/python:latest                                           2.1s
 => [backend_app auth] library/python:pull token for registry-1.docker.io                                              0.0s
 => [backend_app  1/10] FROM docker.io/library/python:latest@sha256:336461f63f4eb1100e178d5acbfea3d1a5b2a53dea88aa0f9  0.0s
 => [backend_app internal] load build context                                                                          0.0s
 => => transferring context: 5.79kB                                                                                    0.0s
 => CACHED [backend_app  2/10] WORKDIR /usr/backend                                                                    0.0s
 => CACHED [backend_app  3/10] RUN python3 -m venv /opt/venv                                                           0.0s
 => CACHED [backend_app  4/10] RUN apt-get update   && apt-get -y install netcat-traditional gcc postgresql   && apt-  0.0s
 => CACHED [backend_app  5/10] RUN pip install --upgrade pip                                                           0.0s
 => CACHED [backend_app  6/10] COPY ./requirements.txt ./                                                              0.0s
 => [backend_app  7/10] RUN pip3 install -r requirements.txt                                                         764.1s
 => [backend_app  8/10] COPY . .                                                                                       0.0s 
 => [backend_app  9/10] COPY ./entrypoint.sh .                                                                         0.0s 
 => [backend_app 10/10] RUN chmod +x /usr/backend/entrypoint.sh                                                        0.2s 
 => [backend_app] exporting to image                                                                                  13.9s 
 => => exporting layers                                                                                               13.9s 
 => => writing image sha256:1be9afc851ec4d7c63db113de67b03ce7e83ae384c62a13c666628886b66fdb2                           0.0s 
 => => naming to docker.io/library/chat-backend-backend_app                                                            0.0s
```


```
ec2-user@ip-10-110-145-52:~/workspace/chat-backend$ docker ps -a
CONTAINER ID   IMAGE                                      COMMAND                  CREATED         STATUS                    PORTS                                           NAMES
888cff94f750   chat-backend_backend_app                   "./entrypoint.sh uvi…"   7 minutes ago   Up 47 seconds             0.0.0.0:8001->8000/tcp, :::8001->8000/tcp       backend_app
5fdbd0436e4f   adminer                                    "entrypoint.sh php -…"   7 minutes ago   Up 47 seconds             0.0.0.0:8081->8080/tcp, :::8081->8080/tcp       db_editor
7a29cb7b5cc5   milvusdb/milvus:v2.3.12                    "/tini -- milvus run…"   7 minutes ago   Up 47 seconds             0.0.0.0:19530->19530/tcp, :::19530->19530/tcp   milvus-standalone
8def940fb143   ghcr.io/skywardai/rebel:v0.1.3             "/docker-entrypoint.…"   7 minutes ago   Up 48 seconds             0.0.0.0:80->80/tcp, :::80->80/tcp               frontend
ab6489118e59   gclub/llama.cpp:server--b1-a8d49d8         "/llama-server --hos…"   7 minutes ago   Up 48 seconds             0.0.0.0:8080->8080/tcp, :::8080->8080/tcp       llamacpp
a9120176f3fd   postgres:latest                            "docker-entrypoint.s…"   7 minutes ago   Up 48 seconds             0.0.0.0:5433->5432/tcp, :::5433->5432/tcp       db
fc537fd15551   quay.io/coreos/etcd:v3.5.0                 "etcd -advertise-cli…"   7 minutes ago   Up 48 seconds             2379-2380/tcp                                   milvus-etcd
29f1b45ffa8f   minio/minio:RELEASE.2020-12-03T00-03-10Z   "/usr/bin/docker-ent…"   7 minutes ago   Up 48 seconds (healthy)   9000/tcp                                        milvus-minio
```

## Step 5: Verify the setup

You can verify that the backend is running correctly by visiting the following URL in your browser:

```
http://localhost:80/
```

![](../assets/images/ui_ticketlist.png)

![](../assets/images/ui_chat.png)


## Stopping the Docker container

If you need to stop the Docker container for any reason, you can do so by running the following command:

```bash
make stop
```

```bash
vscode ➜ /workspaces/chat-backend (main) $ make stop
[+] Stopping 7/7
 ✔ Container milvus-standalone  Stopped          0.2s 
 ✔ Container frontend           Stopped          0.2s 
 ✔ Container db_editor          Stopped          0.1s 
 ✔ Container backend_app        Stopped          10.1s 
 ✔ Container milvus-etcd        Stopped          0.1s 
 ✔ Container milvus-minio       Stopped          0.6s 
 ✔ Container db                 Stopped          0.1s
```

# Troubleshooting

## Checking the logs

If you encounter any issues while setting up the backend, you can check the logs by running the following command:

```bash
make logs
```

This will display the logs for the backend container and help you identify any errors that may have occurred during the setup process.
