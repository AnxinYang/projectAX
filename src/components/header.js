import CubY_DOM from '../Framework/CubY/CubY_DOM';

var header = new CubY_DOM('div', 'header')
    .attr('onselectstart', 'return false;')
    .style('display', 'flex')
    .style('position', 'absolute')
    .style('opacity', '0.5')
    .style('top', '1em')
    .style('height', '3em')
    .style('zIndex', '10')
    .style('transition', '0.3s')
    .on('mouseover', function () {
        this.style('opacity', '1')
    })
    .on('mouseleave', function () {
        this.style('opacity', '0.5')
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
        .style('textShadow', '0 0 10px #eccc68')
        .style('transition', '0.3s')
        .on('mouseover', function () {
            this.style('textShadow', '0 0 10px #eccc68')
                .style('color', '#eccc68');
        })
        .on('mouseleave', function () {
            this.style('textShadow', '0 0 20px #eccc68')
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
    .style('transition', '0.3s')
    .setUpdater('toggleMenu', function (d) {
        let hasOpen = this.hasOpen || false;
        if (hasOpen) {
            this.style('height', '0')
        } else {
            this.style('height', '33vh')
        }
        this.hasOpen = !hasOpen;
    })
    .setUpdater('closeMenu', function (d) {
        this.style('height', '0')
            .style('boxShadow', '0px 0px 5px rgba(112, 161, 255,0)')
            .style('border', '1px solid rgba(112, 161, 255, 0)');
        this.hasOpen = false;
    });

window.addEventListener('click', function (e) {
    menuContainer.updater('closeMenu')();
});

headerMenuButton.on('click', function (e) {
    e.stopPropagation();
    menuContainer.updater('toggleMenu')();
});

var menuContents = menuContainer.append('ul')
    .style('paddingLeft', '2em')
    .style('margin', '0');

var menuItems = ['Home', 'May Coming soon', 'Probably Coming soon'];
index = 0;

menuItems.forEach(function (item) {
    menuItems[index++] = menuContents.append('li', 'menu_' + item)
        .content(item)
        .style('color', 'white')
        .style('padding', '1em 0.5em')
        .style('cursor', 'pointer')
        .style('textShadow', '0 0 10px #eccc68')
        .style('transition', '0.3s')
        .on('click', function () {
            cc.storeValue('currentView', item);
        })
        .on('mouseover', function () {
            this.style('textShadow', '0 0 10px #eccc68')
                .style('color', '#eccc68');
        })
        .on('mouseleave', function () {
            this.style('textShadow', '0 0 20px #eccc68')
                .style('color', 'white');
        });
});

export default header;