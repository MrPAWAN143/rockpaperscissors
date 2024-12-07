let userscore = 0;
let compscore = 0;

let drowmatch = 0

let gameround = 0;

let plyedround = 0;


let inputdiv = document.querySelector('.how-round')
let userselectround = document.querySelector('.how-round input')
let startbtn = document.querySelector('.submit-btn')
let gameroundset = document.querySelector('.gameround')
let gamemsg = document.querySelector('.gamemsg')

let compoints = document.querySelector('.comp-point')
let userpoint = document.querySelector('.user-point')
let drowpoint = document.querySelector('.drow-match')
let plyedroundmsg = document.querySelector('.played-round')

let gamediv = document.querySelectorAll('.game div')
let msg = document.querySelector('.msg')




startbtn.addEventListener('click', (e) => {
    e.preventDefault()
    getuserround();


});


const getuserround = () => {
    if (userselectround.value <= 20 && userselectround.value != "") {
        gameround = userselectround.value

        setgameroundvalue()



    } else {
        popupshow("Game round Max 1 - 20")

    }
}

const popupshow = (msg, bgclor, txtclor) => {
    gamemsg.style.display = "block"
    gamemsg.innerText = msg
    gamemsg.style.backgroundColor = bgclor
    gamemsg.style.color = txtclor
    setTimeout(() => {
        gamemsg.style.display = "none"
        userselectround.value = ""


    }, 5000)
}

const setgameroundvalue = () => {
    gameroundset.innerText = gameround;
    gameroundset.style.color = "green"
    gameroundset.style.fontSize = "30px"
    gameroundset.style.fontWeight = "800";
    inputdiv.style.display = "none";

    popupshow(`Congratulations! You have (${gameround}) rounds to play."`, "green", "white", 2000)

}

gamediv.forEach((item) => {
    item.addEventListener('click', () => {
        const userchoice = item.getAttribute('id')

        playgame(userchoice)

    })

})

const gamedrow = (userchoice, compval) => {
    drowmatch++;
    drowpoint.innerText = drowmatch;
    msg.innerText = `It's a draw! Both chose (${userchoice}).`;
};

const winfunction = (userwin, userchoice, compval) => {
    if (userwin) {
        userscore++;
        userpoint.innerText = userscore;
        msg.innerText = `You win! (${userchoice}) beats (${compval}).`;
    } else {
        compscore++;
        compoints.innerText = compscore;
        msg.innerText = `You lose! (${compval}) beats (${userchoice}).`;
    }
};



const playgame = (userchoice) => {

    gameround = Number(gameround)




    if (gameround > 0) {

        const userchoicex = userchoice

        const compval = compchoice()




        if (userchoicex === compval) {
            gamedrow(userchoice, compval)

        } else {
            let userwin = true
            if (userchoice === "rock") {
                userwin = compval === "paper" ? false : true
            } else if (userchoice === "scissors") {
                //rock paper
                userwin = compval === "rock" ? false : true
            } else {
                userwin = compval === "rock" ? true : false
            }

            winfunction(userwin, userchoice, compval)

        }
        gameround--

        plyedroundmsg.innerText = gameround

        if (gameround < 2) {



            popupshow("This is your final chance! You have one last move to make it count!", "red", "white")

            if (gameround === 0) {
                celebrite()
                Startgame()
            }
        }





    } else {
        popupshow("You don’t have any rounds left to play. Please check back later!", "red", "white")

    }


}

const celebrite = () => {
    if (userscore > compscore) {


        popupshow("Congratulations! You've successfully won this game. Your strategy and skills were impressive—well done!", "green", "white")



    } else if (userscore === compscore) {

        popupshow("It's a draw! Both sides played well, but this match ends in a tie. Great effort from everyone!", "yellow", "black")


    } else {


        popupshow("Oops! We're sorry to say that you've lost this game. Better luck next time—don't give up!", "red", "white")

    }




}


const Startgame = () => {
    msg.innerText = "Start Again"
    msg.classList.add('start')

    userscore = 0;
    compscore = 0;
    drowmatch = 0
    gameround = 0;
    plyedround = 0;


    let startgame = document.querySelector('.start')
    startgame.addEventListener('click', () => {
        inputdiv.style.display = "flex";
        compoints.innerText = 0
        drowpoint.innerText = 0
        userpoint.innerText = 0
        plyedroundmsg.innerText = 0
        gameroundset.innerText = 0

        gamemsg.style.display = "none"

        msg.innerText = "Let's Play"
        

    })


}


const compchoice = () => {

    const choice = ["rock", "paper", "scissors"]

    const rendomnumber = Math.floor(Math.random() * 3)



    return choice[rendomnumber]




}







