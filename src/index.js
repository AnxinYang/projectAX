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
    .style('height','3em')
    .style('z-index','10');
var headerItems = ['Home','Playground','About'];
headerItems.forEach(function (item) {
    header.append('div','header_'+item)
        .content(item)
        .appendClass('xx')
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