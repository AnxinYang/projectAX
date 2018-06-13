/**
 * Created by Anxin Yang on 3/28/2018.
 */
import CC from './Framework/CubY/CubY_Core';
import CubY_DOM from './Framework/CubY/CubY_DOM';
import CR from './Framework/CubY/CubY_Routine';
import homeContent from './home';
import header from './components/header'
import backgrond from './components/background_stars'

    window.root = new CubY_DOM('div', 'ax_root', document.getElementById('app'));
    root.style('font-size', '12px')
        .style('cursor', 'url(), auto');
    root.appendElement(header);
    var mainContainer = root.append('div', 'mainContainer');
    mainContainer.appendElement(homeContent);
    mainContainer.appendElement(backgrond);
    cc.storeValue('currentView','Home');
    cc.connect('currentView',function () {
        let currentView = cc.getValue('currentView');
        mainContainer.remove('.mainContent');
        switch (currentView){
            case 'Home':
                mainContainer.appendElement(homeContent);
                break;
        }
    });

    var version = root.append('p', 'version')
        .style('position', 'fixed')
        .style('bottom', '0px')
        .style('right', '0')
        .style('padding-right', '1em')
        .style('color', 'lightgray')
        .content(new Date())
        .setUpdater('timer', function () {
            this.content('CubY_Routine: LasrCycleTime: ' + cr.lastCycleTime + 'ms | CPS:' + cr.cyclePerSec + ' |Longest: ' + cr.longestRoutineTime + 'ms | Last:' + cr.lastRoutineTime + 'ms');
        });
    var timer = cr.append('timer')
        .attr('freq', 1)
        .attr('action', version.updater('timer'))
        .insert();
