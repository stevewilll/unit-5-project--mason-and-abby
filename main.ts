namespace SpriteKind {
    export const player2 = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Player, function (sprite, otherSprite) {
    loselife()
    projectile_2.destroy()
})
function loselifeP2 () {
	
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile_2 = sprites.createProjectileFromSprite(img`
        2 2 2 
        2 2 2 
        2 2 2 
        2 2 2 
        2 2 2 
        `, tank_2, 0, 50)
})
function loselife () {
	
}
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        2 2 2 
        2 2 2 
        2 2 2 
        2 2 2 
        2 2 2 
        `, tank_1, 0, 50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.player2, function (sprite, otherSprite) {
    loselifeP2()
    projectile.destroy()
})
let projectile: Sprite = null
let projectile_2: Sprite = null
let tank_2: Sprite = null
let tank_1: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
tank_1 = sprites.create(assets.image`tank 2`, SpriteKind.Player)
controller.player1.moveSprite(tank_1, 50, 50)
tank_2 = sprites.create(assets.image`myImage`, SpriteKind.player2)
controller.player2.moveSprite(tank_2, 50, 50)
projectile_2.setKind(SpriteKind.Projectile2)
projectile.setKind(SpriteKind.Projectile)
let tank1 = statusbars.create(15, 3, StatusBarKind.Health)
let tank2 = statusbars.create(15, 3, StatusBarKind.Health)
tank1.attachToSprite(tank_1)
tank2.attachToSprite(tank_2)
