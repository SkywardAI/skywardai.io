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
git clone https://github.com/SkywardAI/chat-backend.git
```

## Step 2: Navigate to the project directory

Change into the project directory by running the following command:

```bash
cd chat-backend
```

{: .warning }

> Please go to check the latest version of frontend in the [releases](https://github.com/SkywardAI/chat-frontend/pkgs/container/rebel), and update it in docker-compose.yml file in [here](https://github.com/SkywardAI/chat-backend/blob/f73fff482b64cc45bde89fb5e7b4a8e5d1789481/docker-compose.yaml#L138).

## Step 3: Download model

After v0.1.7, we load model from local rather than download it behind system starting.

```
make minimal

ec2-user@ip-10-110-145-52:~/workspace/chat-backend$ make minimal
--2024-06-29 06:14:49--  https://huggingface.co/aisuko/gpt2-117M-gguf/resolve/main/ggml-model-Q4_K_M-v2.gguf?download=true
Resolving huggingface.co (huggingface.co)... 18.67.93.102, 18.67.93.63, 18.67.93.22, ...
Connecting to huggingface.co (huggingface.co)|18.67.93.102|:443... connected.
HTTP request sent, awaiting response... 302 Found
Location: https://cdn-lfs-us-1.huggingface.co/repos/ce/e4/cee486b6f34544253666bcac4195b7f8a90d3edfbf0bb21a33fa21d14267a8fd/6281d15f9663025df2dffc5f4a4a3850bd833b0d20e1d254bd0dd854f7c722a4?response-content-disposition=attachment%3B+filename*%3DUTF-8%27%27ggml-model-Q4_K_M-v2.gguf%3B+filename%3D%22ggml-model-Q4_K_M-v2.gguf%22%3B&Expires=1719900890&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcxOTkwMDg5MH19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy11cy0xLmh1Z2dpbmdmYWNlLmNvL3JlcG9zL2NlL2U0L2NlZTQ4NmI2ZjM0NTQ0MjUzNjY2YmNhYzQxOTViN2Y4YTkwZDNlZGZiZjBiYjIxYTMzZmEyMWQxNDI2N2E4ZmQvNjI4MWQxNWY5NjYzMDI1ZGYyZGZmYzVmNGE0YTM4NTBiZDgzM2IwZDIwZTFkMjU0YmQwZGQ4NTRmN2M3MjJhND9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPSoifV19&Signature=cxWjD1ZtWqA%7Eslr1y1%7EW16MkmGppYYvsLmYLER3aYtdviGzJZ9qbsDJoZgyvI01U6QXpjB8vKh8YEGqmj65AQnGbiptOypoYHRUSQg%7EZVG8zeP2TeklIOIQ6k%7E-bSw7FV7UPsG8huMrT%7ExqgbBT2Es3JQbDqNQ3u1ezY5OplxMlSoKdHsUkvFFqYdIZ7oMBNkrAOszowKek8712EgTu-wCM9xO46G4Z3BNQSRW4g1J%7EjbvfyArbXbnYMgEgfPU8jrViJPiPWNK6Yt86j3BN6hlg091AEu52I2bcCY36picS08duHvsL5uW95hbdkk4aVgOg3Ba3Sghxx6TtfVpokCA__&Key-Pair-Id=K24J24Z295AEI9 [following]
--2024-06-29 06:14:50--  https://cdn-lfs-us-1.huggingface.co/repos/ce/e4/cee486b6f34544253666bcac4195b7f8a90d3edfbf0bb21a33fa21d14267a8fd/6281d15f9663025df2dffc5f4a4a3850bd833b0d20e1d254bd0dd854f7c722a4?response-content-disposition=attachment%3B+filename*%3DUTF-8%27%27ggml-model-Q4_K_M-v2.gguf%3B+filename%3D%22ggml-model-Q4_K_M-v2.gguf%22%3B&Expires=1719900890&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcxOTkwMDg5MH19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy11cy0xLmh1Z2dpbmdmYWNlLmNvL3JlcG9zL2NlL2U0L2NlZTQ4NmI2ZjM0NTQ0MjUzNjY2YmNhYzQxOTViN2Y4YTkwZDNlZGZiZjBiYjIxYTMzZmEyMWQxNDI2N2E4ZmQvNjI4MWQxNWY5NjYzMDI1ZGYyZGZmYzVmNGE0YTM4NTBiZDgzM2IwZDIwZTFkMjU0YmQwZGQ4NTRmN2M3MjJhND9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPSoifV19&Signature=cxWjD1ZtWqA%7Eslr1y1%7EW16MkmGppYYvsLmYLER3aYtdviGzJZ9qbsDJoZgyvI01U6QXpjB8vKh8YEGqmj65AQnGbiptOypoYHRUSQg%7EZVG8zeP2TeklIOIQ6k%7E-bSw7FV7UPsG8huMrT%7ExqgbBT2Es3JQbDqNQ3u1ezY5OplxMlSoKdHsUkvFFqYdIZ7oMBNkrAOszowKek8712EgTu-wCM9xO46G4Z3BNQSRW4g1J%7EjbvfyArbXbnYMgEgfPU8jrViJPiPWNK6Yt86j3BN6hlg091AEu52I2bcCY36picS08duHvsL5uW95hbdkk4aVgOg3Ba3Sghxx6TtfVpokCA__&Key-Pair-Id=K24J24Z295AEI9
Resolving cdn-lfs-us-1.huggingface.co (cdn-lfs-us-1.huggingface.co)... 18.67.110.85, 18.67.110.3, 18.67.110.50, ...
Connecting to cdn-lfs-us-1.huggingface.co (cdn-lfs-us-1.huggingface.co)|18.67.110.85|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 112858624 (108M) [application/octet-stream]
Saving to: ‘volumes/models/gpt2-minimal-Q4_K_M-v2.gguf’

volumes/models/gpt2-minimal-Q4 100%[==================================================>] 107.63M   344MB/s    in 0.3s    

2024-06-29 06:14:50 (344 MB/s) - ‘volumes/models/gpt2-minimal-Q4_K_M-v2.gguf’ saved [112858624/112858624]
```

## Step 4: Build and run the images

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

Here we install tons of dependencies more detail see [requirements.txt](https://github.com/SkywardAI/chat-backend/blob/main/backend/requirements.txt), so it may take a while to build the image.


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


This will stop the backend container and clean up any resources that were created during the setup process. You can only stop the containers by using

```bash
make remove
```


```bash
vscode ➜ /workspaces/chat-backend (main) $ make remove
[+] Running 7/6
 ✔ Container backend_app         Removed         10.1s 
 ✔ Container milvus-standalone   Removed         0.0s 
 ✔ Container db_editor           Removed         0.1s 
 ✔ Container milvus-etcd         Removed         0.0s 
 ✔ Container milvus-minio        Removed         0.0s 
 ✔ Container db                  Removed         0.1s 
 ✔ Network chat-backend_default  Removed         0.0s
```


# Troubleshooting

## Checking the logs

If you encounter any issues while setting up the backend, you can check the logs by running the following command:

```bash
make logs
```

This will display the logs for the backend container and help you identify any errors that may have occurred during the setup process.
