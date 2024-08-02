// let count = 0
// let stopTyping = false;
// document.addEventListener('DOMContentLoaded', async function () {
//     // This is for changing the theme of the calculator
//     const calculator_area = document.querySelector('.calculator_area');
//     const theme_btn = document.querySelector('.theme_btn');
//     const items = document.querySelectorAll('.item');
//     const numbers = document.querySelector('.numbers');

//     //AI Screen
//     const ai_screen = document.querySelector('.screen')
//     const stop = document.querySelector('.stop')

//     if (calculator_area && theme_btn && items && numbers) {
//         if (!calculator_area.classList.contains('theme_light') && !calculator_area.classList.contains('theme_dark')) {
//             calculator_area.classList.add('theme_light');
//         }

//         theme_btn.addEventListener('click', function () {
//             calculator_area.classList.toggle('theme_dark');
//             calculator_area.classList.toggle('theme_light');
//         });

//         // Taking input in the calculator
//         items.forEach(item => {
//             item.addEventListener('click', async function () {
//                 await handleItem(item, numbers);
//             });
//         });

//         let backspace = document.querySelector('.backspace')
//         backspace.addEventListener('click', async function () {
//             if (numbers.innerHTML) {
//                 numbers.innerHTML = numbers.innerHTML.slice(0, -1);
//                 count = count - 1
//             }
//             else {
//                 numbers.innerHTML = 'Nothing to delete'
//             }
//         })
//     }

//     ///Topic rendering 
//     const topicPhysics = document.querySelector('.topic1');

//     topicPhysics.addEventListener('click', function () {
//         fetch('physics.html')
//             .then(response => response.text())
//             .then(data => {
//                 const questionScreen = document.querySelector('.question_screen');
//                 questionScreen.classList.add('added');
//                 questionScreen.innerHTML = data;
//             })
//             .catch(error => {
//                 console.error('Error loading physics questions:', error);
//             });
//     });

//     const topicChemistry = document.querySelector('.topic2');

//     topicChemistry.addEventListener('click', function () {
//         fetch('chemistry.html')
//             .then(response => response.text())
//             .then(data => {
//                 const questionScreen = document.querySelector('.question_screen');
//                 questionScreen.classList.add('added');
//                 questionScreen.innerHTML = data;
//             })
//             .catch(error => {
//                 console.error('Error loading physics questions:', error);
//             });
//     });

//     const topicMath = document.querySelector('.topic3');

//     topicMath.addEventListener('click', function () {
//         fetch('math.html')
//             .then(response => response.text())
//             .then(data => {
//                 const questionScreen = document.querySelector('.question_screen');
//                 questionScreen.classList.add('added');
//                 questionScreen.innerHTML = data;
//             })
//             .catch(error => {
//                 console.error('Error loading physics questions:', error);
//             });
//     });

//     const topicBiology = document.querySelector('.topic4');

//     topicBiology.addEventListener('click', function () {
//         fetch('biology.html')
//             .then(response => response.text())
//             .then(data => {
//                 const questionScreen = document.querySelector('.question_screen');
//                 questionScreen.classList.add('added');
//                 questionScreen.innerHTML = data;
//             })
//             .catch(error => {
//                 console.error('Error loading physics questions:', error);
//             });
//     });

//     const topicComputer = document.querySelector('.topic5');

//     topicComputer.addEventListener('click', function () {
//         fetch('computer.html')
//             .then(response => response.text())
//             .then(data => {
//                 const questionScreen = document.querySelector('.question_screen');
//                 questionScreen.classList.add('added');
//                 questionScreen.innerHTML = data;
//             })
//             .catch(error => {
//                 console.error('Error loading physics questions:', error);
//             });
//     });

//     ///Submit button functionality
//     const questionBank = {};
//     const optionBank = {};
//     const submit = document.querySelector('.submit_btn');
//     const screen = document.querySelector('.question_screen');

//     submit.addEventListener('click', async function () {
//         if (screen.classList.contains('added')) {


//             const questions = document.querySelectorAll('.question');
//             // console.log(document.querySelector('.question').classList)
//             let subject = Array.from(document.querySelector('.question').classList)
//             console.log(`Questions appeared for ${subject[2]}`);


//             let questionNo = 1;

//             questions.forEach((value) => {
//                 // Extract the question text
//                 questionBank[`Question${questionNo}`] = value.firstElementChild.textContent;

//                 // Extract the options
//                 const labels = value.children[1].children;
//                 const labelList = [];
//                 for (let label of labels) {
//                     // Push each option's value into the array
//                     labelList.push(label.firstElementChild.value);
//                 }

