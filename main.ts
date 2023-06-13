namespace SpriteKind {
    export const Desktop = SpriteKind.create()
}
scene.setBackgroundImage(assets.image`bg`)
music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
game.splash("Warning: This ROM is in its early development stages and might be unstable.")
let MusicICO = sprites.create(assets.image`musicico`, SpriteKind.Desktop)
MusicICO.setPosition(9, 9)
