/**
 * Created by Anxin Yang on 3/28/2018.
 */
//import CC from './Framework/CubY/CubY_Core';
//import CubY_DOM from './Framework/CubY/CubY_DOM';
//import CR from './Framework/CubY/CubY_Routine';
import CubY from './Framework/CubY/CubY';
import homeContent from './view/home';
import aboutContent from './view/about';
import header from './components/header'
import background from './components/background_stars'
const VIEW_TRANSITION_TIME = 500;
window.addEventListener('resize',function () {
    if(window.resizing){
        clearTimeout(window.resizing)
    }
    window.resizing = setTimeout(function () {
        CubY.storeValue('viewportSize',{w:window.innerWidth,h:window.innerHeight});
    },200)
});
    window.root =CubY.createElement('div', 'ax_root', document.getElementById('app'));
    root.style('fontSize', '12px')
        .style('cursor', 'url(), auto');
    root.appendElement(header);
    var mainContainer = root.append('div', 'mainContainer');
    mainContainer.appendElement(homeContent);
    mainContainer.appendElement(background);
CubY.storeValue('currentView','Home');
CubY.connect('currentView',function () {
        let currentView = CubY.getValue('currentView');
        mainContainer.remove('.mainContent',VIEW_TRANSITION_TIME);
        switch (currentView){
            case 'Home':
                mainContainer.appendElement(homeContent);
                break;
            case 'About':
                mainContainer.appendElement(aboutContent);
                break;
        }
    });

    var version = root.append('p', 'version')
        .style('position', 'fixed')
        .style('bottom', '0px')
        .style('right', '0')
        .style('paddingRight', '1em')
        .style('color', 'lightgray')
        .content(new Date())
        .setUpdater('timer', function () {
            this.content('CubY_Routine: LasrCycleTime: ' + cr.lastCycleTime + 'ms | CPS:' + cr.cyclePerSec + ' |Longest: ' + cr.longestRoutineTime + 'ms | Last:' + cr.lastRoutineTime + 'ms');
        });
    var timer = CubY.createRoutine('timer')
        .attr('freq', 1)
        .attr('action', version.updater('timer'))
        .insert();
