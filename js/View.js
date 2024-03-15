function startView() {
    if(startScreen == true){
        app.innerHTML = /*HTML*/`
            <div class="container">
                <h1>Tampen Brenner</h1>
                <p>I spillet her skal du prøve å finne det hemmelige punktet, lampen gløder varmere når du nærmer deg </p>
                <button onclick="startGame()">Start spillet</button>
            </div>
        `; 
    }
}
function mainView() {
    if(!startScreen == true)
    app.innerHTML = /*HTML*/`
        <div class="container">
            <div id="torch"></div>
            <div id="gameField">
                <div id="secretPoint"></div>
            </div>
            <button onclick=newRound()>Ny runde</button>
        </div>
    `;
    placeRandom();
}