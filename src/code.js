// called to handle player movements

// provided with the id of the area of the board clicked: eg 21

function move(id)
{
    // exit function if their is already something at the position clicked

	if (board[ids[id][0]][ids[id][1]][0] != 0)
    {
        return;
    }
    
    // what character will be placed their

    var charater = (ptm == 1) ? "X" : "O";
    var optm = ptm;
	
	ptm = (ptm == 1) ? 2 : 1;

    board[ids[id][0]][ids[id][1]][1].innerHTML = charater;
    board[ids[id][0]][ids[id][1]][0] = optm;

    // check if someone has won, or if the game is over

    var winner = win();

    if (winner != 0)
    {
        if (winner != 3)
        {
            score[winner - 1]++;

            info['score'].innerHTML = score[0] + " | " + score[1];

            tabloid.classList.add('win');
        }
        else
        {
            tabloid.classList.add('lol')
        }

        info['go'] = "X's Go";

        ptm = 1;

        setTimeout(function ()
        {
            reset();
        }, 1500);

        return;
    }
	
	charater = (ptm == 1) ? "X" : "O";

    info['go'].innerHTML = charater + "'s Go";
	
	resetPredict();
	
	if (dopredict)
	{
		var pre = calculate(ptm);
	
		board[pre[0]][pre[1]][1].parentElement.classList.add('predict');
	}
}

// check if someone has won, or if the game is over

function win()
{
    console.log(board);

    // row

    for (var x = 0; x <= 2; x++)
    {
        if (board[x][0][0] != 0)
        {
            if (board[x][0][0] == board[x][1][0])
            {
                if (board[x][1][0] == board[x][2][0])
                {
                    return board[x][0][0];
                }
            }
        }
    }

    // collum

    for (var y = 0; y <= 2; y++)
    {
        if (board[0][y][0] != 0)
        {
            if (board[0][y][0] == board[1][y][0])
            {
                if (board[1][y][0] == board[2][y][0])
                {
                    return board[0][y][0];
                }
            }
        }
    }

    // tl br line

    if (board[0][0][0] != 0)
    {
        if (board[0][0][0] == board[1][1][0])
        {
            if (board[1][1][0] == board[2][2][0])
            {
                return board[0][0][0];
            }
        }
    }

    // tr bl line

    if (board[0][2][0] != 0)
    {
        if (board[0][2][0] == board[1][1][0])
        {
            if (board[1][1][0] == board[2][0][0])
            {
                console.log("tr bl: " + board[0][2][0]);

                return board[0][2][0];
            }
        }
    }

    for (var x = 0; x <= 2; x++)
    {
        for (var y = 0; y <= 2; y++)
        {
            if (board[x][y][0] == 0)
            {
                return 0;
            }
        }
    }

    return 3;
}

// reset the board ready for another game

function reset()
{
    // loop through all positions on board and reset them
    
    for (var x = 0; x <= 2; x++)
    {
        for (var y = 0; y <= 2; y++)
        {
            board[x][y][0] = 0;
            board[x][y][1].innerHTML = " ";
        }
    }
	
	resetPredict();

    tabloid.classList.remove('win');
    tabloid.classList.remove('lol');
	
	load();
}