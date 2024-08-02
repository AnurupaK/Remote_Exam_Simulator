# import os
# from dotenv import load_dotenv
# from groq import Groq
# load_dotenv()

# api_key = os.getenv("GROQ_API_KEY")
# if not api_key:
#     raise ValueError("API key for Groq AI is not set in the environment variables.")

# client = Groq()

# def generate_response(prompt):
#     response = client.chat.completions.create(
#         model = 'llama-3.1-8b-instant',
#         messages= [
#             {
#             "role": "system",
#             "content": "Your role is to be an effective and supportive teacher who maintains a strict but polite demeanor. Your primary goal is to assist students in understanding and mastering their studies while upholding high standards of academic excellence."
#             },
#             {
#             "role": "user",
#             "content": prompt
#             } 
#         ],
        
#          temperature=1,
#          max_tokens=500,
#          top_p=1
#     )

#     return response.choices[0].message.content
 




# not_done_yet = True
# while(not_done_yet):
#     count = count + 1
#     user_input = input("Ask the bot: ")
#     bot_response = generate_response(user_input)
#     print("Bot said: ",bot_response)
#     wish = input("Do you want to continue?(yes/no)")
#     if wish.lower() == 'yes':
#         not_done_yet = True
#     else:
#         not_done_yet = False


import os
from dotenv import load_dotenv
from groq import Groq
load_dotenv()

api_key = os.getenv("GROQ_API_KEY")
if not api_key:
    raise ValueError("API key for Groq AI is not set in the environment variables.")

from groq import Groq

# Initialize the Groq client
client = Groq()

# Global dictionary to store conversation history
conversation_history = {}

def generate_response(session_id, prompt):
    # Retrieve the conversation history for the given session
    history = conversation_history.get(session_id, [])

    # Add the new user prompt to the history
    history.append({"role": "user", "content": prompt})

    # Generate AI response
    response = client.chat.completions.create(
        model='llama-3.1-8b-instant',
        messages=[
            {"role": "system", "content": "Your role is to be an effective and supportive teacher who maintains a strict but polite demeanor. Your primary goal is to assist students in understanding and mastering their studies while upholding high standards of academic excellence."},
            *history  # Include the conversation history
        ],
        temperature=1,
        max_tokens=500,
        top_p=1
    )

    ai_message = response.choices[0].message.content

    # Add the AI response to the history
    history.append({"role": "assistant", "content": ai_message})

    # Store updated history
    conversation_history[session_id] = history

    return ai_message


# print(conversation_history)
# not_done_yet = True
# while(not_done_yet):

#     user_input = input("Ask the bot: ")
#     bot_response = generate_response(1,user_input)
#     print("Bot said: ",bot_response)
#     wish = input("Do you want to continue?(yes/no)")
#     if wish.lower() == 'yes':
#         not_done_yet = True
#     else:
#         not_done_yet = False
        

print(conversation_history)