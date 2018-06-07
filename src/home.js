import AXDOM from './Framework/Ax/AXDOM';


var mainContent = new AXDOM('div','homeContent');
mainContent.style('width','100%')
    .style('height','100vh')
    .style('background','#2f3640')
    .style('position','relative')
    .style('overflow','hidden');

var headLine = mainContent.append('h1','headLine')
    .content('Front-End Engineer')
    .style('position','absolute')
    .style('color','white')
    .style('width','100%')
    .style('height', '60px')
    .style('text-align','center')
    .style('left','0')
    .style('right','0')
    .style('bottom','33%')
    .style('margin','auto')
    .style('font-size','64px')
    .style('transition', '0.3s')
    .style('text-shadow','0 0 10px #70a1ff')
    .style('z-index',1)
    .on('mouseover',function () {
        this.style('text-shadow','0 0 20px #70a1ff')
    })
    .on('mouseleave',function () {
        this.style('text-shadow','0 0 10px #70a1ff')
    });
var homeHeadLineAnimation = AXR.append('home_headLine_animation')
    .attr('freq',10)
    .attr('action',function () {
        let odd = Math.random()*100;
        if(odd>50){
            headLine.style('text-shadow','0 0 20px #eccc68')
        }else{
            headLine.style('text-shadow','0 0 10px #70a1ff')
        }
    })
    .insert();
var circleNum = 150;
var circleList = [];
var origin = {
    x: window.innerWidth/2,
    y: window.innerHeight/2
};
for(var i=0;i<circleNum;i++){
    let x = Math.random()*window.innerWidth+10;
    let y = Math.random()*window.innerHeight+10;
    let circle = mainContent.append('div')
        .style('position','absolute')
        .style('width','20px')
        .style('height','20px')
        .style('border-radius','50%')
        .style('background','#eccc68')
        .style('transition','0.1s linear')
        .style('box-shadow','0 0 10px #eccc68')
        .style('opacity', '0')
        .style('transform','translate('+x+'px,'+y+'px)');
    circle.x = x;
    circle.y = y;
    circle.dx = Math.random()-0.5;
    circle.dy = Math.random()-0.5;
    circle.ds = 0.01;
    circle.scale =  Math.random();
    circle.counter = 10;
    let circleAn = AXR.append('home_circle_animation')
        .attr('freq',20)
        .attr('action',function () {
            let scale = circle.scale;
            circle.x+=circle.dx;
            circle.y+=circle.dy;

            circle.style('transform','translate('+circle.x+'px,'+circle.y+'px) scale('+scale+')')
                .style('opacity', scale)
                .style('box-shadow','0 0 '+(Math.random()*10+10)+'px #eccc68');
            if(circle.x>window.innerWidth){
                circle.dx = -(Math.random()*0.5+0.1);
            }else if(circle.x<0){
                circle.dx = Math.random()*0.5+0.1;
            }
            if(circle.y>window.innerHeight){
                circle.dy = -(Math.random()*0.5+0.1);
            }else if(circle.y<0){
                circle.dy = Math.random()*0.5+0.1;
            }
            circle.counter--;
            if(circle.counter<=0){
                circle.counter=10;
                circle.scale+=circle.ds;
                if(circle.scale>=1){
                    circle.ds=-0.01;
                }
                if(circle.scale<=0){
                    circle.ds=0.01;
                }
            }
        }).insert();
};
export default mainContent;