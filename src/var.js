// initialize variables

var board;
var info;
var score;
var ids;
var ptm;
var tabloid;
var gamemode;
var root;
var themesel;
var dopredict;
var dopredictbutton;

// called when all the resources for the page have been loaded

function load()
{
    // asing values to variables

    board = 
    [
        [
            [0, document.getElementById("id00")],
            [0, document.getElementById("id01")],
            [0, document.getElementById("id02")]
        ],
        [
            [0, document.getElementById("id10")],
            [0, document.getElementById("id11")],
            [0, document.getElementById("id12")]
        ],
        [
            [0, document.getElementById("id20")],
            [0, document.getElementById("id21")],
            [0, document.getElementById("id22")]
        ]
    ];

    info =
    {
        "score": document.getElementById("score"),
        "go": document.getElementById("go")
    };

    score =
    [
        0,
        0
    ];

    ids =
    {
        '00': [0, 0],
        '01': [0, 1],
        '02': [0, 2],

        '10': [1, 0],
        '11': [1, 1],
        '12': [1, 2],

        '20': [2, 0],
        '21': [2, 1],
        '22': [2, 2]
    };

    ptm = 1;

    tabloid = document.getElementById('board');

    gamemode = 1;

    themesel = document.getElementById('theme-sel');

    root = document.documentElement;

    dopredict = true;
	
	info['go'].innerHTML = "X's Go";

    dopredictbutton = document.getElementById('ai');

    setup();
}

// runs functions to get ready for game

function setup()
{
    setupTheme();

    setTheme('orange');
}