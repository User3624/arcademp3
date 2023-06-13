namespace SpriteKind {
    export const Desktop = SpriteKind.create()
}
scene.setBackgroundImage(assets.image`bg`)
music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
game.splash("Warning: This ROM is in its early development stages and might be unstable.")
let MusicICO = sprites.create(assets.image`musicico`, SpriteKind.Desktop)
MusicICO.setPosition(9, 9)
let SettingsICO = sprites.create(assets.image`SettingsICO`, SpriteKind.Desktop)
SettingsICO.setPosition(27, 9)
let VideoICO = sprites.create(assets.image`VideoICO`, SpriteKind.Desktop)
VideoICO.setPosition(45, 9)
let cursor = sprites.create(assets.image`cursor-i-guess`, SpriteKind.Player)
controller.moveSprite(cursor)
