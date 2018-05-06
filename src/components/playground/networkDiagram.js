/**
 * Created by Anxin Yang on 5/5/2018.
 */
import * as d3 from "d3";
import React, { Component } from 'react';
import AXcomponent from '../AXcomponent';
//===external methods===
function createMapFromList(_list){
    let list = _list || [];
    let map = {};

    list.forEach((item)=>{
        map[item.id] = item;
    });

    return map;
}
const GET = store.get;// (dataKey) => data
const CREATE_MAP_FROM_LIST = createMapFromList;// (dataList) => dataMap

//===Dummy data===
const generateList = function (storeKey) {
    const listLength = 3;
    var list = store.get(storeKey) || [];

    if(debugMode && list.length<1) {
        for (var i = 0; i < listLength; i++) {
            let node = {
                id: i+'',
                name: 'name',
                data: i * i,
            };
            list.push(node);
        }

        store.set(storeKey, list);
    }

    return true;
};

//===const===
const SVG_CONTAINER_ID = 'svg';
const SVG_CONTAINER_WIDTH = '100%';
const SVG_CONTAINER_HEIGHT = '100%';
const SVG_CONTAINER_STYLE = {
    width: '100%',
    height: '100%'
};
const INNER_RADIUS = 100;
const NODE_SIZE = 15;
const NODE_MARGIN = 10;
const SECTOR_MARGIN = 30;

//=======

export default class networkDiagram extends AXcomponent {
    constructor(props) {
        super(props);
        this.state = {
            showContent: false
        };
        this.init(props);
    }

    init(props) {
        this.loadData(props);
        this.movedNodeList = [];
        this.movedNodeMap = {};
    }

    loadData(props) {
        this.nodeList = generateList(props.nodeKey) && GET(props.nodeKey);
        this.linkList = GET(props.linkKey);

        this.nodeMap = CREATE_MAP_FROM_LIST(this.nodeList);
        this.linkMap = CREATE_MAP_FROM_LIST(this.linkList);
    }

    // AFTER RENDER

    createSVG(containerId) {
        let width = this.props.containerWidth || SVG_CONTAINER_WIDTH;
        let height = this.props.containerHeight || SVG_CONTAINER_HEIGHT;

        let svg = d3.select("#" + containerId).append("svg").attr("width", width)
            .attr("height", height)
            .style('transition', '0.3s')
            .on('mousemove', ()=> {
                if (this.dragingNode) {
                    this.nodeDrag(this.dragingNode);
                }
            })
            .on('mouseup', ()=> {
                this.nodeMouseUp();
            });
        return svg;
    }

    createSectors(svg) {
        let nodeList = this.nodeList || [];

        let containerRect = svg.getBoundingClientRect();
        let origin = {
            x: ((containerRect.right - containerRect.left) / 2),
            y: ((containerRect.bottom - containerRect.top) / 2)
        };
        let outerRadius = Math.min(origin.x, origin.y);
        let innerRadius = INNER_RADIUS;

        const PI2 = 2 * Math.PI;
        let sectorMap = [];
        let sectorLevel = 0;
        let angle = 0;
        let sectorRadius = innerRadius;
        let sectorMargin = SECTOR_MARGIN;
        let sectorSize = NODE_SIZE;
        let nodeMargin = NODE_MARGIN;
        let done = false;

        while (!done) {
            let anglePerNode = 2 * Math.atan(((sectorSize + nodeMargin) / 2) / sectorRadius);
            let sectorCapacity = Math.floor(PI2 / anglePerNode);
            let emptyAngle = (PI2 - anglePerNode * sectorCapacity) / sectorCapacity;
            let slots = ()=> {
                let list = [];
                for (var i = 0; i < sectorCapacity; i++) {
                    let slot = {
                        angle: angle,
                        x: (sectorRadius * Math.cos(angle)) + origin.x,
                        y: (sectorRadius * Math.sin(angle)) + origin.y,
                        node: undefined
                    };
                    list.push(slot);
                    angle = angle + anglePerNode + emptyAngle;
                }
                return list;
            };
            sectorMap[sectorLevel] = {
                sectorRadius: sectorRadius,
                sectorCapacity: sectorCapacity,
                sectorNodes: 0,
                sectorSlots: slots()
            };
            angle = 0;
            sectorLevel++;
            sectorRadius += sectorMargin;
            done = sectorRadius >= outerRadius;
        }
        return sectorMap;
    }

