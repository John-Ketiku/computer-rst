enum ActionKind {
    RunningLeft,
    RunningRight,
    Idle,
    IdleLeft,
    IdleRight,
    JumpingLeft,
    JumpingRight,
    CrouchLeft,
    CrouchRight,
    Flying,
    Walking,
    Jumping,
    attacking,
    itsmoving,
    notmoving
}
namespace SpriteKind {
    export const Bumper = SpriteKind.create()
    export const Goal = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const Flier = SpriteKind.create()
    export const TheUchihaha = SpriteKind.create()
    export const madara = SpriteKind.create()
    export const Shuriken = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const uchiha2 = SpriteKind.create()
    export const uchiha3 = SpriteKind.create()
    export const uchiha4 = SpriteKind.create()
    export const uchiha5 = SpriteKind.create()
    export const uchiha6 = SpriteKind.create()
}
namespace StatusBarKind {
    export const madarahealth = StatusBarKind.create()
    export const uchihhaHealth = StatusBarKind.create()
    export const BOSS_HEALth = StatusBarKind.create()
    export const uchihahp2 = StatusBarKind.create()
    export const uhcihahp3 = StatusBarKind.create()
    export const uchihahp4 = StatusBarKind.create()
    export const uchihahp5 = StatusBarKind.create()
    export const uchihaHP6 = StatusBarKind.create()
}
function initializeAnimations () {
    initializeHeroAnimations()
    initializeCoinAnimation()
    initializeUchihahaAnimations()
}
function giveIntroduction () {
    game.setDialogFrame(img`
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 . 
        2 1 1 2 2 2 2 2 2 2 2 2 1 1 2 . 
        2 1 2 2 1 1 1 1 1 1 1 2 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 2 1 1 1 1 1 1 1 2 2 1 2 . 
        2 1 1 2 2 2 2 2 2 2 2 2 1 1 2 . 
        2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        `)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 9 9 9 9 2 2 2 . . . 
        . . . 2 2 9 9 1 1 1 9 9 2 . . . 
        . . . 2 9 1 1 2 2 1 1 9 2 2 . . 
        . 2 2 2 9 1 2 2 2 2 1 1 9 2 2 . 
        . 2 2 9 1 2 2 f f 2 2 1 9 9 2 2 
        . . 2 1 1 2 2 1 f 2 2 1 1 9 2 2 
        . . . 2 2 1 2 2 2 2 2 1 9 2 2 . 
        . . . . 2 9 1 1 1 1 1 9 2 2 . . 
        . . . . 2 2 2 2 9 2 2 2 2 . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    showInstruction("Move with the left and right buttons.")
    showInstruction("press a or x to shoot right")
    showInstruction("press b or z to shoot left")
    showInstruction("kill the uchihaha's and get as many  eyes as you can")
}
function initializeCoinAnimation () {
    EyesAnimation = animation.createAnimation(ActionKind.Idle, 200)
    EyesAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 9 9 9 9 2 2 2 . . . 
        . . . 2 2 9 9 1 1 1 9 9 2 . . . 
        . . . 2 9 1 1 1 1 1 1 9 2 2 . . 
        . 2 2 2 9 1 2 2 2 2 1 1 9 2 2 . 
        . 2 2 9 1 2 2 f f 2 2 1 9 9 2 2 
        . . 2 1 1 2 2 f 1 2 2 1 1 9 2 2 
        . . . 2 2 1 2 2 2 2 1 1 9 2 2 . 
        . . . . 2 9 1 1 1 1 1 9 2 2 . . 
        . . . . 2 2 2 9 9 2 2 2 2 . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    EyesAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 4 4 4 4 2 2 2 . . . 
        . . . 2 2 4 4 7 7 4 4 4 2 . . . 
        . . . 2 4 4 7 7 7 7 7 4 4 2 . . 
        . 2 f 2 4 4 7 7 7 7 7 7 4 2 f . 
        . 2 f f f f f 7 7 7 7 f f f f 2 
        . . 2 4 4 f f f f f f f 4 4 2 2 
        . . . 2 4 4 7 7 7 7 7 4 4 2 2 . 
        . . . . 2 4 4 4 7 4 4 4 2 2 . . 
        . . . . 2 2 2 4 4 4 2 2 2 . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    EyesAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 9 9 9 9 2 2 2 . . . 
        . . . 2 2 9 9 1 1 1 9 9 2 . . . 
        . . . 2 9 1 1 2 2 1 1 9 2 2 . . 
        . 2 2 2 9 1 2 2 2 2 1 1 9 2 2 . 
        . 2 2 9 1 2 2 f f 2 2 1 9 9 2 2 
        . . 2 1 1 2 2 1 f 2 2 1 1 9 2 2 
        . . . 2 2 1 2 2 2 2 2 1 9 2 2 . 
        . . . . 2 9 1 1 1 1 1 9 2 2 . . 
        . . . . 2 2 2 2 9 2 2 2 2 . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    EyesAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 4 4 4 4 2 2 2 . . . 
        . . . 2 2 4 4 7 7 4 4 4 2 . . . 
        . . . 2 4 4 7 7 7 7 7 4 4 2 . . 
        . 2 f 2 4 4 7 7 7 7 7 7 4 2 f . 
        . 2 f f f f f 7 7 7 7 f f f f 2 
        . . 2 4 4 f f f f f f f 4 4 2 2 
        . . . 2 4 4 7 7 7 7 7 4 4 2 2 . 
        . . . . 2 4 4 4 7 4 4 4 2 2 . . 
        . . . . 2 2 2 4 4 4 2 2 2 . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    EyesAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 9 9 9 9 2 2 2 . . . 
        . . . 2 2 9 9 1 1 1 9 9 2 . . . 
        . . . 2 9 1 2 f 2 f 1 9 2 2 . . 
        . 2 2 2 9 f 2 2 2 f 2 f 9 2 2 . 
        . 2 2 f 2 f 2 1 1 1 2 f 2 f 2 2 
        . . 2 1 1 2 2 1 f 1 2 2 2 9 2 2 
        . . . 2 2 1 f 2 2 f 2 f 9 2 2 . 
        . . . . 2 9 1 1 1 1 1 9 2 2 . . 
        . . . . 2 2 2 2 9 2 2 2 2 . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    EyesAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 9 9 9 9 2 2 2 . . . 
        . . . 2 2 9 9 1 1 1 9 9 2 . . . 
        . . . 2 9 1 2 f 2 f 1 9 2 2 . . 
        . 2 2 2 9 f 2 2 2 f 2 f 9 2 2 . 
        . 2 2 f 2 f 2 1 1 1 2 f 2 f 2 2 
        . . 2 1 1 2 2 1 f 1 2 2 2 9 2 2 
        . . . 2 2 1 f 2 2 f 2 f 9 2 2 . 
        . . . . 2 9 1 1 1 1 1 9 2 2 . . 
        . . . . 2 2 2 2 9 2 2 2 2 . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    EyesAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 9 9 9 9 2 2 2 . . . 
        . . . 2 2 9 9 1 1 1 9 9 2 . . . 
        . . . 2 9 1 2 f 2 f 1 9 2 2 . . 
        . 2 2 2 9 f 2 f 2 2 2 f 9 2 2 . 
        . 2 2 f 2 2 2 9 9 9 2 f 2 f 2 2 
        . . 2 1 1 2 2 9 1 9 2 2 2 9 2 2 
        . . . 2 2 1 f 2 2 f 2 f 9 2 2 . 
        . . . . 2 9 1 1 1 1 1 9 2 2 . . 
        . . . . 2 2 2 2 9 2 2 2 2 . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    EyesAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 9 9 9 9 2 2 2 . . . 
        . . . 2 2 9 9 1 1 1 9 9 2 . . . 
        . . . 2 9 1 2 f 2 f 1 9 2 2 . . 
        . 2 2 2 9 f 2 f 2 2 2 f 9 2 2 . 
        . 2 2 f 2 2 2 9 9 9 2 f 2 f 2 2 
        . . 2 1 1 2 2 9 1 9 2 2 2 9 2 2 
        . . . 2 2 1 f 2 2 f 2 f 9 2 2 . 
        . . . . 2 9 1 1 1 1 1 9 2 2 . . 
        . . . . 2 2 2 2 9 2 2 2 2 . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    EyesAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 4 4 4 4 2 2 2 . . . 
        . . . 2 2 4 4 7 7 4 4 4 2 . . . 
        . . . 2 4 4 7 7 7 7 7 4 4 2 . . 
        . 2 f 2 4 4 7 7 7 7 7 7 4 2 f . 
        . 2 f f f f f 7 7 7 7 f f f f 2 
        . . 2 4 4 f f f f f f f 4 4 2 2 
        . . . 2 4 4 7 7 7 7 7 4 4 2 2 . 
        . . . . 2 4 4 4 7 4 4 4 2 2 . . 
        . . . . 2 2 2 4 4 4 2 2 2 . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    EyesAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 9 9 9 9 2 2 2 . . . 
        . . . 2 2 9 9 1 1 1 9 9 2 . . . 
        . . . 2 9 1 1 2 2 1 1 9 2 2 . . 
        . 2 2 2 9 1 2 2 2 2 1 1 9 2 2 . 
        . 2 2 9 1 2 2 f f 2 2 1 9 9 2 2 
        . . 2 1 1 2 2 1 f 2 2 1 1 9 2 2 
        . . . 2 2 1 2 2 2 2 2 1 9 2 2 . 
        . . . . 2 9 1 1 1 1 1 9 2 2 . . 
        . . . . 2 2 2 2 9 2 2 2 2 . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
statusbars.onZero(StatusBarKind.madarahealth, function (status) {
    Madara.destroy(effects.disintegrate, 200)
    music.powerDown.play()
    carnival.customGameOverExpanded("You died, get better noob!!", effects.melt, music.powerDown, carnival.ScoreTypes.HScore)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    madaraHealth.value += 3
    otherSprite.destroy(effects.coolRadial, 200)
    otherSprite.y += -3
    info.changeScoreBy(1)
    music.footstep.play()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . 2 . a 2 . . 2 . . . . . 
        . . . 2 . 2 . 2 . 2 . . . . . . 
        . . . . . . 2 2 2 . a . . . . . 
        . . . . 2 2 2 a 2 2 2 . . . . . 
        . . . . a . 2 2 2 . . . . . . . 
        . . . . . 2 . 2 . 2 . 2 . . . . 
        . . . . 2 . . 2 a . 2 . . . . . 
        . . . . . 2 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Madara, -100, 0)
    pause(100)
})
function animateIdle () {
    mainIdleLeft = animation.createAnimation(ActionKind.IdleLeft, 100)
    animation.attachAnimation(Madara, mainIdleLeft)
    mainIdleLeft.addAnimationFrame(img`
        . . . . . . . f f f f f f . . . 
        . . . . . . f f f . f f . f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . f b b f 2 f . . . . 
        . . . . . . f d d d d . . . . . 
        . . . . . 2 d d d 2 2 2 2 . . . 
        . . . . . f 2 6 2 2 2 2 . . . . 
        . . . . 2 . f 6 f 2 f . . . . . 
        . . . . 2 . 6 6 6 f f . . . . . 
        . . . . 2 . 6 6 6 2 2 f . . . . 
        . . . . . . f f f 2 2 2 f . . . 
        . . . . . . a 6 . a 2 2 f f . . 
        . . . . . . a 6 . a 6 . 2 f . . 
        . . . . . . a 6 . a 6 . . f . . 
        . . . . . . a a . a a . . . . . 
        . . . . . . a 1 . a 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mainIdleRight = animation.createAnimation(ActionKind.IdleRight, 100)
    animation.attachAnimation(Madara, mainIdleRight)
    mainIdleRight.addAnimationFrame(img`
        . . . f f f f f f . . . . . . . 
        . . f . f f . f f f . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . f 2 f b b f . . . . . . 
        . . . . . d d d d f . . . . . . 
        . . . 2 2 2 2 d d d 2 . . . . . 
        . . . . 2 2 2 2 6 2 f . . . . . 
        . . . . . f 2 f 6 f . 2 . . . . 
        . . . . . f f 6 6 6 . 2 . . . . 
        . . . . f 2 2 6 6 6 . 2 . . . . 
        . . . f 2 2 2 f f f . . . . . . 
        . . f f 2 2 a . 6 a . . . . . . 
        . . f 2 . 6 a . 6 a . . . . . . 
        . . f . . 6 a . 6 a . . . . . . 
        . . . . . a a . a a . . . . . . 
        . . . . . 1 a . 1 a . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.TheUchihaha, function (sprite, otherSprite) {
    madaraHealth.value += -1
})
function setLevelTileMap (level: number) {
    clearGame()
    if (level == 0) {
        tiles.setTilemap(tilemap`level`)
    } else if (level == 1) {
        tiles.setTilemap(tilemap`level_0`)
    } else if (level == 2) {
        tiles.setTilemap(tilemap`level_1`)
    }
    initializeLevel(level)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . 2 . a 2 . . 2 . . . . . 
        . . . 2 . 2 . 2 . 2 . . . . . . 
        . . . . . . 2 2 2 . a . . . . . 
        . . . . 2 2 2 a 2 2 2 . . . . . 
        . . . . a . 2 2 2 . . . . . . . 
        . . . . . 2 . 2 . 2 . 2 . . . . 
        . . . . 2 . . 2 a . 2 . . . . . 
        . . . . . 2 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Madara, 100, 0)
    pause(100)
})
function animateRun () {
    mainRunLeft = animation.createAnimation(ActionKind.RunningLeft, 100)
    animation.attachAnimation(Madara, mainRunLeft)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . f f f f f f . . . 
        . . . . . . f f f . f f . f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . f b b f 2 f . . . . 
        . . . . . . f d d d d . . . . . 
        . . . . . 2 d d d 2 2 2 2 . . . 
        . . . . . f 2 6 2 2 2 2 . . . . 
        . . . . 2 . f 6 f 2 f . . . . . 
        . . . . 2 . 6 6 6 f f . . . . . 
        . . . . 2 . 6 6 6 2 2 f . . . . 
        . . . . . . f f f 2 2 2 f . . . 
        . . . . . a b . a 6 2 2 f f . . 
        . . . . . a b . a 6 . . 2 f . . 
        . . . . . a b . a 6 . . . f . . 
        . . . . a a 1 . a a . . . . . . 
        . . . . a 1 . . a 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . f f f f f f . . . 
        . . . . . . f f f . f f . f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . f b b f 2 f . . . . 
        . . . . . . f d d d d . . . . . 
        . . . . . 2 d d d 2 2 2 2 . . . 
        . . . . . f 2 6 2 2 2 2 . . . . 
        . . . . 2 . f 6 f 2 f . . . . . 
        . . . . 2 . 6 6 6 f f . . . . . 
        . . . . 2 . 6 6 6 2 2 f . . . . 
        . . . . . . f f f 2 2 2 f . . . 
        . . . . . . a 6 . a 2 2 f f . . 
        . . . . . . a 6 . a 6 . 2 f . . 
        . . . . . . . a 6 . a 6 . f . . 
        . . . . . . . . a . . a . . f . 
        . . . . . . . a 1 . a 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . f f f f f f . . . . 
        . . . . . f f f . f f . f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f b b f 2 2 f . . . . 
        . . . . . f d d d d f . . . . . 
        . . . . 2 d d d 2 2 f 2 . . . . 
        . . . . f 2 6 2 2 2 f . . . . . 
        . . . 2 . f 6 f 2 f . . . . . . 
        . . . 2 . 6 6 6 f f . . . . . . 
        . . . 2 . 6 6 6 2 2 f . . . . . 
        . . . . . f f f 2 2 2 f . . . . 
        . . . . . a b . a 2 2 2 f . . . 
        . . . . . a b . a 6 2 2 f f . . 
        . . . . a b . a 6 . 2 2 2 f . . 
        . . . . a a . a a . . . 2 . . . 
        . . . . a 1 . a 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . f f f f f f . . . . 
        . . . . . f f f . f f . f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f b b f 2 2 f . . . . 
        . . . . . f d d d d f . . . . . 
        . . . . 2 d d d 2 2 f 2 . . . . 
        . . . . f 2 6 2 2 2 2 . . . . . 
        . . . 2 . f 6 f 2 f . . . . . . 
        . . . 2 . 6 6 6 f f . . . . . . 
        . . . 2 . 6 6 6 2 2 f . . . . . 
        . . . . . f f f 2 2 2 f . . . . 
        . . . . . a 3 . a 2 2 2 f . . . 
        . . . . . a 3 . a 3 2 f 2 2 2 . 
        . . . . . a 3 . a 3 2 f 2 2 2 . 
        . . . . . a a . a a f f 2 . 2 . 
        . . . . . a 1 . a 1 f f . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mainRunRight = animation.createAnimation(ActionKind.RunningRight, 100)
    animation.attachAnimation(Madara, mainRunRight)
    mainRunRight.addAnimationFrame(img`
        . . . f f f f f f . . . . . . . 
        . . f . f f . f f f . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . f 2 f b b f . . . . . . 
        . . . . . d d d d f . . . . . . 
        . . . 2 2 2 2 d d d 2 . . . . . 
        . . . . 2 2 2 2 6 2 f . . . . . 
        . . . . . f 2 f 6 f . 2 . . . . 
        . . . . . f f 6 6 6 . 2 . . . . 
        . . . . f 2 2 6 6 6 . 2 . . . . 
        . . . f 2 2 2 f f f . . . . . . 
        . . f f 2 2 6 a . b a . . . . . 
        . . f 2 . 2 6 a . b a . . . . . 
        . . f . . 2 2 a . b a . . . . . 
        . . . . 2 . a a . 1 a a . . . . 
        . . . 2 . . 1 a . . 1 a . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mainRunRight.addAnimationFrame(img`
        . . . f f f f f f . . . . . . . 
        . . f . f f . f f f . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . f 2 f b b f . . . . . . 
        . . . . . d d d d f . . . . . . 
        . . . 2 2 2 2 d d d 2 . . . . . 
        . . . . 2 2 2 2 6 2 f . . . . . 
        . . . . . f 2 f 6 f . 2 . . . . 
        . . . . . f f 6 6 6 . 2 . . . . 
        . . . . f 2 2 6 6 6 . 2 . . . . 
        . . . f 2 2 2 f f f . . . . . . 
        . . f f 2 2 a . 6 a . . . . . . 
        . . f 2 . 6 a . 6 a . . . . . . 
        . . f . 6 a . 6 a . . . . . . . 
        . . . . a . . a . . . . . . . . 
        . . . . 1 a . 1 a . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mainRunRight.addAnimationFrame(img`
        . . . . f f f f f f . . . . . . 
        . . . f . f f . f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f 2 2 f b b f . . . . . 
        . . . . . f d d d d f . . . . . 
        . . . . 2 f 2 2 d d d 2 . . . . 
        . . . . . f 2 2 2 6 2 f . . . . 
        . . . . . . f 2 f 6 f . 2 . . . 
        . . . . . . f f 6 6 6 . 2 . . . 
        . . . . . f 2 2 6 6 6 . 2 . . . 
        . . . . f 2 2 2 f f f . . . . . 
        . . . f 2 2 2 a . b a . . . . . 
        . . f f 2 2 6 a . b a . . . . . 
        . . f 2 2 2 . 6 a . b a . . . . 
        . . . 2 . . . a a . a a . . . . 
        . . . . . . . 1 a . 1 a . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mainRunRight.addAnimationFrame(img`
        . . . . f f f f f f . . . . . . 
        . . . f . f f . f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f 2 2 f b b f . . . . . 
        . . . . . f d d d d f . . . . . 
        . . . . 2 f 2 2 d d d 2 . . . . 
        . . . . . 2 2 2 2 6 2 f . . . . 
        . . . . . . f 2 f 6 f . 2 . . . 
        . . . . . . f f 6 6 6 . 2 . . . 
        . . . . . f 2 2 6 6 6 . 2 . . . 
        . . . . f 2 2 2 f f f . . . . . 
        . . . f 2 2 2 a . 3 a . . . . . 
        . 2 2 2 f 2 3 a . 3 a . . . . . 
        . 2 2 2 f 2 3 a . 3 a . . . . . 
        . 2 . 2 f f a a . a a . . . . . 
        . . . . f f 1 a . 1 a . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
function clearGame () {
    for (let value2 of sprites.allOfKind(SpriteKind.Coin)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Goal)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.TheUchihaha)) {
        value4.destroy()
    }
}
function initializeUchihahaAnimations () {
    TheMovingUchihaha = animation.createAnimation(ActionKind.itsmoving, 200)
    TheMovingUchihaha.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f f . f f . . . . . . 
        . . . . f . f f f f f . . . . . 
        . . . . f f 2 2 b b f . . . . . 
        . . . . . f d f d d f . . . . . 
        . . . . 4 4 4 f d d d . . . . . 
        . . . . 4 4 4 4 f f 4 d . . . . 
        . . . . . d 4 4 f f 4 d . . . . 
        . . . . . d . f f f f d . . . . 
        . . . . . d b 2 2 2 2 d . . . . 
        . . . . . . b f . 2 2 . . . . . 
        . . . . . . b f . f f . . . . . 
        . . . . . . 2 2 . 2 2 . . . . . 
        . . . . . . f f . f f . . . . . 
        `)
    TheMovingUchihaha.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f f . f f f . . . . . 
        . . . . f 2 f f f f f . . . . . 
        . . . . f f 2 2 b b b . . . . . 
        . . . . . 2 d f d d d . . . . . 
        . . . . 4 4 4 f d d d . . . . . 
        . . . . . . 4 4 f f 4 . . . . . 
        . . . . . . d d d f 4 d d . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . . b 2 2 2 2 2 . . . . 
        . . . . . . b f . . 2 2 . . . . 
        . . . . . . b f . . f f . . . . 
        . . . . . . 2 2 . . 2 2 . . . . 
        . . . . . . f f . . f f . . . . 
        `)
    TheMovingUchihaha.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f f . f f f f . . . . 
        . . . . 2 2 f f f f f f . . . . 
        . . . . f 2 2 2 b b f f . . . . 
        . . . . 2 f d f d d f . . . . . 
        . . . . . . 4 f d d d . . . . . 
        . . . . . . 4 4 f f 4 . . . . . 
        . . . . . . . d d d 4 d d d . . 
        . . . . . . . 4 f f f . . . . . 
        . . . . . . b 2 2 2 2 2 . . . . 
        . . . . . . b f . . 2 2 . . . . 
        . . . . . . b f . . f f . . . . 
        . . . . . . 2 2 . . 2 2 . . . . 
        . . . . . . f f . . f f . . . . 
        `)
    TheMovingUchihaha.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f f . f f f . . . . . 
        . . . . f . f f f f f . . . . . 
        . . . . f f 2 2 b f . . . . . . 
        . . . . . f d f d f . . . . . . 
        . . . . 4 4 4 f d d . . . . . . 
        . . . . 4 4 4 4 f f 4 . . . . . 
        . . . . . . d d d f 4 d d . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . . b 2 2 2 2 . . . . . 
        . . . . . . b f . . 2 2 . . . . 
        . . . . . . b f . . f f . . . . 
        . . . . . . 2 2 . . 2 2 . . . . 
        . . . . . . f f . . f f . . . . 
        `)
    TheIdleUchihaha = animation.createAnimation(ActionKind.notmoving, 100)
    TheIdleUchihaha.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f f . f f . . . . . . 
        . . . . f . f f f f f . . . . . 
        . . . . f f 2 2 b b f . . . . . 
        . . . . . f d f d d f . . . . . 
        . . . . 4 4 4 f d d d . . . . . 
        . . . . 4 4 4 4 f f 4 d . . . . 
        . . . . . d 4 4 f f 4 d . . . . 
        . . . . . d . f f f f d . . . . 
        . . . . . d b 2 2 2 2 d . . . . 
        . . . . . . b f . 2 2 . . . . . 
        . . . . . . b f . f f . . . . . 
        . . . . . . 2 2 . 2 2 . . . . . 
        . . . . . . f f . f f . . . . . 
        `)
}
statusbars.onZero(StatusBarKind.BOSS_HEALth, function (status) {
    DEMON_BOSS.destroy(effects.bubbles, 200)
    music.bigCrash.play()
    game.over(true, effects.smiles)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile1`, function (sprite, location) {
    currentLevel += 1
    if (hasNextLevel()) {
        game.splash("NEXT level unlocked  =)")
        setLevelTileMap(currentLevel)
    }
})
function createEnemies () {
    // enemy that flies at player
    for (let value5 of tiles.getTilesByType(assets.tile`myTile1`)) {
        DEMON_BOSS = sprites.create(img`
            .......22222.................22222..
            ......2222222...............222222..
            .....22f2..222...2..........22.2222.
            ....22ff2..22....2.....2.......2f22.
            ...22fff2........2.....22......2f2.2
            ....2fff2.....22....2........2.2f222
            ...2ffff22f...2..............2.2f22.
            ..2fffff22f...........2......222f22.
            ..2ffff22222.ff222.....2222.222f222.
            ..2ffff26ff22222222..22.2222222f2ff.
            .22ffff2fff22ffffff222ffff22ffff22f2
            .22fff22ff22ffffff222fffff226ffff2f2
            2.ffff2fff2ffffff2ff2ffff2222fffff22
            22fff22ff2f66ff111111111ffff2fffff22
            .2fff2ff2266f1111221111111fff2fffff2
            .2fff2ff266fb11112222211111ff22ffff2
            226f22ff2ff11bb2222222211bbbf.2ffff2
            22622ff2fff111b1222222221b11f.2fff62
            .222fff2ffb11bb2266666622b111f2fff62
            .f22fff2ff1112262266666222111f.2ff6.
            ..222ff2ff1122266266662662211ff2f666
            ..2ffff2ff11262666ffff6666211ff266..
            ..222ff2ffbbb6266ffffff6662bbff2622.
            ....2f22ffb122266f222ff66621bf.22...
            ....262ffbb112222f222ff62621bf22....
            ....222fff1112266ff2fff62221bb22....
            .....222ff1111b666fff66662111ffffff.
            .....ff2fff11b22666666622111ffeeeeff
            .ffffff222f1bb2266626622bb1ffeee11ee
            ff2288fff..fb1222262262111fee118881e
            f2588888ff..f1112222221111fe11888881
            f588fff82ff..ff111111111fffe188fff81
            f588ff1885ff...fffffffff.fee18811f81
            f588f11885ff............ffee18811f81
            f255885555f...............fee1188881
            ff255552fff...............ffee111111
            `, SpriteKind.Boss)
        DEMON_BOSS.setScale(2, ScaleAnchor.TopRight)
        tiles.placeOnTile(DEMON_BOSS, value5)
        tiles.setTileAt(value5, assets.tile`tile0`)
        DEMONBOSS_HEALTH = statusbars.create(20, 4, StatusBarKind.BOSS_HEALth)
        DEMONBOSS_HEALTH.attachToSprite(DEMON_BOSS, -10, -2)
        DEMONBOSS_HEALTH.setColor(15, 1)
        DEMONBOSS_HEALTH.value = 500
    }
    // enemy that flies at player
    for (let value6 of tiles.getTilesByType(assets.tile`only`)) {
        TheUchihaha = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . f f f . f f . . . . . . 
            . . . . f . f f f f f . . . . . 
            . . . . f f 2 2 b b f . . . . . 
            . . . . . f d f d d f . . . . . 
            . . . . 4 4 4 f d d d . . . . . 
            . . . . 4 4 4 4 f f 4 d . . . . 
            . . . . . d 4 4 f f 4 d . . . . 
            . . . . . d . f f f f d . . . . 
            . . . . . d b 2 2 2 2 d . . . . 
            . . . . . . b f . 2 2 . . . . . 
            . . . . . . b f . f f . . . . . 
            . . . . . . 2 2 . 2 2 . . . . . 
            . . . . . . f f . f f . . . . . 
            `, SpriteKind.TheUchihaha)
        TheUchihaha.setScale(2.3, ScaleAnchor.Top)
        tiles.placeOnTile(TheUchihaha, value6)
        tiles.setTileAt(value6, assets.tile`tile0`)
        animation.attachAnimation(TheUchihaha, TheMovingUchihaha)
        animation.attachAnimation(TheUchihaha, TheIdleUchihaha)
        TheUchihaha.x = 100
    }
}
function showInstruction (text: string) {
    game.showLongText(text, DialogLayout.Bottom)
    music.footstep.play()
}
function initializeHeroAnimations () {
    animateRun()
    animateIdle()
}
function createPlayer (player2: Sprite) {
    scene.cameraFollowSprite(player2)
    controller.moveSprite(player2, 50, 0)
    madaraHealth = statusbars.create(10, 2, StatusBarKind.madarahealth)
    Madara.z = 5
    madaraHealth.attachToSprite(Madara, 3, -2)
    madaraHealth.setColor(5, 1)
    madaraHealth.value = 100
}
function initializeLevel (level: number) {
    effects.clouds.startScreenEffect()
    playerStartLocation = tiles.getTilesByType(assets.tile`tile6`)[0]
    tiles.placeOnTile(Madara, playerStartLocation)
    tiles.setTileAt(playerStartLocation, assets.tile`tile0`)
    createEnemies()
    spawnGoals()
}
sprites.onOverlap(SpriteKind.TheUchihaha, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 100)
    counter += randint(1, 2)
    info.changeScoreBy(1)
    if (counter > 6) {
        sprite.destroy(effects.trail, 100)
        counter = 0
    }
})
function hasNextLevel () {
    return currentLevel != levelCount
}
sprites.onOverlap(SpriteKind.Boss, SpriteKind.Projectile, function (sprite, otherSprite) {
    DEMONBOSS_HEALTH.value += -1
    info.changeScoreBy(randint(10, 20))
})
function spawnGoals () {
    for (let value7 of tiles.getTilesByType(assets.tile`tile5`)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . 2 9 9 9 9 2 2 2 . . . 
            . . . 2 2 9 9 1 1 1 9 9 2 . . . 
            . . . 2 9 1 1 2 2 1 1 9 2 2 . . 
            . 2 2 2 9 1 2 2 2 2 1 1 9 2 2 . 
            . 2 2 9 1 2 2 f f 2 2 1 9 9 2 2 
            . . 2 1 1 2 2 1 f 2 2 1 1 9 2 2 
            . . . 2 2 1 2 2 2 2 2 1 9 2 2 . 
            . . . . 2 9 1 1 1 1 1 9 2 2 . . 
            . . . . 2 2 2 2 9 2 2 2 2 . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Coin)
        tiles.placeOnTile(coin, value7)
        animation.attachAnimation(coin, EyesAnimation)
        animation.setAction(coin, ActionKind.Idle)
        tiles.setTileAt(value7, assets.tile`tile0`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    madaraHealth.value += -3
})
let heroFacingLeft = false
let coin: Sprite = null
let playerStartLocation: tiles.Location = null
let TheUchihaha: Sprite = null
let DEMONBOSS_HEALTH: StatusBarSprite = null
let DEMON_BOSS: Sprite = null
let TheIdleUchihaha: animation.Animation = null
let TheMovingUchihaha: animation.Animation = null
let mainRunRight: animation.Animation = null
let mainRunLeft: animation.Animation = null
let mainIdleRight: animation.Animation = null
let mainIdleLeft: animation.Animation = null
let projectile: Sprite = null
let madaraHealth: StatusBarSprite = null
let EyesAnimation: animation.Animation = null
let currentLevel = 0
let levelCount = 0
let Madara: Sprite = null
let counter = 0
counter = 0
Madara = sprites.create(img`
    . . . . . . f f f f f f f . . . 
    . . . . . f f f f . f f . f . . 
    . . . . . f f f f f f f f . . . 
    . . . . . f b b f 2 f f . . . . 
    . . . . . f d d d d f . . . . . 
    . . . . 2 d d d 2 2 2 2 . . . . 
    . . . . f 2 6 2 2 2 2 . . . . . 
    . . . 2 . f 6 f 2 f . . . . . . 
    . . . 2 . 6 6 6 f f . . . . . . 
    . . . 2 . 6 6 6 2 2 f . . . . . 
    . . . . . f f f 2 2 2 f . . . . 
    . . . . . a 6 . a 2 2 2 f . . . 
    . . . . . a 6 . a 6 2 2 f f . . 
    . . . . . a 6 . a 6 2 2 2 f . . 
    . . . . . a a . a a . 2 2 . . . 
    . . . . . a f . a f . . 2 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Madara.setScale(2, ScaleAnchor.TopRight)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998ff8ffffff8ffffffffffff888ffff8fff
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888f8888888888fffffff88888fffffff8888
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888ffff8888f8ff888888888888888888888f8
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888ffff888ffff8888888888888ff88ffff888
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998ff8ffff88ffffff8f8ff888888888888fff888
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998ff8ffff88ffffff88888fff8888f8888ffff88
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998ff8ffff8ffffff888888ffffff88888ffffff8
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998ff8ffff8ffff8f88888ffffffff8888ffffff8
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998ff8ffff8f88f888f88fffffffff88888fff8f8
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998ff88fff8f88f888888fffffffff888888f8888
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998ff88ff88ff8f888888fffffffff888888f8888
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998f888888ff8f8888888fffffff8888888ff888
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998f8f888f8f8f888f8888fffffff888888ff888
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999988f88f8ff88fff88888888f888f8888888f888
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998ff88f88f888ff8888888888888888888f8f8
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999988f88f8f88ff8888888888f8888888888f8f8
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999988ff888ff8888fff888888888f88f888ff888
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999988fff888ff88fffffff8f88f8888888fff88
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999988fff8f888fffff8fff8888888888fffff88
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998888f88f8888ffff88f8ff8f88888fffff88
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998888ff88f8f8ffffff8fff888f88fffff88
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998f88f888f8f888888f8888fff888f8f888
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998ff88f88888888888ffff8ff8fff8f889
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999988fff88ff8888ffffffffff8888888889
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999988ffff8888f888888ff8888888888899
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999988fffffff8888888888888888888999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998fffffffff88fff8888888ff899999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998888fffffff888888fff888899999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888ffffffffff888889999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999988888ffff88889999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888899999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9989998999899989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998999899989998999899989998999899989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989998999899989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
    9899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999999999999999999999999999
    8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
initializeAnimations()
createPlayer(Madara)
levelCount = 4
currentLevel = 0
setLevelTileMap(currentLevel)
giveIntroduction()
// set up hero animations
game.onUpdate(function () {
    if (Madara.vx < 0) {
        heroFacingLeft = true
    } else if (Madara.vx > 0) {
        heroFacingLeft = false
    }
    if (Madara.vx < 0) {
        animation.setAction(Madara, ActionKind.RunningLeft)
    } else if (Madara.vx > 0) {
        animation.setAction(Madara, ActionKind.RunningRight)
    } else {
        if (heroFacingLeft) {
            animation.setAction(Madara, ActionKind.IdleLeft)
        } else {
            animation.setAction(Madara, ActionKind.IdleRight)
        }
    }
})
// Flier movement
game.onUpdate(function () {
    for (let value8 of sprites.allOfKind(SpriteKind.TheUchihaha)) {
        if (Math.abs(value8.x - Madara.x) < 50) {
            if (value8.x - Madara.x < -5) {
                value8.vx = 20
            } else if (value8.x - Madara.x > 5) {
                value8.vx = -20
            }
            animation.setAction(value8, ActionKind.itsmoving)
        }
    }
    for (let value9 of sprites.allOfKind(SpriteKind.Boss)) {
        if (Math.abs(value9.x - Madara.x) < 70) {
            if (value9.x - Madara.x < -5) {
                value9.vx = 30
            } else if (value9.x - Madara.x > Madara.x) {
                value9.vx = -30
            }
            if (value9.y - Madara.y < -5) {
                value9.vy = 20
            } else if (value9.y - Madara.y > 5) {
                value9.vy = -20
            }
        } else {
            value9.vy = -20
            value9.vy = 0
        }
    }
})
forever(function () {
    music.playMelody("A A A G A E F E ", 500)
})
forever(function () {
    music.playMelody("F E F G F E F E ", 500)
})
