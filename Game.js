class Game {
    constructor() {

    }

    getState() {
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        });
       
    }
    
    update(state){
        database.ref('/').update({
          gameState: state
        });
    }

    async start() {
       if(gameState===0) {
           player = new Player();
           var playerCountRef = await database.ref("playerCount").once("value");
           if(playerCountRef.exists()) {
               playerCount = playerCountRef.val();
               player.getCount();
           }
          quiz = new Quiz();
          quiz.display();
        }
    }

    play() {
      quiz.hide();
      Player.getPlayerInfo(); 
      var display_answer = 270;
      if(allPlayers!==undefined) {
      for(var plr in allPlayers) {
        var correctOption = "b"
        if(allPlayers[plr].answer===correctOption) {
          stroke("green");
        }else {
          stroke("red");
         }
      }

      display_answer+=20;
      text(allPlayers[plr].name + ":" + allPlayers[plr].answer,150,display_answer);
    }
      //console.log(allPlayers[plr].name);
    }
}