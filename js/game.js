class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

    obstacleGroup = new Group();
    
        console.log(frameCount)
       
        }
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                player.getPlayerAtEnd();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                         textSize(25);
                         fill("white");
                         text("Player 1 :" +allPlayers.player1.score,50,50);
                        text("Player 2 :" + allPlayers.player2.score, 50, 100);
                 
                 }
                
                if(player.score>=5){
                    gameState = 2; 
                    player.rank += 1;
                    Player.updatePlayerAtEnd(player.rank);
                    player.update();
                    this.showRank();
                    
                }
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     egg = createSprite(random(100, 1000), 0, 100, 100);
                     egg.velocityY = 6;
                     egg.scale=0.12
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: egg.addImage("egg1",egg1_img);
                         break;
                         case 2: egg.addImage("egg1", egg2_img);
                         break;
                        
                        
                     }
                     eggGroup.add(egg);
                     
                     
                 }
                 if(frameCount % 40 === 0){
                    //call the addObstacles()
                    this.addObstacles();
                 }
                 
                  if (player.index !== null) {
                      for (var i = 0; i < eggGroup.length; i++) {
                          if (eggGroup.get(i).isTouching(players)) {
                              eggGroup.get(i).destroy();
                              player.score =player.score+1;
                              player.update();
                              

                          }
                  
                          
                      }

                      if(obstacleGroup.isTouching(players)){
                          gameState=2;

                       //write a code to assign the value of gameState to End
                      }
                  }
                }
            
                

         
         
        
         

    
                showRank() {
                    alert("Awesome !! You finished the game! You rank is :" +player.rank)
                  }

                  gameOver() {
                    textSize(60)
                    fill("black")
                    text("GAME OVER!!💀👎",displayWidth/2-400,displayHeight/2-200)
                    }
    
    end(){
       console.log("Game Ended");
       console.log(player.rank)
       this.gameOver();
    }


    addObstacles()
    {       
            var x, y;
            //write a code to create an obstacle at random x position.
            /*if (positions.length > 0) {
                x = positions[i].x;
                y = positions[i].y;
                spriteImage = positions[i].image;
              } else {
              x = random(width / 2 + 150, width / 2 - 150);
              y = random(-height * 4.5, height - 400);
              }*/
             
            x=random(0,width-100)
            y = 0
            var obstacle = createSprite(x, y);
            obstacle.addImage("obstacle", obstacleImage);
            obstacle.velocityY = 4;
            obstacle.scale = 0.013;
            obstacleGroup.add(obstacle);
    }
}
