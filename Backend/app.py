from flask import Flask,render_template,request,jsonify
import os
import sys
app = Flask(__name__, template_folder='../Frontend/templates',static_folder='../Frontend/static')
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'modules')))
from answerBank import Physics,Chemistry,Math,Biology,Computer
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'AI_Service')))
from llama_response import generate_response

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/physics.html')
def phy():
    return render_template('physics.html')

@app.route('/chemistry.html')
def chem():
    return render_template('chemistry.html')

@app.route('/math.html')
def mat():
    return render_template('math.html')

@app.route('/biology.html')
def bio():
    return render_template('biology.html')

@app.route('/computer.html')
def com():
    return render_template('computer.html')


@app.route('/api/bot_checking_answers',methods=['POST'])
def checkanswers():
    
    data = request.get_json()
    questions = data['questionBank']
    options = data['optionBank']
    useranswer = data['userResponses']
    subject = data['subject']
    
    print(questions)
    print(options)
    print(useranswer)
    print(subject)
    
    if subject == 'Physics':
        actualAnswer = Physics
        print(actualAnswer)
        score = 0
        for user_ans,actual_ans in zip(useranswer.values(),actualAnswer.values()):
            print(user_ans,actual_ans)
            if(user_ans == actual_ans):
                score = score + 1
    
    elif subject == 'Chemistry':
        actualAnswer = Chemistry
        print(actualAnswer)
        score = 0
        for user_ans,actual_ans in zip(useranswer.values(),actualAnswer.values()):
            print(user_ans,actual_ans)
            if(user_ans == actual_ans):
                score = score + 1
    
    elif subject == 'Math':
        actualAnswer = Math
        print(actualAnswer)
        score = 0
        for user_ans,actual_ans in zip(useranswer.values(),actualAnswer.values()):
            print(user_ans,actual_ans)
            if(user_ans == actual_ans):
                score = score + 1
                
    elif subject == 'Biology':
        actualAnswer = Biology
        print(actualAnswer)
        score = 0
        for user_ans,actual_ans in zip(useranswer.values(),actualAnswer.values()):
            print(user_ans,actual_ans)
            if(user_ans == actual_ans):
                score = score + 1
                
    elif subject == 'Computer':
        actualAnswer = Computer
        print(actualAnswer)
        score = 0
        for user_ans,actual_ans in zip(useranswer.values(),actualAnswer.values()):
            print(user_ans,actual_ans)
            if(user_ans == actual_ans):
                score = score + 1
    
    prompt = f'A student has given an exam today for {subject} subject. Student\'s name is Anu. These are the set of questions {questions}. These are options for the questions {options}. These are actual answers {actualAnswer}. These are the answers that the student has written {useranswer}. The student has scored {score}/10. You have to give a brief report about student\'s performance in 210 words only.'
    
    response = generate_response(1,prompt)
    return jsonify({'score':score,'bot_response':response})


@app.route('/api/chat',methods=['POST'])
def chatBot():
    data = request.get_json()
    userTxt = data['user_text']
    
    response = generate_response(1,userTxt)
    print(response)
    return jsonify({'chatRes':response})
    
    
    
if __name__ == "__main__":
    app.run(debug=True)


