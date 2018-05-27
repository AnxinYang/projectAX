/**
 * Created by Anxin Yang on 3/28/2018.
 */
import AXCore from './Framework/Ax/core';
import AXDOM from './Framework/Ax/AXDOM';

new AXCore();
var data={

};
var root = new AXDOM('div','ax_root',document.getElementById('app'));
root.style('font-size','12px');
var header = root.append('div','header')
    .style('display','flex')
    .style('position','absolute')
    .style('background','#70a1ff')
    .style('width','100vw')
    .style('height','3em');
var headerItems = ['Home','Playground','About'];
headerItems.forEach(function (item) {
    header.append('div','header_'+item)
        .content(item)
        .style('color','white')
        .style('padding','1em 0.5em')
        .style('cursor','pointer')
        .style('transition','0.3s')
        .on('mouseover',function () {
            this.style('background','#1e90ff');
        })
        .on('mouseleave',function () {
            this.style('background','');
        });
});
root.append('p','version')
    .style('position','fixed')
    .style('bottom','0px')
    .style('right','0')
    .style('padding-right','1em')
    .style('color','lightgray')
    .content(new Date());

var forcePanel = root.append('div','forcePanel_test')
forcePanel.style('position','fixed')
    .style('display','flex')
    .style('top','0')
    .style('bottom','0')
    .style('left','0')
    .style('right','0')
    .style('height','200px')
    .style('width','200px')
    .style('padding','50px')
    .style('margin','auto')
    .style('text-align','center')
    .style('color','lightgray')
    .style('transition', '0.3s')
    .on('mousemove',function (d,e) {
        let elems = this.select('div');
        elems.forEach(function (elem) {
            let postion = elem.dom.getBoundingClientRect();
            let mX = e.clientX;
            let mY = e.clientY;
            let dX = Math.abs(mX - (postion.right+postion.left)/2);
            let dY = Math.abs(mY - (postion.bottom+postion.top)/2);
            let distance = Math.sqrt((dX*dX + dY*dY));
            let maxScale = 1.5;
            elem.style('transform','scale('+(Math.max(1,Math.min(maxScale,(-distance/125)+2)))+')')
        })
    })
    .on('mouseleave',function (d,e) {
        let elems = this.select('div');
        elems.forEach(function (elem) {
            elem.style('transform','scale(1)')
        })
    });
var forcePanel_content  = forcePanel.append('div','forcePanel_content');
forcePanel_content.style('height','25%')
    .style('width','25%')
    .style('transition', '0.3s')
    .style('background','lightgray');
var forcePanel_content1  = forcePanel.append('div','forcePanel_content1');
forcePanel_content1.style('height','25%')
    .style('width','25%')
    .style('transition', '0.3s')
    .style('background','lightgray');
var forcePanel_content2  = forcePanel.append('div','forcePanel_content2');
forcePanel_content2.style('height','25%')
    .style('width','25%')
    .style('transition', '0.3s')
    .style('background','lightgray');