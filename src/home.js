import AXDOM from './Framework/Ax/AXDOM';


var mainContent = new AXDOM('div','homeContent');
mainContent.style('width','100%')
    .style('height','100vh')
    .style('background','#2f3640');

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
export default mainContent;