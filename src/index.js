/**
 * Created by Anxin Yang on 3/28/2018.
 */
import CC from './Framework/CubY/CubY_Core';
import CubY_DOM from './Framework/CubY/CubY_DOM';
import CR from './Framework/CubY/CubY_Routine';
import homeContent from './home';
try {
    window.addEventListener('click', function (e) {
        menuContainer.updater('closeMenu')();
    });
    window.root = new CubY_DOM('div', 'ax_root', document.getElementById('app'));
    root.style('font-size', '12px')
        .style('cursor', 'url(), auto');
    var header = root.append('div', 'header')
        .attr('onselectstart', 'return false;')
        .style('display', 'flex')
        .style('position', 'absolute')
        //.style('background','rgba(112, 161, 255,1.0)')
        .style('opacity', '0.5')
        //.style('box-shadow', '0px 0px 5px rgba(112, 161, 255,0)')
        //.style('border','1px solid rgba(112, 161, 255, 0)')
        //.style('border-radius','8px')
        .style('top', '1em')
        .style('height', '3em')
        .style('z-index', '10')
        .style('transition', '0.3s')
        .on('mouseover', function () {
            this.style('opacity', '1')
            //.style('box-shadow', '0px 0px 5px rgba(112, 161, 255,1.0)')
            //.style('border','1px solid rgba(112, 161, 255, 0.5)');
        })
        .on('mouseleave', function () {
            this.style('opacity', '0.5')
            //.style('box-shadow', '0px 0px 5px rgba(112, 161, 255,0)')
            //.style('border','1px solid rgba(112, 161, 255, 0)');
        });

    var headerItems = ['Menu', 'Playground', 'About Me'];
    var index = 0;
    headerItems.forEach(function (item) {
        headerItems[index++] = header.append('div', 'header_' + item)
            .content(item)
            .appendClass('xx')
            .style('color', 'white')
            .style('padding', '1em 0.5em')
            .style('cursor', 'pointer')
            .style('text-shadow', '0 0 10px #eccc68')
            .style('transition', '0.3s')
            .on('mouseover', function () {
                this.style('text-shadow', '0 0 10px #eccc68')
                    .style('color', '#eccc68');
            })
            .on('mouseleave', function () {
                this.style('text-shadow', '0 0 20px #eccc68')
                    .style('color', 'white');
            });
    });
    var headerMenuButton = headerItems[0];
    headerMenuButton.style('position', 'relative');
    var menuContainer = headerMenuButton.append('div', 'menuContainer')
        .style('position', 'absolute')
        .style('width', '256px')
        .style('height', '0px')
        .style('background', '')
        .style('top', '125%')
        .style('left', '0')
        .style('overflow', 'hidden')
        //.style('box-shadow', '0px 0px 5px rgba(112, 161, 255,0)')
        //.style('border','1px solid rgba(112, 161, 255, 0)')
        .style('transition', '0.3s')
        .setUpdater('toggleMenu', function (d) {
            let hasOpen = this.hasOpen || false;
            if (hasOpen) {
                this.style('height', '0')
                //.style('box-shadow', '0px 0px 5px rgba(112, 161, 255,0)')
                //.style('border','1px solid rgba(112, 161, 255, 0)');
            } else {
                this.style('height', '33vh')
                //.style('box-shadow', '0px 0px 5px rgba(112, 161, 255,1.0)')
                //.style('border','1px solid rgba(112, 161, 255, 0.5)');
            }
            this.hasOpen = !hasOpen;
        })
        .setUpdater('closeMenu', function (d) {
            this.style('height', '0')
                .style('box-shadow', '0px 0px 5px rgba(112, 161, 255,0)')
                .style('border', '1px solid rgba(112, 161, 255, 0)');
            this.hasOpen = false;
        });

    headerMenuButton.on('click', function (e) {
        e.stopPropagation();
        menuContainer.updater('toggleMenu')();
    });

    var mainContainer = root.append('div', 'mainContainer');
    mainContainer.appendElement(homeContent);
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
    var menuContents = menuContainer.append('ul')
        .style('padding-left', '2em')
        .style('margin', '0');
    var menuItems = ['Home', 'May Coming soon', 'Probably Coming soon'];
    index = 0;
    menuItems.forEach(function (item) {
        menuItems[index++] = menuContents.append('li', 'menu_' + item)
            .content(item)
            .style('color', 'white')
            .style('padding', '1em 0.5em')
            .style('cursor', 'pointer')
            .style('text-shadow', '0 0 10px #eccc68')
            .style('transition', '0.3s')
            .on('click', function () {
                cc.storeValue('currentView', item);
            })
            .on('mouseover', function () {
                this.style('text-shadow', '0 0 10px #eccc68')
                    .style('color', '#eccc68');
            })
            .on('mouseleave', function () {
                this.style('text-shadow', '0 0 20px #eccc68')
                    .style('color', 'white');
            });
    });
}catch (e){
    document.getElementById('app').innerHTML= e;
}
