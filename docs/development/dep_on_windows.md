---
layout: default
title: Development on Windows
parent: Development
---


# Windows

## Backend Environment

Before development, please make sure you have installed the Python environment (3.11), as well as Postgre, adminer, milvus, minio, etcd. If not, please refer to the README of the chat-backend repository for installation.

### Install dependencies


```bash
pip3 install -r https://raw.githubusercontent.com/SkywardAI/kirin/main/backend/requirements.txt
```

### Configuring Environment Variables

```bash
cp .env.example .env
```

Modify the .env content as follows:
```bash
BACKEND_SERVER_HOST=127.0.0.1
POSTGRES_HOST=127.0.0.1
MILVUS_HOST=127.0.0.1
```

![](../../assets/images/image.png)

### How to enter debug mode in Windows?

**Run => Start Degging**

![](../../assets/images/image-1.png)

![](../../assets/images/image-2.png)

**Open swagger for restful interface testing**

![](../../assets/images/image-4.png)
![](../../assets/images/image-3.png)

Done!

I wish you a happy development~
