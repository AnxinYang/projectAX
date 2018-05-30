import AXDOM from './Framework/Ax/AXDOM';


var mainContent = new AXDOM('div','homeContent');
mainContent.style('width','100%')
    .style('height','calc(100vh - 3em)');

var headLine = mainContent.append('h1','headLine')
    .content('Front-End Engineer')
    .style('position','absolute')
    .style('color','#1e90ff')
    .style('width','100%')
    .style('height', '60px')
    .style('text-align','center')
    .style('top','0')
    .style('left','0')
    .style('right','0')
    .style('bottom','33%')
    .style('margin','auto')
    .style('font-size','64px')
    .style('transition', '0.3s');

export default mainContent;