//                 // Store the options with the correct key
//                 optionBank[`Option${questionNo}`] = labelList;

//                 questionNo++;
//             });



//             // Collect user responses
//             const userResponses = {};
//             for (let i = 1; i <= questions.length; i++) {
//                 // Get the selected option for each question
//                 const selectedOption = document.querySelector(`input[name="Q${i}"]:checked`);
//                 if (selectedOption) {
//                     userResponses[`User${i}`] = selectedOption.value;
//                 } else {
//                     userResponses[`User${i}`] = null; // or any default value for unselected answers
//                 }
//             }

//             console.log(questionBank); // Log the final question bank
//             console.log(optionBank); // Log the options bank
//             console.log(userResponses); // Log user responses


//             let { score, bot_response } = await AnswerCheck(questionBank, optionBank, userResponses, subject[2])


//             console.log(score)

//             let bot = document.createElement('div');
//             bot.className = 'bot msg'
//             setTimeout(async () => {
//                 ai_screen.appendChild(bot);
//                 bot.innerHTML = "<span class='emoji' style='font-size: 30px;'>🧑🏻‍🏫</span> ";

//                 stop.addEventListener('click', function () {
//                     stopTyping = true;
//                 });

//                 stopTyping = false; // Reset the stop flag
//                 await typeEffect(bot, bot_response);
//             },1500)

//         } else {
//             console.error("No questions appeared yet");
//         }
//     });

// });

// async function handleItem(item, numbers) {
//     if (item.innerHTML === 'C') {
//         numbers.innerHTML = '';
//         if (document.querySelector('.output')) {
//             document.querySelector('.output').innerHTML = ''
//         }
//         count = 0;
//     } else if (item.innerHTML === '=') {
//         await Calculator(numbers.innerHTML);
//         count = 0
//     } else if (item.innerHTML === '+/−') {
//         if (count < 30) {
//             count += 1
//             toggleSign(numbers);
//             console.log(count)
//         }
//     } else if (item.innerHTML === '%') {
//         if (count < 30) {
//             numbers.innerHTML += '%*';
//             count += 1
//             console.log(count)
//         }
//     }
//     else {
//         if (count < 30) {
//             numbers.innerHTML += item.innerHTML
//             count += 1
//             console.log(count)
//         }
//     }
// }

// function toggleSign(numbers) {
//     let currentContent = numbers.innerHTML;
//     if (currentContent.endsWith('+')) {
//         numbers.innerHTML = currentContent.slice(0, -1) + '−';
//     } else if (currentContent.endsWith('−')) {
//         numbers.innerHTML = currentContent.slice(0, -1) + '+';
//     } else {
//         numbers.innerHTML += '+';
//     }
// }

// async function Calculator(numberAdded) {
//     console.log(numberAdded);
//     try {
//         // Evaluate the expression using math.js
//         if (numberAdded) {
//             let result = math.evaluate(numberAdded);
//             result = String(result)
//             document.querySelector('.output').innerHTML = result.substring(0, 9);
//         }
//         else {
//             document.querySelector('.output').innerHTML = "Nothing to evaluate";
//         }
//     } catch (error) {
//         // Handle errors (e.g., invalid expressions)
//         console.error('Error evaluating expression:', error);
//         document.querySelector('.output').innerHTML = 'Error';
//     }
// }


// async function AnswerCheck(questionBank, optionBank, userResponses, subject) {
//     try {
//         let response = await fetch('/api/bot_checking_answers', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ questionBank, optionBank, userResponses, subject })
//         })
//         let data = await response.json()
//         console.log(data)
//         return {
//             score: data.score,
//             bot_response: data.bot_response
//         }

//     }
//     catch (error) {
//         console.error("Bot was not able to check your answers")
//     }

// }

// async function typeEffect(element, text) {
//     const typingSpeed = 50;
//     let i = 0;
//     while (i < text.length && !stopTyping) {
//         element.innerHTML += text.charAt(i);
//         i++;
//         await new Promise((resolve) => setTimeout(resolve, typingSpeed));
//     }
// }

