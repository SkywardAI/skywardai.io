export const projects = {
    Voyager: { 
        description: "Voyager is a project written by Node.JS, to build OpenAI-like APIs on users' local machine. It comes with a powerful CLI and easy-setup commands and docker containers for users to quickly start their own AI server." ,
        badges: [
            "https://github.com/SkywardAI/voyager/actions/workflows/linter-builder-checker.yml/badge.svg",
            "https://github.com/SkywardAI/voyager/actions/workflows/release-drafter.yml/badge.svg",
            "https://github.com/SkywardAI/voyager/actions/workflows/release-image.yml/badge.svg",
            "https://img.shields.io/badge/Node.js-5FA04E?logo=Node.js&logoColor=white"
        ],
        urls: [
            {name: "GitHub", url: "https://github.com/SkywardAI/voyager"},
            {name: "K8SUG Official Website", url: "https://k8sug.com"}
        ],
        videos: [
            "https://github.com/user-attachments/assets/fa7059c2-309e-486a-a28a-45867613c84b"
        ]
    },
    Kirin: {
        description: "Kirin is a bakend project written by python, comes with a complete solution with frontend as a microservice based on Microsoft Phi3-mini model. It got a one-click setup command and you can start chat with your AI in no time.",
        badges: [
            "https://github.com/SkywardAI/chat-backend/actions/workflows/linter-and-builder.yaml/badge.svg",
            "https://github.com/SkywardAI/chat-backend/actions/workflows/release-drafter.yml/badge.svg",
            "https://github.com/SkywardAI/kirin/actions/workflows/release-image.yaml/badge.svg",
            "https://github.com/SkywardAI/kirin/actions/workflows/github-code-scanning/codeql/badge.svg",
            "https://img.shields.io/badge/Python-3776AB?logo=Python&logoColor=white"
        ],
        urls: [
            {name: "GitHub", url: "https://github.com/SkywardAI/kirin"},
        ],
        images: [
            "https://github.com/SkywardAI/kirin/raw/main/imgs/SkywardAI(Mind%20Map)%20-%20APIs%20aggregator.svg"
        ],
        videos: [
            "https://github.com/user-attachments/assets/3890b4cd-392b-489f-ad48-4e9692d4dc15"
        ]
    },
    Rebel: {
        description: "Rebel is the frontend built for Kirin project. It uses only Native JavaScript so it can run in the most efficient way, on any platform.",
        badges: [
            "https://github.com/SkywardAI/rebel/actions/workflows/linter-builder-checker.yml/badge.svg",
            "https://github.com/SkywardAI/rebel/actions/workflows/github-code-scanning/codeql/badge.svg",
            "https://github.com/SkywardAI/rebel/actions/workflows/release-drafter.yml/badge.svg",
            "https://github.com/SkywardAI/rebel/actions/workflows/release-image.yml/badge.svg",
            "https://img.shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=white"
        ],
        urls: [
            {name: "GitHub", url: "https://github.com/SkywardAI/rebel"},
        ]
    },
}

export const modelStatus = {
    PENDING: 0,
    NOT_DOWNLOAD: 1,
    DOWNLOADING: 2,
    NOT_LOADED: 3,
    LOADING: 4,
    LOADED: 5
}