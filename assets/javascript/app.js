$(document).ready(function () {

    //----------------------------------------Variables----------------------------------------

    var triviaBank = [
        {
            question: "Frank Ocean, Bad Religion: ' 🎵 Just outrun the demons, could you. He said ___________!, I told him don't curse me 🎵  '",
            answers: {
                a: ' Abra Kadabra',
                b: ' Allahu akbar',
                c: ' Amen',
                d: ' Alakazam',
            },
            correctAnswer: 'b',
        },
        {
            question: "Solange's latest album, A _____ at the Table, tackles race, poverty, and mental health.",
            answers: {
                a: ' Stranger',
                b: ' Meal',
                c: ' Seat',
                d: ' Friend',

            },
            correctAnswer: 'c',
        },
        {
            question: "Will Smith's daughter, _________, released her first song at the age of 10",
            answers: {
                a: ' Willow Smith',
                b: ' Tillie Smith',
                c: ' Jada Smith',
                d: ' Anna Nicole Smith',
            },
            correctAnswer: 'a',
        },
        {
            question: " In Tyler, The Creator's song 'See You Again,' who sings the chorus?",
            answers: {
                a: ' Beyonce',
                b: ' Alicia Keys',
                c: ' Kali Uchis',
                d: ' A$AP ROCKY',
            },
            correctAnswer: 'c',
        },
        {
            question: " Who released 'Ctrl' in 2017 as their debut studio album?",
            answers: {
                a: ' Childish Gambino',
                b: ' Aminé',
                c: ' Joji',
                d: ' SZA',
            },
            correctAnswer: 'd',
        },
        {
            question: " Which Childish Gambino song won Best Traditional R&B Performance Grammy Award in 2018?",
            answers: {
                a: ' Zombies',
                b: ' Redbone',
                c: ' This is America',
                d: ' Me and Your Mama',
            },
            correctAnswer: 'b',
        },
        {
            question: " Which typically-R&B artist released a country song in 2016?",
            answers: {
                a: ' Beyonce',
                b: ' Jorja Smith',
                c: ' Usher',
                d: ' The Weeknd',
            },
            correctAnswer: 'a',
        },
        {
            question: " In his album 'Starboy,' who did The Weeknd collaborate with?",
            answers: {
                a: ' Daft Punk',
                b: ' Lana Del Rey',
                c: ' Kendrick Lamar',
                d: ' all the above',
            },
            correctAnswer: 'd',
        },
        {
            question: " Who composed the soundtrack to the 2016 movie 'Despicable Me'?",
            answers: {
                a: ' Azealia Banks',
                b: ' Jay-Z',
                c: ' Pharrell Williams',
                d: ' Future',
            },
            correctAnswer: 'c',
        },
        {
            question: "Solange, Cranes in the Sky: ' 🎵  Well it's like cranes in the sky. Sometimes I don't wanna feel those _______ clouds 🎵  '",
            answers: {
                a: ' puffy',
                b: ' metal',
                c: ' dark',
                d: ' stratocumulus',
            },
            correctAnswer: 'b',
        },
        {
            question: " Which genre had the biggest influence on modern day R&B?",
            answers: {
                a: ' gospel',
                b: ' mariachi',
                c: ' rock',
                d: ' bluegrass',
            },
            correctAnswer: 'a',
        }]




    var currentQuestion = 0;
    var rightAnswers = 0;
    var wrongAnswers = 0;
    var number = 16;
    var intervalId;

    var questionContainer = document.getElementById('question');
    var answersContainer = document.getElementById('answers');


    //----------------------------------------Functions----------------------------------------

    $("#start-game").on('click', startGame);

    function startGame() {
        $(`#start-game`).css("display", "none")
        newQuestion();
    }

    function timer() {
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        number--;
        $(`#time-remaining`).html(`Time remaining: ${number}`);
        if (number === 0) {
            stop();
            alert(`Time's up!`);
            clearAnswers();
            newQuestion();
        }
    }

    function stop() {
        clearInterval(intervalId);
        number = 16;
    }

    function clearAnswers() {
        $(`#answers`).html(``);
    }

    function newQuestion(index) {
        timer();
        $(`#question`).text(triviaBank[currentQuestion].question);
        $(`#answers`).append(`<input type="radio" name="choices" value="a" id="a">${triviaBank[currentQuestion].answers.a}<br>`);
        $(`#answers`).append(`<input type="radio" name="choices" value="b" id="b">${triviaBank[currentQuestion].answers.b}<br>`);
        $(`#answers`).append(`<input type="radio" name="choices" value="c" id="c">${triviaBank[currentQuestion].answers.c}<br>`);
        $(`#answers`).append(`<input type="radio" name="choices" value="d" id="d">${triviaBank[currentQuestion].answers.d}<br>`);


        let rightAnswer = triviaBank[currentQuestion].correctAnswer;
        console.log(rightAnswer);
        $("input[type=radio]").click(function () {
            let userGuess = $(`input[name=choices]:checked`).val();
            console.log(userGuess);
            if (userGuess === rightAnswer) {
                alert(`Correct!`);


            } else alert('Sorry, you are mistaken!')

            currentQuestion++;


        })


    };

})

