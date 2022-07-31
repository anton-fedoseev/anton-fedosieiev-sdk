# Goals

- add typescript for type definitions
- split code to different levels of abstractions
- make code easy to read and maintain

# Architecture

SDK service uses independent API services, responsible to similar endpoints each. All API services extend base API service that incapsulates base request logic. Project is splitted to different folders to maintain levels of abstractions:

- apiServices
- constants
- typescript
- utils
