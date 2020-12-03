class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
     gameState=data.val();  
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    background(bgimg);
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    //bgimg = createSprite(displayWidth,displayHeight);
    bike1 = createSprite(displayWidth/2,50);
    bike1.addImage(bikeimg1);
    bike1.scale = 0.15;
    bike2 = createSprite(displayWidth/2+30,130);
    bike2.addImage(bikeimg2);
    bike2.scale = 0.15;
    bikes = [bike1,bike2];

    }

play() {

form.hide();

player.getPlayerInfo();
 //player.getCarsRank();
    
    
    
    if(allPlayers !== undefined){
      //var display_position = 100;
     console.log(bike1);
    
      
      var index = 0;

      //x and y position of the cars
      var x;
      var y=100;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = displayWidth-allPlayers[plr].distance;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        bikes[index-1].x = x;
        bikes[index-1].y = y;

        if (index === player.index){
        fill ("red")
        ellipse(x,y,60,80);
        camera.position.x = displayWidth/2;

          camera.position.y = bikes[index-1].y
        }
         
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
     // player.X +=10
     bikes[index-1].x +=10;
      player.update();
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      //player.X -=10
      bikes[index-1].x -=10
      player.update();
    }


    drawSprites();
  }
 

