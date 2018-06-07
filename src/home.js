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
            headLine.style('text-shadow','0 0 20px #70a1ff')
        }else{
            headLine.style('text-shadow','0 0 10px #70a1ff')
        }
    })
    .insert();
var circleNum = 100;
var circleList = [];
var origin = {
    x: window.innerWidth/2,
    y: window.innerHeight/2
};
for(var i=0;i<circleNum;i++){
    let x = Math.random()*window.innerWidth;
    let y = Math.random()*window.innerWidth;
    let circle = mainContent.append('div')
        .style('position','absolute')
        .style('width','32px')
        .style('height','32px')
        .style('border-radius','50%')
        .style('background','#eccc68')
        //.style('transition','15s')
        .style('box-shadow','0 0 10px #eccc68')
        .style('opacity', '0')
        .style('transform','translate('+x+'px,'+y+'px)');
    circle.x = x;
    circle.y = y;
    let circleAn = AXR.append('home_circle_animation')
        .attr('freq',1)
        .attr('action',function () {
            let dx = Math.random()*20-10;
            let dy = Math.random()*20-10;
            let scale = Math.random()*1.5;
            let x = (circle.x2 || circle.x)+dx;
            let y = (circle.y2 || circle.y)+dy;
            circle.x2=x;
            circle.y2=y;
            circle.style('transform','translate('+x+'px,'+y+'px) scale('+scale+')')
                .style('opacity', (Math.random()*0.5)+0.5);
            if((x>window.innerWidth || x<0)|| (y>window.innerHeight || y<0)){
                circle.x2=circle.x;
                circle.y2=circle.y;
            }
        }).insert();
};
export default mainContent;