# AthleteAI Process Flow

## 1. User Journey Flow

### Tools Used:
<table>
  <tr>
    <td><img src="IMAGE_LINK_FOR_FIREBASE" width="100"/></td>
    <td><img src="IMAGE_LINK_FOR_GOOGLE_AUTH" width="100"/></td>
    <td><img src="IMAGE_LINK_FOR_GEMINI_AI" width="100"/></td>
    <td><img src="IMAGE_LINK_FOR_DATABASE" width="100"/></td>
  </tr>
</table>

```mermaid
graph TD
    A[User Lands on Landing Page] --> B{Has Account?}
    B -->|No| C[Google Sign Up]
    B -->|Yes| D[Google Sign In]
    C --> E[Initial Assessment]
    D --> F{Has Assessment?}
    F -->|No| E
    F -->|Yes| G{Has Yo-Yo Test?}
    E --> G
    G -->|No| H[Take Yo-Yo Test]
    G -->|Yes| I[Dashboard]
    H --> I

    I --> J[Access Features]
    J --> K[Diet Plan]
    J --> L[Injury Prevention]
    J --> M[Mental Health Chat]
    J --> N[Performance Tracking]
```

## 2. Data Flow

### Tools Used:
<table>
  <tr>
    <td><img src="IMAGE_LINK_FOR_FIREBASE_AUTH" width="100"/></td>
    <td><img src="IMAGE_LINK_FOR_FIRESTORE_DB" width="100"/></td>
    <td><img src="IMAGE_LINK_FOR_GEMINI_API" width="100"/></td>
    <td><img src="IMAGE_LINK_FOR_AI_PROCESSING" width="100"/></td>
  </tr>
</table>

```mermaid
graph LR
    A[User Input] --> B[Firebase Auth]
    B --> C[Firestore Database]
    C --> D[AI Processing]
    D --> E[Gemini API]
    E --> F[Response Processing]
    F --> G[UI Update]
    G --> H[User Feedback]
```

# AthleteAI System Architecture

## 1. High-Level Architecture

### Tools Used:
<table>
  <tr>
    <td><img src="IMAGE_LINK_FOR_FRONTEND" width="100"/></td>
    <td><img src="IMAGE_LINK_FOR_BACKEND" width="100"/></td>
    <td><img src="IMAGE_LINK_FOR_AUTH_LAYER" width="100"/></td>
    <td><img src="IMAGE_LINK_FOR_DATABASE" width="100"/></td>
  </tr>
</table>

```mermaid
graph TD
    subgraph "Frontend Layer"
        A[Landing Page]
        B[Dashboard]
        C[Assessment Module]
        D[Feature Modules]
    end

    subgraph "Authentication Layer"
        E[Firebase Auth]
        F[Google OAuth]
    end

    subgraph "Data Layer"
        G[Firestore]
        H[Local Storage]
    end

    subgraph "AI Layer"
        I[Gemini API]
        J[Response Processing]
    end

    A --> E
    B --> G
    C --> G
    D --> G
    E --> F
    G --> I
    I --> J
    J --> D
```

## 2. Security Architecture

### Security Tools Used:
<table>
  <tr>
    <td><img src="https://github.com/CoderYUI/athelete-managment/blob/00f69846e1373f0cc9f5b00d3cec3249b30869d8/docs/icons/1_vSuf2h3TCpcUuTwsMzsI_w.png" width="100"/></td>
    <td><img src="IMAGE_LINK_FOR_FIREBASE_RULES" width="100"/></td>
    <td><img src="IMAGE_LINK_FOR_ENCRYPTION" width="100"/></td>
    <td><img src="IMAGE_LINK_FOR_ACCESS_CONTROL" width="100"/></td>
  </tr>
</table>

```mermaid
graph TD
    subgraph "Security Layers"
        A[OAuth 2.0]
        B[Firebase Rules]
        C[API Keys]
    end

    subgraph "Data Protection"
        D[Encryption]
        E[Access Control]
        F[Rate Limiting]
    end

    subgraph "Validation"
        G[Input Sanitization]
        H[Request Validation]
        I[Response Validation]
    end

    A --> D
    B --> E
    C --> F
    D --> G
    E --> H
    F --> I
```

---

## **Instructions:**
1. **Replace `IMAGE_LINK_FOR_*`** with the actual image links after uploading icons to GitHub.
2. **Ensure all tools & services have relevant icons.**
3. **Commit the updated Markdown file in your GitHub repository.**

This will create a visually appealing documentation with images and diagrams! 🚀
