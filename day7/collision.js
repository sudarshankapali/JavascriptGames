class checkCollide{
    checkCollision(i=0){
        if(allbullet[i].position.x + allbullet[i].size > enemy.position.x && allbullet[i].position.x < enemy.position.x + enemy.size && allbullet[i].position.y > enemy.position.y + enemy.size) {
            console.log("collision vayo");
    }
}
}