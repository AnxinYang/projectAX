import CubY_DOM from './Framework/CubY/CubY_DOM';


var mainContent = new CubY_DOM('div','homeContent');
mainContent.style('width','100vw')
    .style('height','100vh')
    .style('background','#222f3e')
    .style('position','relative')
    .style('transition', '5s')
    .style('overflow','hidden')
    .appendClass('mainContent')
    .on('mousemove',function (e,d) {
        let x = e.clientX;
        let y = e.clientY;
        let origin = {
            x: window.innerWidth/2,
            y: window.innerHeight/2
        };
        mainContent.dx = -(x - origin.x)/10;
        mainContent.dy = -(y - origin.y)/10;

    });
var backgroundAn = cr.append('backgroundAn')
    .attr('freq',200)
    .attr('executionTimes',1)
    .attr('action',function () {
        mainContent.style('background','black')
    }).insert();

var headLine = mainContent.append('h1','headLine')
    .content('FRONT END ENGINEER')
    .style('position','fixed')
    .style('color','white')
    .style('width','100%')
    .style('height', '60px')
    .style('text-align','center')
    .style('left','0')
    .style('right','0')
    .style('bottom','33%')
    .style('margin','auto')
    .style('font-size','64px')
    .style('transition', '1s')
    .style('text-shadow','0 0 10px #70a1ff')
    .style('z-index',1)
    .on('mouseover',function () {
        this.style('text-shadow','0 0 30px #eccc68')
    })
    .on('mouseleave',function () {
        this.style('text-shadow','0 0 10px #70a1ff')
    });
var homeHeadLineAnimation = cr.append('home_headLine_animation')
    .attr('freq',25)
    .attr('action',function () {
        let odd = Math.random()*100;
        if(odd>50){
            headLine.style('text-shadow','0 0 30px #eccc68')
        }else{
            headLine.style('text-shadow','0 0 10px #70a1ff')
        }
    })
    .insert();

var subHeadLine = mainContent.append('h1','subHeadLine')
    .content('- who makes data alive -')
    .style('position','fixed')
    .style('color','#eccc68')
    .style('width','100%')
    .style('height', '30px')
    .style('text-align','center')
    .style('left','0')
    .style('right','0')
    .style('bottom','30%')
    .style('margin','auto')
    .style('font-size','32px')
    .style('transition', '1s')
    .style('text-shadow','0 0 10px #eccc68')
    .style('z-index',1);
var infoButtonHalo = mainContent.append('span','infoButtonHalo')
    .style('position','fixed')
    .style('color','#eccc68')
    .style('width','32px')
    .style('height', '32px')
    .style('overflow','hidden')
    .style('border-radius','4px')
    .style('text-align','center')
    .style('left','0')
    .style('right','0')
    .style('bottom','18%')
    .style('margin','auto')
    .style('font-size','24px')
    .style('transition', '0.5s')
    .style('border','1px solid #eccc68')
    .style('box-shadow','0 0 30px #eccc68')
    .style('cursor','pointer')
    .style('z-index',1);
var infoButton = mainContent.append('span','infoButton')
    .content('Wanna know more?')
    .style('position','fixed')
    .style('color','#eccc68')
    .style('width','32px')
    .style('height', '32px')
    .style('overflow','hidden')
    .style('border','1px solid transparent')
    .style('border-radius','4px')
    .style('text-align','center')
    .style('left','0')
    .style('right','0')
    .style('bottom','18%')
    .style('margin','auto')
    .style('font-size','24px')
    .style('transition', '0.5s')
    .style('background', '#eccc68')
    .style('text-shadow','0 0 5px #eccc68')
    .style('box-shadow','0 0 10x #eccc68')
    .style('cursor','pointer')
    .style('z-index',1)
    .on('click',function () {
        cc.storeValue('currentView','about');
    })
    .on('mouseover',function () {
        this.style('background','rgba(0, 0, 0, 0.5)')
            .style('width','100%')
            .style('box-shadow','')
        infoButton.overed = true;
    })
    .on('mouseleave',function () {
        this.style('background', '#eccc68')
            .style('width','32px')
            .style('box-shadow','0 0 10px #eccc68')
        infoButton.overed = false;
    });
var infoButtonHaloAn = cr.append('infoButtonHaloAn')
    .attr('freq',60)
    .attr('action',function () {
        if(infoButton.overed === true){
            infoButtonHalo.state = 0;
        }
        switch(infoButtonHalo.state){
            case undefined:
            case 0:
                infoButtonHalo.state = 1;
                infoButtonHalo.style('width', '64px')
                    .style('bottom','calc(18% - 15px)')
                    .style('height', '64px')
                    .style('opacity', 0);
                break;
            case 1:
                infoButtonHalo.state = 2;
                infoButtonHalo.style('width', '32px')
                    .style('bottom','18%')
                    .style('height', '32px');
                break;
            case 2:
                infoButtonHalo.state = 0;
                infoButtonHalo.style('opacity', 1);
                break;
        }
    }).insert();

window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};
var circleNum = mobilecheck()?50:150;
var circleList = [];

for(var i=0;i<circleNum;i++){
    let x = Math.random()*window.innerWidth;
    let y = Math.random()*window.innerHeight;
    let circle = new CubY_DOM('div','backgroundCircle_'+i)
        .style('position','absolute')
        .style('width','20px')
        .style('height','20px')
        .style('border-radius','4px')
        .style('background','#eccc68')
        .style('transition','0.3s linear')
        .style('box-shadow','0 0 10px #eccc68')
        .style('opacity', '0')
        .style('transform','translate('+x+'px,'+y+'px)')
        .attr('activate',function () {
            let self = this;
            this.x = x;
            this.y = y;
            this.dx = Math.random()-0.5;
            this.dy = Math.random()-0.5;
            this.ds = 0.01;
            this.scale =  Math.random();
            this.counter = 10;
            this.circleAn = cr.append('home_circle_animation_'+i)
                .attr('freq',5)
                .attr('action',function () {
                    let scale = self.scale;
                    let seed = Math.random();
                    self.x+=self.dx;
                    self.y+=self.dy;

                    self.style('transform','translate('+(self.x + (mainContent.dx||0)*scale)+'px,'+(self.y + (mainContent.dy||0)*scale)+'px) scale('+scale+')')
                        .style('opacity', scale)
                        .style('z-index', scale>=0.8?2:0)
                        .style('box-shadow','0 0 '+(seed*10+10)+'px #eccc68');
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
        })
        .attr('deactivate',function () {
           this.circleAn.remove();
        });
    mainContent.appendElement(circle);

};
export default mainContent;