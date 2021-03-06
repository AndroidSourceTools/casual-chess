export interface Configuration {
    colorTheme: string,
    playSounds: boolean,
    highlightSquares: boolean,
    pieceTheme: string,
    boardTheme: string,
    pid: string,
    name: string
}

export interface Player {
    $key?: string,
    uid: string,
    pid: string,
    name: string,
    stars: string[],
    pushSubscription: string
}

export interface Game {
    $key?: string,
    uid: string,
    timestamp: Date,
    lastupdated: Date,
    vid: string,
    wid: string,
    bid: string,
    wpkey: string,
    bpkey: string,
    wpname: string,
    bpname: string,
    wpnotif: boolean,
    bpnotif: boolean,
    pgn: string
    gameover: boolean,
    wdeleted: boolean,
    bdeleted: boolean,
    status : string,
    statusDescription?: string
}

/*
  -----------------------------
  GAME STATUS
  -----------------------------
  WTR: White Turn
  BTR: Black Turn
  WWI: White Wins
  BWI: Black Wins
  DRA: Draw
  WOD: White Offers Draw
  BOD: Black Offers Draw
  WRD: White Rejects Draw offer
  BRD: Black Rejects Draw offer
  WRU: White Request Undo move
  BRU: Black Request Undo move
  WNU: White Rejects Undo move
  BNU: Black Rejects Undo move
  WRE: White Resigns
  BRE: Black Resigns
  -----------------------------
*/

export interface MoveTree {
    parent: MoveTree,
    children: MoveTree[],
    order: number,
    move: string,
    fen: string,
    quality: string
}

export interface Analysis {
    uid: string,
    pid: string,
    fen: string,
    timestamp: Date,
    gid: string,
    frompos: number,
    movetree: string
}