let count = 0;
let stopTyping = false;
let ready_to_chat = false;
document.addEventListener('DOMContentLoaded', async function () {
    const subheading = document.querySelector('.subheading')
    setTimeout(async () => {
        await typeEffect(subheading, "Wanna try out your science skills?😉")
        }, 2000)

    // This is for changing the theme of the calculator
    const calculator_area = document.querySelector('.calculator_area');
    const theme_btn = document.querySelector('.theme_btn');
    const items = document.querySelectorAll('.item');
    const numbers = document.querySelector('.numbers');

    //AI Screen
    const ai_screen = document.querySelector('.screen')
    const stop = document.querySelector('.stop')
    const send = document.querySelector('.sendbtn')

    if (calculator_area && theme_btn && items && numbers) {
        if (!calculator_area.classList.contains('theme_light') && !calculator_area.classList.contains('theme_dark')) {
            calculator_area.classList.add('theme_light');
        }

        theme_btn.addEventListener('click', function () {
            calculator_area.classList.toggle('theme_dark');
            calculator_area.classList.toggle('theme_light');
        });

        // Taking input in the calculator
        items.forEach(item => {
            item.addEventListener('click', async function () {
                await handleItem(item, numbers);
            });
        });

        let backspace = document.querySelector('.backspace')
        backspace.addEventListener('click', async function () {
            if (numbers.innerHTML) {
                numbers.innerHTML = numbers.innerHTML.slice(0, -1);
                count = count - 1
            }
            else {
                numbers.innerHTML = 'Nothing to delete'
            }
        })
    }

    ///Topic rendering 
    const topicPhysics = document.querySelector('.topic1');

    topicPhysics.addEventListener('click', function () {
        fetch('physics.html')
            .then(response => response.text())
            .then(data => {
                const questionScreen = document.querySelector('.question_screen');
                questionScreen.classList.add('added');
                questionScreen.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading physics questions:', error);
            });
    });

    const topicChemistry = document.querySelector('.topic2');

    topicChemistry.addEventListener('click', function () {
        fetch('chemistry.html')
            .then(response => response.text())
            .then(data => {
                const questionScreen = document.querySelector('.question_screen');
                questionScreen.classList.add('added');
                questionScreen.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading physics questions:', error);
            });
    });

    const topicMath = document.querySelector('.topic3');

    topicMath.addEventListener('click', function () {
        fetch('math.html')
            .then(response => response.text())
            .then(data => {
                const questionScreen = document.querySelector('.question_screen');
                questionScreen.classList.add('added');
                questionScreen.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading physics questions:', error);
            });
    });

    const topicBiology = document.querySelector('.topic4');

    topicBiology.addEventListener('click', function () {
        fetch('biology.html')
            .then(response => response.text())
            .then(data => {
                const questionScreen = document.querySelector('.question_screen');
                questionScreen.classList.add('added');
                questionScreen.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading physics questions:', error);
            });
    });

    const topicComputer = document.querySelector('.topic5');

    topicComputer.addEventListener('click', function () {
        fetch('computer.html')
            .then(response => response.text())
            .then(data => {
                const questionScreen = document.querySelector('.question_screen');
                questionScreen.classList.add('added');
                questionScreen.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading physics questions:', error);
            });
    });

    ///Submit button functionality
    const questionBank = {};
    const optionBank = {};
    const submit = document.querySelector('.submit_btn');
    const screen = document.querySelector('.question_screen');

    submit.addEventListener('click', async function () {
        if (screen.classList.contains('added')) {


            const questions = document.querySelectorAll('.question');
            // console.log(document.querySelector('.question').classList)
            let subject = Array.from(document.querySelector('.question').classList)
            console.log(`Questions appeared for ${subject[2]}`);


            let questionNo = 1;

            questions.forEach((value) => {
                // Extract the question text
                questionBank[`Question${questionNo}`] = value.firstElementChild.textContent;

                // Extract the options
                const labels = value.children[1].children;
                const labelList = [];
                for (let label of labels) {
                    // Push each option's value into the array
                    labelList.push(label.firstElementChild.value);
                }

                // Store the options with the correct key
                optionBank[`Option${questionNo}`] = labelList;

                questionNo++;
            });



            // Collect user responses
            const userResponses = {};
            for (let i = 1; i <= questions.length; i++) {
                // Get the selected option for each question
                const selectedOption = document.querySelector(`input[name="Q${i}"]:checked`);
                if (selectedOption) {
                    userResponses[`User${i}`] = selectedOption.value;
                } else {
                    userResponses[`User${i}`] = null; // or any default value for unselected answers
                }
            }

            console.log(questionBank); // Log the final question bank
            console.log(optionBank); // Log the options bank
            console.log(userResponses); // Log user responses


            let { score, bot_response } = await AnswerCheck(questionBank, optionBank, userResponses, subject[2])
            if (bot_response) {

                ready_to_chat = true
            }

            console.log(score)

            let bot = document.createElement('div');
            bot.className = 'bot msg'
            setTimeout(async () => {
                ai_screen.innerHTML = ''
                ai_screen.appendChild(bot);
                bot.innerHTML = "<span class='emoji' style='font-size: 30px;'>🧑🏻‍🏫</span> ";

                stop.addEventListener('click', function () {
                    stopTyping = true;
                });

                stopTyping = false; // Reset the stop flag
                await typeEffect(bot, bot_response);

            }, 1000)


        } else {
            console.error("No questions appeared yet");
        }
    });

    send.addEventListener('click', async function () {


        if (ready_to_chat == true) {
            const userTxt = document.querySelector('#user_input')
            let user = document.createElement('div');
            user.className = 'user msg'
            ai_screen.appendChild(user);
            user.innerHTML = "<span class='emoji' style='font-size: 30px;'>👧🏻</span> " + userTxt.value

            chatRes = await chatBot(userTxt.value)

            setTimeout(async () => {

                userTxt.value = ''
                let bot = document.createElement('div');
                bot.className = 'bot msg'
                ai_screen.appendChild(bot);
                bot.innerHTML = "<span class='emoji' style='font-size: 30px;'>🧑🏻‍🏫</span> "
                stop.addEventListener('click', function () {
                    stopTyping = true;
                });
                stopTyping = false;
                await typeEffect(bot, chatRes)
            }, 1000);
        }
        else {
            let bot = document.createElement('div');
            bot.className = 'bot msg'
            ai_screen.appendChild(bot);
            bot.innerHTML = "<span class='emoji' style='font-size: 30px;'>🧑🏻‍🏫</span> "
            await typeEffect(bot, "Hi! I will definitely help you. Can you take the exam first?😊")

        }
    })

});

