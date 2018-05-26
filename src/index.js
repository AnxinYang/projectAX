/**
 * Created by Anxin Yang on 3/28/2018.
 */
import AXCore from './Framework/Ax/core';
import AXDOM from './Framework/Ax/AXDOM';

new AXCore();
var data={

};
var root = new AXDOM('div','ax_root',document.getElementById('app'));
var input = root.append('input').attr('id','inpout');
var p = root.append('p').bind(data);
input.on('keyup',function(d,e){
    var value = e.target.value;
    p.content(value);
});