    isVaildSlot(slot) {
        let isVaildSlot = true;
        let movedNodeList = this.movedNodeList;

        isVaildSlot = (slot.node === undefined);

        if (!isVaildSlot) {
            return isVaildSlot
        }

        movedNodeList.forEach((node)=> {
            let rect = {
                top: node.dropY - NODE_SIZE,
                bottom: node.dropY + NODE_SIZE,
                left: node.dropX - NODE_SIZE,
                right: node.dropX + NODE_SIZE
            };

            if (slot.x > rect.left && slot.x < rect.right) {
                isVaildSlot = !(slot.y > rect.top && slot.y < rect.bottom);
                if (!isVaildSlot) {
                    debug('collided');
                    return isVaildSlot
                }
            }
        });

        return isVaildSlot;
    }

    appendNodes(svg, _nodeList) {
        let nodeList = _nodeList || [];

        if (nodeList.length === 0) {
            return;
        }

        let nodeSize = NODE_SIZE;
        let sectorMap = this.sectorMap;
        let sectorLevel = 0;
        let counter = 0;

        nodeList.forEach((node)=> {
            if (node.g) {
                return;
            }

            let sector = sectorMap[sectorLevel];
            let capacity = sector.sectorCapacity;
            let slot = sector.sectorSlots[counter];
            while (!this.isVaildSlot(slot)) {
                counter++;
                if (counter === capacity) {
                    counter = 0;
                    sectorLevel++;
                    sector = sectorMap[sectorLevel];
                    capacity = sector.sectorCapacity;
                }
                slot = sector.sectorSlots[counter];
            }
            slot.node = node;
            node.slot = slot;
            node.g = svg.append('g')
                .attr('id', node.id)
                .attr('width', nodeSize)
                .attr('height', nodeSize)
                .attr("transform", "translate(" + slot.x + "," + slot.y + ")")
                .attr('cursor', 'pointer')
                .style('position','absolute')
                .style('left',slot.x)
                .style('top',slot.y)
                .style('transition', '0.1s')
                .on('click', ()=> {
                    this.nodeClick(node);
                })
                .on('mousedown', ()=> {
                    this.nodeMouseDown(node);
                })
                .on('mouseup', ()=> {
                    this.nodeMouseUp(node);
                });
            node.circle = node.g.append('circle')
                .attr('r', nodeSize / 2)
                .attr('fill', 'green')
                .style('transition', '0.3s');
            counter++;
            if (counter === capacity) {
                counter = 0;
                sectorLevel++;
            }
        });
    }

    nodeClick(node) {
        let selected = this.selected;
        let r = NODE_SIZE / 2;

        if (this.dragingNode) {
            this.nodeDragEnd(this.dragingNode);
            this.dragingNode = undefined;
            return;
        }

        if (selected) {
            selected.circle.attr('fill', 'green');
            selected.circle.attr('r', r);
            this.selected = undefined;
        }
        if (selected === undefined || node.id !== selected.id) {
            node.circle.attr('fill', 'yellow');
            node.circle.attr('r', r * 1.5);
            this.selected = node;
        }
    }

    nodeMouseDown(node) {
        let e = d3.event;
        let dragTimer = setTimeout(()=> {
            this.dragingNode = node;

            if (node.slot) {
                let containerId = this.props.containerId || SVG_CONTAINER_ID;
                let rect = document.getElementById(containerId).getBoundingClientRect();

                node.dropX = (e.clientX - rect.left);
                node.dropY = (e.clientY - rect.top);
                debug(node.dropX + ',' + node.dropY + '|' + e.clientX + ',' + e.clientY);
                node.slot.node = undefined;
                node.slot = undefined;
            }

        }, 256);
        this.dragTimer = dragTimer;
    }

    nodeDrag(node) {
        let e = d3.event;
        let containerId = this.props.containerId || SVG_CONTAINER_ID;
        let rect = document.getElementById(containerId).getBoundingClientRect();

        node.dropX = (e.clientX - rect.left);
        node.dropY = (e.clientY - rect.top);
        debug(node.dropX + ',' + node.dropY + '|' + e.clientX + ',' + e.clientY);
        node.g.attr("transform", "translate(" + node.dropX + "," + node.dropY + ")");
    }

