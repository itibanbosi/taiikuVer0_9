enum vibrater_onoff {
    ON,
    OFF,
}
enum daisyou {
    大きい,
    小さい,
}
enum select_xyz {
    X,
    Y,
    Z,
    }


//% color="#3943c2" block="上教大_体育V0.98"
namespace matubara_blocks {


  //% color="#3943ff" weight=50 blockId=axis
  //% block="|%xyz| 角度の値" group="センサー"
  export function axis( xyz:select_xyz){
    switch(xyz){
        case select_xyz.X:
        return Math.round(input.acceleration(Dimension.X)/1100*90)+90;
        case select_xyz.Y:
        return Math.round(input.acceleration(Dimension.Y)/1100*90);
        case select_xyz.Z:
        return Math.round(input.acceleration(Dimension.Z)/1100*90);
    }
  }


 //% weight=39 blockId=x_ude_more block="X軸＿腕をふる角度が |%limit| 度より |%kakudo|" group="センサー"
    export function x_ude_more (limit:number,kakudo:daisyou): boolean {
    switch(kakudo){
        case daisyou.大きい:
        if ((input.acceleration(Dimension.X)/1100*90)+90 > limit )
            {
            return true;
            }
            else
            {
            return false;
            }
        case daisyou.小さい :
            if ((input.acceleration(Dimension.X)/1100*90)+90 < limit ){
            return true;
            }
            else
            {
            return false;
            }
        }
    }

 
 //% weight=37 blockId=y_ude_more block="ｙ軸＿腕をふる角度が |%limit| 度より |%kakudo|" group="センサー"
  export function y_ude_more(limit: number,kakudo:daisyou): boolean {
     switch(kakudo){
        case daisyou.大きい:
        if ((input.acceleration(Dimension.Y)/1100*90) > limit ){
            return true;
            }else{
            return false;
        }
 
        case daisyou.小さい :
        if ((input.acceleration(Dimension.Y)/1100*90) < limit ){
            return true;
            }else{
            return false;
        }
    }   
  }
 
 //% weight=35 blockId=z_ude_more block="ｚ軸＿腕をふる角度が |%limit| 度より |%kakudo|" group="センサー"
  export function z_ude_more(limit: number,kakudo:daisyou): boolean {
     switch(kakudo){
        case daisyou.大きい:
        if ((input.acceleration(Dimension.Z)/1100*90) > limit ){
            return true;
            }else{
            return false;
        }
        
        case daisyou.小さい :
        if ((input.acceleration(Dimension.Z)/1100*90) < limit ){
            return true;
            }else{
            return false;
        }
    }
    }   

 //% color="#ffa800" weight=23 blockId=vib_kanketu block="振動する（音なし）" group="機能"
  export function vib_kanketu() {
    let i=0;
    for (let i=1 ; i<3 ;i++)　{
            basic.pause(100); 
            pins.digitalWritePin(DigitalPin.P1, 1); 
            basic.pause(400);  
            pins.digitalWritePin(DigitalPin.P1, 0);
            basic.pause(400); 
        }
    }

 //% color="#ffa800" weight=23 blockId=vib_kanketu_oto block="振動する（音付き）" group="機能"
  export function vib_kanketu_oto() {
    let i=0;
    for (let i=1 ; i<3 ;i++)　{
            basic.pause(100); 
            pins.digitalWritePin(DigitalPin.P1, 1); 
            music.ringTone(698)
            basic.pause(400);  
            pins.digitalWritePin(DigitalPin.P1, 0);
            music.rest(music.beat(BeatFraction.Sixteenth))           
            basic.pause(400); 
        }
    }



 //% color="#ffa800" weight=12 blockId=vib block="振動 |%mode|" group="機能"
  export function vib(mode: vibrater_onoff) {
            if (mode == vibrater_onoff.ON ) {
            return pins.digitalWritePin(DigitalPin.P1, 1);
            } else {
            return pins.digitalWritePin(DigitalPin.P1, 0);
        }
    }   

  
    
 //% color="#ff3d03" weight=11 blockId=oto block="音を鳴らす" group="機能"
  export function oto() {
        music.playTone(659, music.beat(BeatFraction.Eighth))
  }

  //% color="#1E90FF" weight=10 block="待ち時間（秒）|%second|" group="機能"
  //% second.min=0 second.max=10
  export function driveForwards(second: number): void {
    basic.pause(second * 1000);
  }



}