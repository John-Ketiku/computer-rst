class ActionKind(Enum):
    RunningLeft = 0
    RunningRight = 1
    Idle = 2
    IdleLeft = 3
    IdleRight = 4
    JumpingLeft = 5
    JumpingRight = 6
    CrouchLeft = 7
    CrouchRight = 8
    Flying = 9
    Walking = 10
    Jumping = 11
    attacking = 12
@namespace
class SpriteKind:
    Bumper = SpriteKind.create()
    Goal = SpriteKind.create()
    Coin = SpriteKind.create()
    Flier = SpriteKind.create()
    TheUchihaha = SpriteKind.create()
    madara = SpriteKind.create()
    Shuriken = SpriteKind.create()
@namespace
class StatusBarKind:
    madarahealth = StatusBarKind.create()
def initializeAnimations():
    initializeHeroAnimations()
    initializeCoinAnimation()
    initializeUchihahaAnimations()
def giveIntroduction():
    game.set_dialog_frame(img("""
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
    """))
    game.set_dialog_cursor(img("""
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
    """))
    showInstruction("Move with the left and right buttons.")
    showInstruction("kill the uchihaha's and get as many  eyes as you can")
def initializeCoinAnimation():
    global EyesAnimation
    EyesAnimation = animation.create_animation(ActionKind.Idle, 200)
    EyesAnimation.add_animation_frame(img("""
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
    """))
    EyesAnimation.add_animation_frame(img("""
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
    """))
    EyesAnimation.add_animation_frame(img("""
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
    """))
    EyesAnimation.add_animation_frame(img("""
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
    """))
    EyesAnimation.add_animation_frame(img("""
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
    """))
    EyesAnimation.add_animation_frame(img("""
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
    """))
    EyesAnimation.add_animation_frame(img("""
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
    """))
    EyesAnimation.add_animation_frame(img("""
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
    """))
    EyesAnimation.add_animation_frame(img("""
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
    """))
    EyesAnimation.add_animation_frame(img("""
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
    """))

def on_on_zero(status):
    Madara.destroy(effects.fire, 200)
    music.power_down.play()
    carnival.custom_game_over_expanded("YOU LOST DO BETTER",
        effects.melt,
        music.power_down,
        carnival.ScoreTypes.HSCORE)
statusbars.on_zero(StatusBarKind.madarahealth, on_on_zero)

def on_on_overlap(sprite, otherSprite):
    madaraHealth.value += 30
    otherSprite.destroy(effects.cool_radial, 200)
    otherSprite.y += -3
    info.change_score_by(1)
    music.spooky.play()
sprites.on_overlap(SpriteKind.player, SpriteKind.Coin, on_on_overlap)

def animateIdle():
    global mainIdleLeft, mainIdleRight
    mainIdleLeft = animation.create_animation(ActionKind.IdleLeft, 100)
    animation.attach_animation(Madara, mainIdleLeft)
    mainIdleLeft.add_animation_frame(img("""
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
                . . . . . . a f . a f . . . . . 
                . . . . . . . . . . . . . . . .
    """))
    mainIdleRight = animation.create_animation(ActionKind.IdleRight, 100)
    animation.attach_animation(Madara, mainIdleRight)
    mainIdleRight.add_animation_frame(img("""
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
                . . . . . f a . f a . . . . . . 
                . . . . . . . . . . . . . . . .
    """))

def on_on_overlap2(sprite2, otherSprite2):
    madaraHealth.value += -0.8
sprites.on_overlap(SpriteKind.player, SpriteKind.TheUchihaha, on_on_overlap2)

def setLevelTileMap(level: number):
    clearGame()
    if level == 0:
        tiles.set_tilemap(tilemap("""
            level
        """))
    elif level == 1:
        tiles.set_tilemap(tilemap("""
            level_0
        """))
    elif level == 2:
        tiles.set_tilemap(tilemap("""
            level_1
        """))
    initializeLevel(level)