    nodeDragEnd(node) {
        if (node === undefined) {
            return;
        }
        node.rect = document.getElementById(node.id).getBoundingClientRect();
        if(this.movedNodeMap[node.id]===undefined) {
            this.movedNodeMap[node.id] = node;
            this.movedNodeList.push(node);
        }

    }

    nodeMouseUp(node) {
        if (this.dragTimer) {
            clearTimeout(this.dragTimer);
        }
        setTimeout(()=> {
            this.nodeDragEnd(this.dragingNode);
            this.dragingNode = undefined;
        }, 0);
    }

    appendLinks(svg,_linkList) {
        let linkList = _linkList || [];
        let nodeMap = this.nodeMap || {};

        if (linkList.length === 0) {
            return;
        }

        linkList.forEach((link)=>{
            let src = nodeMap[link.srcId];
            let tar = nodeMap[link.tarId];
            let srcXY = {
                x: src.dropX || src.slot.x,
                y: src.dropY || src.slot.y
            };
            let tarXY = {
                x: tar.dropX || tar.slot.x,
                y: tar.dropY || tar.slot.y
            };
            let path = this.linkPathGenerator(srcXY,tarXY,10,1);
            let nodeLinkMap = {};
            nodeLinkMap[link.id] = link;

            src.linkMap = Object.assign({},src.linkMap,nodeLinkMap);
            tar.linkMap = Object.assign({},tar.linkMap,nodeLinkMap);
            svg.append("path")
                .attr("d", path.toString())
                .attr("stroke", 'darkgreen')
                .attr("stroke-width", 2)
                .attr("fill", "none")
                .style("cursor", "pointer")
                .style("transition", "0.3s");
        })

    }

    linkPathGenerator(src,tar,factor,offset) {
        var yt = tar.y
        var xt = tar.x;
        var xs = src.x;
        var ys = src.y;

        var k = (yt - ys) / (xt - xs);
        var _k = -1 / k;
        var b = yt - (k * xt);
        var xm = (xt + xs) / 2;
        var ym = (yt + ys) / 2;
        var c = ym - (_k * xm);
        let sign = offset>=0?1:-1;
        var xn = xm + (offset) * factor;
        let K =_k;
        let L = Math.abs(offset*(factor));
        xn = -sign*Math.sqrt((K*K+1)*L*L)+K*K*xm+xm;
        xn = xn/(K*K+1);
        var yn = xn * _k + c;
        if (_k < 0) {
            yn = ym + (offset) * factor;
            xn = (c - yn) / (-_k);
        }
        if (Math.abs(xs - xt) < 20) {
            xn = xm + (offset) * factor;
            yn = ym;
        }
        if (Math.abs(ys - yt) < 20) {
            yn = ym + (offset) * factor;
            xn = xm;
        }
        //==

        //==
        let path = d3.path();
        path.moveTo(xs, ys);
        path.quadraticCurveTo(xn, yn, xt, yt);
        return path;
    }

    AXDidMount() {
        let containerId = this.props.containerId || SVG_CONTAINER_ID;

        this.svg = this.createSVG(containerId);
        this.sectorMap = this.createSectors(this.refs[containerId]);
        debug(JSON.stringify(this.sectorMap));

        this.appendNodes(this.svg, this.nodeList);
        this.appendLinks(this.svg, this.linkList);
    }

    AXDidUpdate() {
        let containerId = this.props.containerId || SVG_CONTAINER_ID;

        //debug(JSON.stringify(this.sectorMap));

        this.appendNodes(this.svg, this.nodeList);
        this.appendLinks(this.svg, this.linkList);
    }

    AXWillUnmount() {
        this.svg.selectAll('g').remove();
        this.nodeList.forEach((node)=> {
            node.g = undefined;
        })
    }

    render() {
        let containerId = this.props.containerId || SVG_CONTAINER_ID;
        let containerStyle = this.props.containerStyle || SVG_CONTAINER_STYLE;
        return (
            <div key={containerId} ref={containerId} id={containerId} style={containerStyle}>
            </div>
        )
    }
}
