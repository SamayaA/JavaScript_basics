
function getStatistic(event, questionId){
    alert("Спасибо, ваш голос засчитан!")
    let result = new XMLHttpRequest();

    result.addEventListener("readystatechange", ()=>{
        if (result.readyState == result.DONE){
            let stats = Array.from(JSON.parse(result.response)["stat"]);
            let answers = event.target.closest("#poll__answers");
            answers.innerText = '';
            sum = 0;
            stats.forEach(element=> sum += element.votes)
            stats.forEach(element => {
                answers.innerText += `
                ${element.answer}: ${Math.round((element.votes / sum) * 100)* 100/100}%
                `
            })
        }
    })

    result.open("POST", 'https://netology-slow-rest.herokuapp.com/poll.php');
    result.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    result.send(`vote=${questionId}&answer=${event.target.value}`);
    event.stopPropagation();
    event.preventDefault()
}

function createPoll(id, title, answers){
    const poll = document.querySelector(".poll");
    poll.setAttribute("value", id);

    const pollTitle = poll.querySelector("#poll__title");
    pollTitle.innerText = title;

    const pollAnswers = poll.querySelector("#poll__answers");
    answers = Array.from(answers);
    answers.forEach((element, index) => {
        let button = document.createElement("button");
        button.setAttribute("class", "poll__answer");
        button.setAttribute("value", index);
        button.innerText = element;

        button.addEventListener("click", (event)=> {getStatistic(event, poll.value)})

        pollAnswers.append(button);
    });
    
}
function showPoll(){
    let poll = new XMLHttpRequest();
    poll.addEventListener("readystatechange", () => {
        if (poll.readyState == poll.DONE){
            let pollText = JSON.parse(poll.response);
            createPoll(pollText["id"], pollText["data"]["title"], pollText["data"]["answers"]);
        }
    })
    poll.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php", true);
    poll.send();
}

showPoll();