def animateRun():
    global mainRunLeft, mainRunRight
    mainRunLeft = animation.create_animation(ActionKind.RunningLeft, 100)
    animation.attach_animation(Madara, mainRunLeft)
    mainRunLeft.add_animation_frame(img("""
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
                . . . . a a f . a a . . . . . . 
                . . . . a f . . a f . . . . . . 
                . . . . . . . . . . . . . . . .
    """))
    mainRunLeft.add_animation_frame(img("""
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
                . . . . . . . . a . . a . . . . 
                . . . . . . . a f . a f . . . . 
                . . . . . . . . . . . . . . . .
    """))
    mainRunLeft.add_animation_frame(img("""
        . . . . . . . f f f f f f . . . 
                . . . . . f f f f . f f . f . . 
                . . . . . f f f f f f f f . . . 
                . . . . . f b b f 2 2 f . . . . 
                . . . . . f d d d d . . . . . . 
                . . . . 2 d d d 2 2 2 2 . . . . 
                . . . . f 2 6 2 2 2 2 . . . . . 
                . . . 2 . f 6 f 2 f . . . . . . 
                . . . 2 . 6 6 6 f f . . . . . . 
                . . . 2 . 6 6 6 2 2 f . . . . . 
                . . . . . f f f 2 2 2 f . . . . 
                . . . . . a b . a 2 2 2 f . . . 
                . . . . . a b . a 6 2 2 f f . . 
                . . . . a b . a 6 . 2 2 2 f . . 
                . . . . a a . a a . . . 2 . . . 
                . . . . a f . a f . . . . . . . 
                . . . . . . . . . . . . . . . .
    """))
    mainRunLeft.add_animation_frame(img("""
        . . . . . . . f f f f f f . . . 
                . . . . . f f f f . f f . f . . 
                . . . . . f f f f f f f f . . . 
                . . . . . f b b f 2 2 f . . . . 
                . . . . . f d d d d . . . . . . 
                . . . . 2 d d d 2 2 2 2 . . . . 
                . . . . f 2 6 2 2 2 2 . . . . . 
                . . . 2 . f 6 f 2 f . . . . . . 
                . . . 2 . 6 6 6 f f . . . . . . 
                . . . 2 . 6 6 6 2 2 f . . . . . 
                . . . . . f f f 2 2 2 f . . . . 
                . . . . . a 6 . a 2 2 2 f . . . 
                . . . . . a 6 . a 6 2 2 f f . . 
                . . . . . a 6 . a 6 2 2 2 f . . 
                . . . . . a a . a a . . 2 . . . 
                . . . . . a f . a f . . . . . . 
                . . . . . . . . . . . . . . . .
    """))
    mainRunRight = animation.create_animation(ActionKind.RunningRight, 100)
    animation.attach_animation(Madara, mainRunRight)
    mainRunRight.add_animation_frame(img("""
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
                . . f 2 . . 6 a . b a . . . . . 
                . . f . . . 6 a . b a . . . . . 
                . . . . . . a a . f a a . . . . 
                . . . . . . f a . . f a . . . . 
                . . . . . . . . . . . . . . . .
    """))
    mainRunRight.add_animation_frame(img("""
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
                . . . . f a . f a . . . . . . . 
                . . . . . . . . . . . . . . . .
    """))
    mainRunRight.add_animation_frame(img("""
        . . . f f f f f f . . . . . . . 
                . . f . f f . f f f f . . . . . 
                . . . f f f f f f f f . . . . . 
                . . . . f 2 2 f b b f . . . . . 
                . . . . . . d d d d f . . . . . 
                . . . . 2 2 2 2 d d d 2 . . . . 
                . . . . . 2 2 2 2 6 2 f . . . . 
                . . . . . . f 2 f 6 f . 2 . . . 
                . . . . . . f f 6 6 6 . 2 . . . 
                . . . . . f 2 2 6 6 6 . 2 . . . 
                . . . . f 2 2 2 f f f . . . . . 
                . . . f 2 2 2 a . b a . . . . . 
                . . f f 2 2 6 a . b a . . . . . 
                . . f 2 2 2 . 6 a . b a . . . . 
                . . . 2 . . . a a . a a . . . . 
                . . . . . . . f a . f a . . . . 
                . . . . . . . . . . . . . . . .
    """))
    mainRunRight.add_animation_frame(img("""
        . . . f f f f f f . . . . . . . 
                . . f . f f . f f f f . . . . . 
                . . . f f f f f f f f . . . . . 
                . . . . f 2 2 f b b f . . . . . 
                . . . . . . d d d d f . . . . . 
                . . . . 2 2 2 2 d d d 2 . . . . 
                . . . . . 2 2 2 2 6 2 f . . . . 
                . . . . . . f 2 f 6 f . 2 . . . 
                . . . . . . f f 6 6 6 . 2 . . . 
                . . . . . f 2 2 6 6 6 . 2 . . . 
                . . . . f 2 2 2 f f f . . . . . 
                . . . f 2 2 2 a . 6 a . . . . . 
                . . f f 2 2 6 a . 6 a . . . . . 
                . . f 2 2 2 6 a . 6 a . . . . . 
                . . . 2 . . a a . a a . . . . . 
                . . . . . . f a . f a . . . . . 
                . . . . . . . . . . . . . . . .
    """))
