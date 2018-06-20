import CubY_DOM from '../Framework/CubY/CubY_DOM';

var mainContent = new CubY_DOM('div','about');
var mainContentContainerStyle = {
    width:'100vw',
    height:'100vh',
    position:'relative',
    overflow:'hidden',
    display:'flex',
    justifyContent:'space-evenly',
    alignItems: 'center',
    flexWrap:'wrap'
};
var sectionContainerStyle = {
    width: '30%',
    height: '70%',
    border: '1px solid #eccc68',
    overflow: 'hidden',
    minWidth:'300px',
    boxShadow:'0 0 10px #eccc68',
    transition:'0.5s',
    background: 'rgba(0,0,0,0.9)',
    opacity:0
};
mainContent.style(mainContentContainerStyle)
    .appendClass('mainContent');
var sections = ['Basic','Career','Education'];

sections.forEach(function(_section,idx){
    let sectionContainer = mainContent.append('div',_section+'Container');
    sectionContainer.content('Coming Soon...')
        .style(sectionContainerStyle)
        .attr('activated',function () {
            let self = this;
            setTimeout(function () {
                self.style('opacity',1)
            },300*(idx+1))
        })
        .attr('deactivated',function () {
            this.style('opacity',0)
        });
});

export default mainContent;