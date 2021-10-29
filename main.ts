namespace SpriteKind {
    export const player2 = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    football.setPosition(-3, 117)
    football = sprites.createProjectileFromSprite(img`
        . . 6 6 6 6 . . 
        . 6 6 6 6 6 6 . 
        6 d 4 4 4 4 d 6 
        c 1 b 4 4 4 d c 
        . c b 1 1 4 c . 
        . . c c c c . . 
        `, mySprite, 50, 50)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.setPosition(142, 63)
})
info.onCountdownEnd(function () {
    game.splash(info.score(), "GOODGAME")
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.baDing.play()
    game.splash("TOUCHDOWN")
    info.changeScoreBy(1)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(70, 70)
    mySprite2.setPosition(70, 60)
})
let football: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
    . . . . 2 2 2 2 2 e . . . . . . 
    . . . 2 2 2 2 d 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 e f f c c . . . 
    . . e e 2 2 e f f f f b c . . . 
    . e e e f e 2 b f f f d c . . . 
    e e 2 2 d f 2 1 1 1 1 b c . . . 
    e e 2 2 d f e e c c c . . . . . 
    b 1 1 d e 2 2 e e c . . . . . . 
    . f f e 2 2 2 2 e . . . . . . . 
    . . f f d d 2 2 f f d d . . . . 
    . . f f d d e e f f d d . . . . 
    . . . f f f f . . . . . . . . . 
    . . e e e f f f . . . . . . . . 
    . . e e e e f f f . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . 2 2 2 2 2 e . . . . . . 
    . . . 2 2 2 2 d 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 e f f c c . . . 
    . . e e 2 2 e f f f f b c . . . 
    . e e e f e 2 b f f f d c . . . 
    e e 2 2 d f 2 1 1 1 1 b c . . . 
    e e 2 2 d f e e c c c . . . . . 
    b 1 1 d e 2 2 e e c . . . . . . 
    . f f e 2 2 2 2 e . . . . . . . 
    . . f f d d 2 2 f f d d . . . . 
    . . f f d d e e f f d d . . . . 
    . . . f f f f . . . . . . . . . 
    . . e e e f f f . . . . . . . . 
    . . e e e e f f f . . . . . . . 
    `, SpriteKind.player2)
controller.player2.moveSprite(mySprite2)
football = sprites.create(img`
    . . 6 6 6 6 . . 
    . 6 6 6 6 6 6 . 
    6 d 4 4 4 4 d 6 
    c 1 b 4 4 4 d c 
    . c b 1 1 4 c . 
    . . c c c c . . 
    `, SpriteKind.Projectile)
tiles.setTilemap(tilemap`level1`)
info.startCountdown(10)
game.showLongText("throw the football to the receiver by clicking B", DialogLayout.Top)