def clearGame():
    for value2 in sprites.all_of_kind(SpriteKind.Coin):
        value2.destroy()
    for value3 in sprites.all_of_kind(SpriteKind.Goal):
        value3.destroy()
    for value4 in sprites.all_of_kind(SpriteKind.TheUchihaha):
        value4.destroy()
def initializeUchihahaAnimations():
    global TheMovingUchihaha, TheIdleUchihaha
    TheMovingUchihaha = animation.create_animation(ActionKind.Flying, 200)
    TheMovingUchihaha.add_animation_frame(img("""
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
    """))
    TheMovingUchihaha.add_animation_frame(img("""
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
    """))
    TheMovingUchihaha.add_animation_frame(img("""
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
    """))
    TheMovingUchihaha.add_animation_frame(img("""
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
    """))
    TheIdleUchihaha = animation.create_animation(ActionKind.Idle, 100)
    TheIdleUchihaha.add_animation_frame(img("""
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
    """))

def on_on_zero2(status2):
    TheUchihaha2.destroy(effects.halo, 100)
    TheUchihaha2.vy = -50
    info.change_score_by(1)
statusbars.on_zero(StatusBarKind.enemy_health, on_on_zero2)

def on_overlap_tile(sprite3, location):
    global currentLevel
    currentLevel += 1
    if hasNextLevel():
        game.splash("Next Level")
        setLevelTileMap(currentLevel)
    else:
        game.over(True, effects.confetti)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        tile1
    """),
    on_overlap_tile)

def createEnemies():
    global TheUchihaha2, TheUchihahaHealth
    # enemy that flies at player
    for value6 in tiles.get_tiles_by_type(assets.tile("""
        tile7
    """)):
        TheUchihaha2 = sprites.create(img("""
                . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . f f f . . . . . . . 
                            . . . . f f f . f f . . . . . . 
                            . . . . f . f f f f f . . . . . 
                            . . . . f f 2 2 2 2 f . . . . . 
                            . . . . . f d f d d f . . . . . 
                            . . . . 4 4 4 f d d d . . . . . 
                            . . . . 4 4 4 4 f f 4 d . . . . 
                            . . . . . d 4 4 f f 4 d . . . . 
                            . . . . . d . f f f f d . . . . 
                            . . . . . d b 2 2 2 2 d . . . . 
                            . . . . . . b f . 2 2 . . . . . 
                            . . . . . . f f . f f . . . . . 
                            . . . . . . 2 2 . 2 2 . . . . . 
                            . . . . . . f f . f f . . . . . 
                            . . . . . . . . . . . . . . . .
            """),
            SpriteKind.TheUchihaha)
        TheUchihaha2.set_scale(2, ScaleAnchor.TOP_RIGHT)
        tiles.place_on_tile(TheUchihaha2, value6)
        tiles.set_tile_at(value6, assets.tile("""
            tile0
        """))
        animation.attach_animation(TheUchihaha2, TheMovingUchihaha)
        animation.attach_animation(TheUchihaha2, TheIdleUchihaha)
        TheUchihahaHealth = statusbars.create(10, 2, StatusBarKind.enemy_health)
        TheUchihahaHealth.attach_to_sprite(TheUchihaha2, 3, -2)
        TheUchihahaHealth.set_color(2, 1)
        TheUchihahaHealth.value = 200
def showInstruction(text: str):
    game.show_long_text(text, DialogLayout.BOTTOM)
    music.spooky.play()
def initializeHeroAnimations():
    animateRun()
    animateIdle()
def createPlayer(player2: Sprite):
    global madaraHealth
    scene.camera_follow_sprite(player2)
    controller.move_sprite(player2, 50, 0)
    player2.z = 5
    madaraHealth = statusbars.create(10, 2, StatusBarKind.madarahealth)
    madaraHealth.attach_to_sprite(Madara, 3, -2)
    madaraHealth.set_color(5, 1)
    madaraHealth.value = 300
def initializeLevel(level2: number):
    global playerStartLocation
    effects.blizzard.start_screen_effect()
    playerStartLocation = tiles.get_tiles_by_type(assets.tile("""
        tile6
    """))[0]
    tiles.place_on_tile(Madara, playerStartLocation)
    tiles.set_tile_at(playerStartLocation, assets.tile("""
        tile0
    """))
    createEnemies()
    spawnGoals()

def on_on_overlap3(sprite4, otherSprite3):
    TheUchihahaHealth.value += -2
    otherSprite3.destroy(effects.cool_radial, 100)
sprites.on_overlap(SpriteKind.TheUchihaha,
    SpriteKind.projectile,
    on_on_overlap3)

def hasNextLevel():
    return currentLevel != levelCount
def spawnGoals():
    global coin
    for value7 in tiles.get_tiles_by_type(assets.tile("""
        tile5
    """)):
        coin = sprites.create(img("""
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
            """),
            SpriteKind.Coin)
        tiles.place_on_tile(coin, value7)
        animation.attach_animation(coin, EyesAnimation)
        animation.set_action(coin, ActionKind.Idle)
        tiles.set_tile_at(value7, assets.tile("""
            tile0
        """))
projectile: Sprite = None
heroFacingLeft = False
coin: Sprite = None
playerStartLocation: tiles.Location = None
TheUchihahaHealth: StatusBarSprite = None
TheUchihaha2: Sprite = None
TheIdleUchihaha: animation.Animation = None
TheMovingUchihaha: animation.Animation = None
mainRunRight: animation.Animation = None
mainRunLeft: animation.Animation = None
mainIdleRight: animation.Animation = None
mainIdleLeft: animation.Animation = None
madaraHealth: StatusBarSprite = None
EyesAnimation: animation.Animation = None
currentLevel = 0
levelCount = 0
Madara: Sprite = None
Madara = sprites.create(img("""
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
            . . . . . . a f . a f . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.player)
