/**
 * Created by Anxin Yang on 6/12/2018.
 */
import CubY from '../Framework/CubY/CubY';
import homeContent from "../view/home";
let origin = {
    x: window.innerWidth/2,
    y: window.innerHeight/2
};
window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};
document.onmousemove = function(e){
    let x = e.clientX;
    let y = e.clientY;

    background.dx = -(x - origin.x)/10;
    background.dy = -(y - origin.y)/10;
};

var background = CubY.createElement('div','background');
background.style('width','100vw')
    .style('height','100vh')
    .style('position','fixed')
    .style('background','black')
    .style('top',0)
    .style('left',0)
    .style('zIndex',0);
var circleNum = mobilecheck()?50:128;
var circleList = [];

for(var i=0;i<circleNum;i++){
    let circle = CubY.createElement('div','backgroundCircle_'+i)
        .style('position','absolute')
        .style('width','20px')
        .style('height','20px')
        .style('borderRadius','4px')
        .style('background','#eccc68')
        .style('transition','0.3s linear')
        .style('boxShadow','0 0 10px #eccc68')
        .style('opacity', '0')
        .attr('activated',function () {
            let self = this;
            let x = Math.random()*window.innerWidth;
            let y = Math.random()*window.innerHeight;
            this.x = x;
            this.y = y;
            this.dx = Math.random()-0.5;
            this.dy = Math.random()-0.5;
            this.ds = 0.01;
            this.scale =  Math.random();
            this.counter = 10;
            this.style('transform','translate('+ x +'px,'+ y +'px)');
            this.circleAn = CubY.createRoutine('home_circle_animation_'+i)
                .attr('freq',50)
                .attr('action',function () {
                    let scale = self.scale;
                    let seed = Math.random();
                    self.x+=self.dx;
                    self.y+=self.dy;

                    self.style('transform','translate('+(self.x + (background.dx||0)*scale)+'px,'+(self.y + (background.dy||0)*scale)+'px) scale('+scale+')')
                        .style('opacity', scale)
                        .style('zIndex', scale>=0.8?2:0)
                        .style('boxShadow','0 0 '+(seed*10+10)+'px #eccc68');
                    if(self.x>window.innerWidth){
                        self.dx = -(seed*0.5+0.1);
                    }else if(self.x<0){
                        self.dx = seed*0.5+0.1;
                    }
                    if(self.y>window.innerHeight){
                        self.dy = -(seed*0.5+0.1);
                    }else if(self.y<0){
                        self.dy = seed*0.5+0.1;
                    }
                    self.counter--;
                    if(self.counter<=0){
                        self.counter=10;
                        self.scale+=circle.ds;
                        if(self.scale>=1){
                            self.ds=-0.01;
                        }
                        if(self.scale<=0){
                            self.ds=0.01;
                        }
                    }
                }).insert();
            this.circleAn2 = CubY.createRoutine('home_circle_animation_2_'+i)
                .attr('freq',300)
                .attr('action',function () {
                    let seed = Math.random();
                    self.style('boxShadow','0 0 '+(seed*40+10)+'px #eccc68');
                }).insert();
        })
        .attr('deactivated',function () {
            this.circleAn.remove();
            this.circleAn2.remove();
        });
    circle.rearrange = function () {
        let x = Math.random()*window.innerWidth;
        let y = Math.random()*window.innerHeight;
        let scale = circle.scale =  Math.random();
        circle.x = x;
        circle.y = y;
        circle.style('transform','translate('+(self.x + (background.dx||0)*scale)+'px,'+(self.y + (background.dy||0)*scale)+'px) scale('+scale+')')
    };
    CubY.connect('currentView',circle.rearrange);
    CubY.connect('viewportSize',circle.rearrange);
    background.appendElement(circle);

};
export default background;