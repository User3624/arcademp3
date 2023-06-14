namespace SpriteKind {
    export const Desktop = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursor.overlapsWith(MusicICO)) {
        cursor.sayText("In development.", 500, false)
    }
    if (cursor.overlapsWith(SettingsICO)) {
        cursor.sayText("In development.", 500, false)
    }
    if (cursor.overlapsWith(VideoICO)) {
        cursor.sayText("In development.", 500, false)
    }
    if (cursor.overlapsWith(Power)) {
        RestartOption = sprites.create(assets.image`ResetOption`, SpriteKind.Desktop)
        sprites.destroy(cursor)
        cursor = sprites.create(assets.image`cursor-i-guess`, SpriteKind.Player)
        controller.moveSprite(cursor)
        RestartOption.setPosition(63, 18)
    }
    if (cursor.overlapsWith(RestartOption)) {
        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
        game.reset()
    }
})
let RestartOption: Sprite = null
let cursor: Sprite = null
let Power: Sprite = null
let VideoICO: Sprite = null
let SettingsICO: Sprite = null
let MusicICO: Sprite = null
scene.setBackgroundImage(assets.image`bg`)
music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
game.splash("Warning: This ROM is in its early development stages and might be unstable.")
MusicICO = sprites.create(assets.image`musicico`, SpriteKind.Desktop)
MusicICO.setPosition(9, 9)
SettingsICO = sprites.create(assets.image`SettingsICO`, SpriteKind.Desktop)
SettingsICO.setPosition(27, 9)
VideoICO = sprites.create(assets.image`VideoICO`, SpriteKind.Desktop)
VideoICO.setPosition(45, 9)
Power = sprites.create(assets.image`power`, SpriteKind.Desktop)
Power.setPosition(63, 9)
cursor = sprites.create(assets.image`cursor-i-guess`, SpriteKind.Player)
controller.moveSprite(cursor)
scaling.scaleToPercent(cursor, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
cursor.setStayInScreen(true)
game.onUpdateInterval(500, function () {
    if (cursor.overlapsWith(MusicICO)) {
        cursor.sayText("Music", 500, false)
    }
    if (cursor.overlapsWith(SettingsICO)) {
        cursor.sayText("Settings", 500, false)
    }
    if (cursor.overlapsWith(VideoICO)) {
        cursor.sayText("Video", 500, false)
    }
    if (cursor.overlapsWith(Power)) {
        cursor.sayText("Power Options", 500, false)
    }
})
