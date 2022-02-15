namespace SpriteKind {
    export const player2 = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
    export const projectile_2 = SpriteKind.create()
}
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    FaceUp = true
    FaceDown = false
    FaceLeft = false
    FaceRight = false
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile_2 = sprites.createProjectileFromSprite(img`
        2 
        2 
        2 
        2 
        2 
        `, tank_2, 0, 50)
})
function loselife1 () {
    tank1hp.value += -1
}
sprites.onOverlap(SpriteKind.projectile_2, SpriteKind.Player, function (sprite, otherSprite) {
    loselife1()
    projectile_2.destroy()
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(true)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    FaceUp = false
    FaceDown = false
    FaceRight = true
    FaceLeft = false
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (FaceUp == true) {
        projectile = sprites.createProjectileFromSprite(img`
            2 
            2 
            2 
            2 
            2 
            `, tank_1, 0, 50)
    } else if (FaceDown == true) {
        projectile = sprites.createProjectileFromSprite(img`
            2 
            2 
            2 
            2 
            2 
            `, tank_1, 0, -50)
    } else if (FaceRight == true) {
        projectile = sprites.createProjectileFromSprite(img`
            2 2 2 2 2 
            `, tank_1, 50, 0)
    } else if (FaceLeft == true) {
        projectile = sprites.createProjectileFromSprite(img`
            2 2 2 2 2 
            `, tank_1, -50, 0)
    }
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    FaceUp = false
    FaceDown = false
    FaceRight = false
    FaceLeft = true
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    FaceUp = false
    FaceDown = true
    FaceRight = false
    FaceRight = false
})
let projectile: Sprite = null
let projectile_2: Sprite = null
let FaceRight = false
let FaceLeft = false
let FaceDown = false
let FaceUp = false
let tank1hp: StatusBarSprite = null
let tank_2: Sprite = null
let tank_1: Sprite = null
tank_1 = sprites.create(assets.image`myImage1`, SpriteKind.Player)
tank_2 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
tank_1.setStayInScreen(true)
tank_2.setStayInScreen(true)
controller.player1.moveSprite(tank_1)
controller.player2.moveSprite(tank_2)
tank1hp = statusbars.create(10, 4, StatusBarKind.Health)
let tank2hp = statusbars.create(10, 4, StatusBarKind.Health)
tank1hp.attachToSprite(tank_1)
tank2hp.attachToSprite(tank_2)
tank1hp.setOffsetPadding(0, 2)
tank2hp.setOffsetPadding(0, 2)
