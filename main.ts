namespace SpriteKind {
    export const Treasure = SpriteKind.create()
    export const Object = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`1400080000000006000000000000000000000000000000000000040202020203000000000000000000000000000000000000000000000600000000000000000000000000000000000000010000000000000000000000000100000006000000010000000000000000000004030000000403000000000100000600000701000000000100000000000000000004030000010505050505050505050505050505050505050505`, img`
        . . . . . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 2 . . . . . . . . . 
        . . . 2 . . . . . . . 2 . . . . . . . . 
        . . 2 2 . . . 2 2 . . . . 2 . . . . . . 
        2 . . . . 2 . . . . . . . . . 2 2 . . 2 
        . . . . . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.builtin.oceanSand0,sprites.builtin.oceanSand2,sprites.builtin.oceanSand3,sprites.builtin.oceanSand1,sprites.dungeon.hazardLava1,sprites.builtin.coral0,myTiles.tile5], TileScale.Sixteen))
    TreasureChest2.destroy()
    TreasureChest = sprites.create(img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, SpriteKind.Treasure)
    TreasureChest.setPosition(40, 8)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Treasure, function (sprite, otherSprite) {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(0, 6), sprites.builtin.forestTiles0)) {
        info.changeScoreBy(50)
        music.magicWand.play()
        TreasureChest.destroy(effects.confetti, 500)
        TreasureChest2 = sprites.create(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b 5 c c c 5 b c c b c 5 5 5 c b 
            b 5 5 c 5 5 c b b c 5 5 5 5 5 b 
            b 5 2 5 9 5 5 5 c 5 3 5 5 9 9 b 
            b 7 5 5 5 9 5 5 5 5 5 2 5 9 5 b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.Object)
        TreasureChest2.setPosition(72, 8)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(0, 6), sprites.builtin.oceanSand0)) {
        info.changeScoreBy(50)
        music.magicWand.play()
        TreasureChest.destroy(effects.confetti, 500)
        TreasureChest2 = sprites.create(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b 5 c c c 5 b c c b c 5 5 5 c b 
            b 5 5 c 5 5 c b b c 5 5 5 5 5 b 
            b 5 2 5 9 5 5 5 c 5 3 5 5 9 9 b 
            b 7 5 5 5 9 5 5 5 5 5 2 5 9 5 b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.Object)
        TreasureChest2.setPosition(40, 8)
    } else {
        info.changeScoreBy(50)
        music.magicWand.play()
        TreasureChest.destroy(effects.confetti, 500)
        TreasureChest2 = sprites.create(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b 5 c c c 5 b c c b c 5 5 5 c b 
            b 5 5 c 5 5 c b b c 5 5 5 5 5 b 
            b 5 2 5 9 5 5 5 c 5 3 5 5 9 9 b 
            b 7 5 5 5 9 5 5 5 5 5 2 5 9 5 b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.Object)
        TreasureChest2.setPosition(168, 8)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`1400080000000000000000000000000000000000000000000004000000000401040101010000000000000000000000010000000000000000000000000004000001000000010000000000000000000001000000000000040000000000000001000000010001000000020100000001000004010000000100000000000001000000000001000000000001000000000001010303030303030303030303030303030303030303`, img`
        . . . . . . . . . . . . . . . . . . . . 
        . 2 . . . . 2 2 2 2 2 2 . . . . . . . . 
        . . . 2 . . . . . . . . . . . . . 2 . . 
        2 . . . 2 . . . . . . . . . . 2 . . . . 
        . . 2 . . . . . . . 2 . . . 2 . 2 . . . 
        . 2 . . . 2 . . 2 2 . . . 2 . . . . . . 
        2 . . . . . 2 . . . . . 2 . . . . . 2 2 
        . . . . . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,sprites.dungeon.hazardLava1,myTiles.tile4], TileScale.Sixteen))
    TreasureChest2.destroy()
    TreasureChest = sprites.create(img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, SpriteKind.Treasure)
    TreasureChest.setPosition(168, 8)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    game.over(true)
})
let TreasureChest2: Sprite = null
let TreasureChest: Sprite = null
let myCorg = corgio.create(SpriteKind.Player)
TreasureChest = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.Treasure)
TreasureChest.setPosition(72, 8)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
tiles.setTilemap(tiles.createTilemap(hex`1400080000000000000000000000000000000000000000000000000001010101010000010000000000000000000000000000000000000000000100000000000000000000000000000001000000000000010000000000000100010000000001000000000000010000000001000000000100000001000000000000000201000000000000000000000001000000000001010303030303030303030303030303030303030303`, img`
    . . . . . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 . . 2 . . . . . . . . 
    . . . . . . . . . . . . . 2 . . . . . . 
    . . . . . . . . . 2 . . . . . . 2 . . . 
    . . . 2 . 2 . . . . 2 . . . . . . 2 . . 
    . . 2 . . . . 2 . . . 2 . . . . . . . . 
    2 . . . . . . . . . . . 2 . . . . . 2 2 
    . . . . . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.builtin.forestTiles0,myTiles.tile1,sprites.dungeon.hazardLava1], TileScale.Sixteen))
myCorg.follow()
info.setScore(0)
