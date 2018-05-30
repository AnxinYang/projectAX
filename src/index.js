/**
 * Created by Anxin Yang on 3/28/2018.
 */
import AXCore from './Framework/Ax/core';
import AXDOM from './Framework/Ax/AXDOM';
import mainContent from './home';

new AXCore();
var data={

};
window.addEventListener('click',function (e) {
    menuContainer.updater('closeMenu')();
});
var root = new AXDOM('div','ax_root',document.getElementById('app'));
root.style('font-size','12px');
var header = root.append('div','header')
    .attr('onselectstart','return false;')
    .style('display','flex')
    .style('position','absolute')
    .style('background','#70a1ff')
    .style('width','100vw')
    .style('height','3em')
    .style('z-index','10');

var headerItems = ['▤','Home','Playground','About'];
var index = 0;
headerItems.forEach(function (item) {
    headerItems[index++] = header.append('div', 'header_' + item)
        .content(item)
        .appendClass('xx')
        .style('color', 'white')
        .style('padding', '1em 0.5em')
        .style('cursor', 'pointer')
        .style('transition', '0.3s')
        .on('mouseover', function () {
            this.style('background', '#1e90ff');
        })
        .on('mouseleave', function () {
            this.style('background', '');
        });
});
var headerMenuButton = headerItems[0];
headerMenuButton.style('position','relative');
var menuContainer = headerMenuButton.append('div','menuContainer')
    .style('position','absolute')
    .style('width','256px')
    .style('height', '0px')
    .style('background','#70a1ff')
    .style('top','100%')
    .style('left','0')
    .style('transition', '0.3s')
    .setUpdater('toggleMenu',function (d) {
        let hasOpen = this.hasOpen || false;
        if(hasOpen){
            this.style('height','0');
        }else{
            this.style('height','calc(100vh - 3em)');
        }
        this.hasOpen = !hasOpen;
    })
    .setUpdater('closeMenu',function (d) {
        this.style('height','0');
        this.hasOpen = false;
    });

headerMenuButton.on('click',function(e){
    e.stopPropagation();
    menuContainer.updater('toggleMenu')();
});

var mainContainer =  root.append('div','mainContainer');
mainContainer.appendElement(mainContent);


var version = root.append('p','version')
    .style('position','fixed')
    .style('bottom','0px')
    .style('right','0')
    .style('padding-right','1em')
    .style('color','lightgray')
    .content(new Date())
    .setUpdater('timer',function () {
        this.content(new Date());
    });
setInterval(version.updater('timer'),1000);