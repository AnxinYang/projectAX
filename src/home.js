import CubY_DOM from './Framework/CubY/CubY_DOM';


var mainContent = new CubY_DOM('div','homeContent');
mainContent.style('width','100vw')
    .style('height','100vh')
    .style('background','#222f3e')
    .style('position','relative')
    .style('transition', '5s')
    .style('overflow','hidden')
    .appendClass('mainContent');

var backgroundAn = cr.append('backgroundAn')
    .attr('freq',300)
    .attr('repeat',1)
    .attr('action',function () {
        mainContent.style('background','transparent')
    }).insert();

var headLine = mainContent.append('h1','headLine')
    .content('FRONT END ENGINEER')
    .style('position','fixed')
    .style('color','white')
    .style('width','100%')
    .style('height', '60px')
    .style('textAlign','center')
    .style('left','0')
    .style('right','0')
    .style('bottom','33%')
    .style('margin','auto')
    .style('fontSize','64px')
    .style('transition', '1s')
    .style('opacity', 0)
    .style('textShadow','0 0 10px #70a1ff')
    .style('zIndex',1)
    .on('mouseover',function () {
        this.style('textShadow','0 0 30px #eccc68')
    })
    .on('mouseleave',function () {
        this.style('textShadow','0 0 10px #70a1ff')
    })
    .attr('activated',function () {
        let self = this;
        setTimeout(
            function () {
                self.style('opacity', 1)
            },300
        )

    })
    .attr('deactivated',function () {
        this.style('opacity', 0)
    });

var homeHeadLineAnimation = cr.append('home_headLine_animation')
    .attr('freq',300)
    .attr('action',function () {
        let odd = Math.random()*100;
        if(odd>50){
            headLine.style('textShadow','0 0 30px #eccc68')
        }else{
            headLine.style('textShadow','0 0 10px #70a1ff')
        }
    })
    .insert();

var subHeadLine = mainContent.append('h1','subHeadLine')
    .content('- who makes data alive -')
    .style('position','fixed')
    .style('color','#eccc68')
    .style('width','100%')
    .style('height', '30px')
    .style('textAlign','center')
    .style('left','0')
    .style('right','0')
    .style('bottom','30%')
    .style('margin','auto')
    .style('fontSize','32px')
    .style('transition', '1s')
    .style('opacity', 0)
    .style('textShadow','0 0 10px #eccc68')
    .style('zIndex',1)
    .attr('activated',function () {
        let self = this;
        setTimeout(
            function () {
                self.style('opacity', 1)
            },300
        )

    })
    .attr('deactivated',function () {
        this.style('opacity', 0)
    });

var infoButtonHalo = mainContent.append('span','infoButtonHalo')
    .style('position','fixed')
    .style('color','#eccc68')
    .style('width','32px')
    .style('height', '32px')
    .style('opacity', 0)
    .style('overflow','hidden')
    .style('borderRadius','4px')
    .style('textAlign','center')
    .style('left','0')
    .style('right','0')
    .style('bottom','18%')
    .style('margin','auto')
    .style('fontSize','24px')
    .style('transition', '0.5s')
    .style('border','1px solid #eccc68')
    .style('boxShadow','0 0 30px #eccc68')
    .style('cursor','pointer')
    .style('zIndex',1)
    .attr('activated',function () {
        let self = this;
        setTimeout(
            function () {
                self.style('opacity', 1)
            },300
        )

    })
    .attr('deactivated',function () {
        this.style('opacity', 0)
    });

var infoButton = mainContent.append('span','infoButton')
    .content('Wanna know more?')
    .style('position','fixed')
    .style('color','#eccc68')
    .style('width','32px')
    .style('height', '32px')
    .style('overflow','hidden')
    .style('border','1px solid transparent')
    .style('borderRadius','4px')
    .style('textAlign','center')
    .style('left','0')
    .style('opacity', 0)
    .style('right','0')
    .style('bottom','18%')
    .style('margin','auto')
    .style('fontSize','24px')
    .style('transition', '0.5s')
    .style('background', '#eccc68')
    .style('textShadow','0 0 5px #eccc68')
    .style('boxShadow','0 0 10x #eccc68')
    .style('cursor','pointer')
    .style('zIndex',1)
    .attr('activated', function () {
        let self = this;
        setTimeout(
            function () {
                self.style('opacity', 1)
            },300
        ),
        this.style('background', '#eccc68')
            .style('width','32px')
            .style('boxShadow','0 0 10px #eccc68');
        infoButton.overed = false;

    })
    .on('click',function () {
        cc.storeValue('currentView','about');
    })
    .on('mouseover',function () {
        this.style('background','rgba(0, 0, 0, 0.5)')
            .style('width','100%')
            .style('boxShadow','');
        infoButtonHalo.style('opacity', 0);
        infoButton.overed = true;
    })
    .on('mouseleave',function () {
        this.style('background', '#eccc68')
            .style('width','32px')
            .style('boxShadow','0 0 10px #eccc68');
        infoButton.overed = false;
    });

var infoButtonHaloAn = cr.append('infoButtonHaloAn')
    .attr('freq',600)
    .attr('action',function () {
        if(infoButton.overed === true){
            infoButtonHalo.state = 0;
        }
        switch(infoButtonHalo.state){
            case undefined:
            case 0:
                infoButtonHalo.state = 1;
                infoButtonHalo.style('width', '64px')
                    .style('bottom','calc(18% - 15px)')
                    .style('height', '64px')
                    .style('opacity', 0);
                break;
            case 1:
                infoButtonHalo.state = 2;
                infoButtonHalo.style('width', '32px')
                    .style('bottom','18%')
                    .style('height', '32px');
                break;
            case 2:
                infoButtonHalo.state = 0;
                infoButtonHalo.style('opacity', 1);
                break;
        }
    }).insert();

export default mainContent;