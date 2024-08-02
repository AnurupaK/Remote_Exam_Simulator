
# 🎓 Exam Simulator Project 

Welcome to the Exam Simulator Project! This interactive platform, powered by the Llama 8B model, offers a comprehensive environment for practicing and assessing knowledge across five subjects. With a built-in calculator and an AI teacher to review scores, it's designed to enhance the learning experience for students in Physics, Chemistry, Math, Biology, and Computer Science.

## 📂 Project Structure

```
Exam_simulator_project/
    AI_Service/
        llama_response.py
    Backend/
        app.py
    Frontend/
        static/
            style.css
            script.js
            images/
        templates/
            index.html
            different_subject_templates/
    .env
    requirements.txt
```

### Components

- **AI_Service/**: Contains `llama_response.py` for handling interactions with the Llama 8B model.
- **Backend/**: Includes `app.py` for managing the backend of the application.
- **Frontend/**: 
  - `static/`: Houses static files such as CSS, JavaScript, and images.
  - `templates/`: Contains HTML templates for the user interface.
- **.env**: Stores environment variables like the GROQ API key.
- **requirements.txt**: Lists the Python dependencies required for the project.

## 🚀 Getting Started

### Prerequisites

- Python 3.x
- Flask
- Gunicorn
- Llama 8B model
- GROQ API Key

### Setup

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd Exam_simulator_project
   ```

2. **Install Dependencies**

   Create a virtual environment and install the required packages:

   ```bash
   python -m venv venv
   venv\Scripts\activate    #On Windows
   pip install -r requirements.txt
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory and add your GROQ API key:

   ```plaintext
   GROQ_API_KEY=<your-groq-api-key>
   ```

4. **Run the Application**

   Start the backend server with Gunicorn:

   ```bash
   python app.py
   ```

   Ensure that the path to `app.py` is correct in the Gunicorn command.

## 🌟 Features

- **Exam Simulator**: Take exams in Physics, Chemistry, Math, Biology, and Computer Science.
- **Calculator**: A built-in calculator with a **Standard Mode** for performing basic and advanced calculations.
- **AI Teacher**: Provides feedback and reviews based on exam scores.

### Calculator - Standard Mode

The calculator in the project features a **Standard Mode** that supports:
- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Advanced functions (square roots, exponents, etc.)
- Memory functions (storing and recalling values)
- Unit conversions (if applicable)

This mode helps students with calculations during exams, facilitating focus on problem-solving.

## 🚧 Future Enhancements

- **User Authentication**: Implement a login page for user accounts and progress tracking.
- **Scorecard**: Add a dedicated scorecard to display detailed performance metrics.
- **Paper Generation**: Enhance AI capabilities to generate custom exam papers based on topics or difficulty.
- **Advanced Analytics**: Provide insights into user performance trends over time.
- **Interactive Elements**: Introduce practice quizzes, flashcards, and dynamic hints.

## 🌍 Deployment

The project is deployed on Render. Use the following command to start the application with Gunicorn during deployment:

```bash
gunicorn Backend.app:app
```

Ensure the deployment settings are correctly configured to point to the `Backend/app.py` file.

## 🤝 Contributing

Contributions are welcome! Please submit issues and pull requests on the [GitHub repository](<repository-url>).

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


https://github.com/user-attachments/assets/38249688-e56a-4907-bade-5aca6cb8f6a0