Madara.set_scale(2, ScaleAnchor.TOP)
# how long to pause between each contact with a
# single enemy
invincibilityPeriod = 600
scene.set_background_image(img("""
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
"""))
initializeAnimations()
createPlayer(Madara)
levelCount = 3
currentLevel = 0
setLevelTileMap(currentLevel)
giveIntroduction()
# set up hero animations

def on_on_update():
    global heroFacingLeft, projectile
    if Madara.vx < 0:
        heroFacingLeft = True
    elif Madara.vx > 0:
        heroFacingLeft = False
    if controller.down.is_pressed():
        if heroFacingLeft:
            animation.set_action(Madara, ActionKind.CrouchLeft)
        else:
            animation.set_action(Madara, ActionKind.CrouchRight)
    elif Madara.vx < 0:
        animation.set_action(Madara, ActionKind.RunningLeft)
    elif Madara.vx > 0:
        animation.set_action(Madara, ActionKind.RunningRight)
    else:
        if heroFacingLeft:
            animation.set_action(Madara, ActionKind.IdleLeft)
        else:
            animation.set_action(Madara, ActionKind.IdleRight)
    if controller.A.is_pressed():
        projectile = sprites.create_projectile_from_sprite(img("""
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
            """),
            Madara,
            100,
            0)
        pause(100)
    elif controller.B.is_pressed():
        projectile = sprites.create_projectile_from_sprite(img("""
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
            """),
            Madara,
            -100,
            0)
        pause(100)
game.on_update(on_on_update)

# Flier movement

def on_on_update2():
    for value8 in sprites.all_of_kind(SpriteKind.TheUchihaha):
        if abs(value8.x - Madara.x) < 60:
            if value8.x - Madara.x < -5:
                value8.vx = 25
            elif value8.x - Madara.x > 5:
                value8.vx = -25
            animation.set_action(value8, ActionKind.Flying)
game.on_update(on_on_update2)
