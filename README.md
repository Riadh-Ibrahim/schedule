graph TD
    A[Client] -->|HTTP Requests| B[API Gateway]
    B --> C[User Controller]
    B --> D[Reservation Controller]
    
    C -->|POST /register| E[Register User]
    C -->|POST /login| F[Login User]
    C -->|GET /api/user/:id| G[Fetch User Data]
    C -->|PUT /api/user/:id| H[Update User Profile]
    C -->|POST /api/validate-old-password| I[Validate Old Password]
    
    D -->|POST /api/execute-ansible| J[Execute Ansible Script]

    F -->|JWT Token| K[Authorization Middleware]
    G -->|JWT Token| K
    H -->|JWT Token| K
    I -->|JWT Token| K
    J -->|JWT Token| K
    
    K --> L[User Model]
    K --> M[Reservation Model]
