let ask = [
    {
        Question :"How many people in class?",
        Choice : {
            A : 10,
            B : 11,
            C : 12,
            D : 13
        },
        Answer : "D"
    },
    {
        Question : "What are they doing?",
        Choice : {
            A : "learning",
            B : "playing",
            C : "sing",
            D : "dance"
        },
        Answer : "A"
    },
    {
        Question : "What did you learn?",
        Choice : {
            A : "fuck",
            B : "play football",
            C :"code",
            D : "English"
        },
        Answer : "C"
    },
    {
        Question : "Who teaches you?",
        Choice : {
            A : "Nam",
            B : "Thuong",
            C : "Viet",
            D : "Duc"
        },
        Answer : "D"
    },
    {
        Question : "Who support you?",
        Choice : {
            A : "Nam",
            B : "Thuong",
            C : "Viet",
            D : "Duc"
        },
        Answer : "A"
    },
]

let Answerexam = 0
for (let i = 0; i< ask.length; i++){
    console.log (ask[i].Question,ask[i].Choice)
        const youranswer = prompt ("Enter choices")
        if ( youranswer == ask[i].Answer){
            console.log ("hura")
            Answerexam += 1
        }
        else{
            console.log ("you should check your exam again!!!")
        }
    }
console.log (Answerexam/(ask.length)*100+'%')
