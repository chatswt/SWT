var Engine = function(){
    const VERSION='0.1';
    const START_FEN='rheakaehr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RHEAKAEHR - - 0 1';
    const RED=0;
    const BLUE=1;
    //PE
    const EMPTY=0;
    const RED_PAWN=1;
    const RED_ADVIRSOR=2;
    const RED_ELEPHANT=3;
    const RED_HORSE=4;
    const RED_CANNON=5;
    const RED_ROOK=6;
    const RED_KING=7;
    const BLUE_PAWN=8;
    const BLUE_ADVIRSOR=9;
    const BLUE_ELEPHANT=10;
    const BLUE_HORSE=11;
    const BLUE_CANNON=12;
    const BLUE_ROOK=13;
    const BLUE_KING=14;
    const OFFBOARD=15;
    //SE
    
    /*
        P  A  E  H C  R  K           p  a e  h  c  r  k
        卒 士 象 馬 砲 車 將          兵 仕 相 马 炮 俥 帥
        
        Board representation 11 x 14

        x x x x x x x x x x x
        x 1 2 3 4 5 6 7 8 9 x
        x r h e a k a e h r x
        x . . . . . . . . . x
        x . c . . . . . c . x
        x p . p . p . p . p x
        x . . . . . . . . . x
        x . . . . . . . . . x
        x P . P . P . P . P x
        x . C . . . . . C . x
        x . . . . . . . . . x
        x R H E A K A E H R x
        x 一 二 三 四 五 六 七 八 九 x
        x x x x x x x x x x x

    */
    return{

    }
}