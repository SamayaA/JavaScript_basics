const url = 'https://netology-slow-rest.herokuapp.com/poll.php';

function connect(method, url, body=null){
    let poll = new XMLHttpRequest()
    poll.open(method, url);
    poll.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    poll.send(body);
    return poll
}

function getStatistic(event, questionId){
    alert("Спасибо, ваш голос засчитан!");
    let poll = connect("POST", url,`vote=${questionId}&answer=${event.target.value}`)
    poll.addEventListener("readystatechange", ()=>{
        if (poll.readyState == poll.DONE && poll.status == 200){
            let stats = JSON.parse(poll.response)["stat"];
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

        button.addEventListener("click", (event)=> {getStatistic(event, poll.getAttribute("value"))})

        pollAnswers.append(button);
    });   
}

function showPoll(){
    let poll = connect("GET", url);
    poll.addEventListener("readystatechange", () => {
        if (poll.readyState == poll.DONE && poll.status == 200){
            let pollText = JSON.parse(poll.response);
            createPoll(pollText["id"], pollText["data"]["title"], pollText["data"]["answers"]);
        }
    })
}

showPoll();