async function handleItem(item, numbers) {
    if (item.innerHTML === 'C') {
        numbers.innerHTML = '';
        if (document.querySelector('.output')) {
            document.querySelector('.output').innerHTML = ''
        }
        count = 0;
    } else if (item.innerHTML === '=') {
        await Calculator(numbers.innerHTML);
        count = 0
    } else if (item.innerHTML === '+/−') {
        if (count < 30) {
            count += 1
            toggleSign(numbers);
            console.log(count)
        }
    } else if (item.innerHTML === '%') {
        if (count < 30) {
            numbers.innerHTML += '%*';
            count += 1
            console.log(count)
        }
    }
    else {
        if (count < 30) {
            numbers.innerHTML += item.innerHTML
            count += 1
            console.log(count)
        }
    }
}

function toggleSign(numbers) {
    let currentContent = numbers.innerHTML;
    if (currentContent.endsWith('+')) {
        numbers.innerHTML = currentContent.slice(0, -1) + '−';
    } else if (currentContent.endsWith('−')) {
        numbers.innerHTML = currentContent.slice(0, -1) + '+';
    } else {
        numbers.innerHTML += '+';
    }
}

async function Calculator(numberAdded) {
    console.log(numberAdded);
    try {
        // Evaluate the expression using math.js
        if (numberAdded) {
            let result = math.evaluate(numberAdded);
            result = String(result)
            document.querySelector('.output').innerHTML = result.substring(0, 9);
        }
        else {
            document.querySelector('.output').innerHTML = "Nothing to evaluate";
        }
    } catch (error) {
        // Handle errors (e.g., invalid expressions)
        console.error('Error evaluating expression:', error);
        document.querySelector('.output').innerHTML = 'Error';
    }
}


async function AnswerCheck(questionBank, optionBank, userResponses, subject) {
    try {
        let response = await fetch('/api/bot_checking_answers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ questionBank, optionBank, userResponses, subject })
        })
        let data = await response.json()
        console.log(data)
        return {
            score: data.score,
            bot_response: data.bot_response
        }

    }
    catch (error) {
        console.error("Bot was not able to check your answers")
    }

}

async function typeEffect(element, text) {
    const typingSpeed = 50;
    let i = 0;
    while (i < text.length && !stopTyping) {
        element.innerHTML += text.charAt(i);
        i++;
        await new Promise((resolve) => setTimeout(resolve, typingSpeed));
    }
}


async function chatBot(user_text) {
    try {
        let response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'user_text': user_text })
        })
        let data = await response.json()
        console.log(data)
        return data.chatRes;

    }
    catch (error) {
        console.error("Bot was not able to chat")
    }
}