/* eslint-disable */
Object.defineProperty(exports,"__esModule",{value:!0});var e=(e,t)=>{e.drawImage.apply(e,t)},t=(e,t,a,s)=>{e.beginPath(),s&&(a.beginPath(),s.beginPath())},a=(e,t,a,s)=>{e.clip.apply(e,t),s&&(a.clip.apply(a,t),s.clip.apply(s,t))},s=(e,t,a,s)=>{e.fill.apply(e,t),s&&(a.fill.apply(a,t),s.fill.apply(s,t))},i=(e,t,a,s)=>{e.stroke.apply(e,t),s&&(a.stroke.apply(a,t),s.stroke.apply(s,t))},r=(e,t)=>{e.putImageData.apply(e,t)},h=(e,t,a,s)=>{e.arc.apply(e,t),s&&(a.arc.apply(a,t),s.arc.apply(s,t))},l=(e,t,a,s)=>{e.arcTo.apply(e,t),s&&(a.arcTo.apply(a,t),s.arcTo.apply(s,t))},n=(e,t,a,s)=>{e.bezierCurveTo.apply(e,t),s&&(a.bezierCurveTo.apply(a,t),s.bezierCurveTo.apply(s,t))},p=(e,t,a,s)=>{e.closePath(),s&&(a.closePath(),s.closePath())},o=(e,t,a,s)=>{e.ellipse.apply(e,t),s&&(a.ellipse.apply(a,t),s.ellipse.apply(s,t))},c=(e,t,a,s)=>{e.lineTo.apply(e,t),s&&(a.lineTo.apply(a,t),s.lineTo.apply(s,t))},u=(e,t,a,s)=>{e.moveTo.apply(e,t),s&&(a.moveTo.apply(a,t),s.moveTo.apply(s,t))},d=(e,t,a,s)=>{e.quadraticCurveTo.apply(e,t),s&&(a.quadraticCurveTo.apply(a,t),s.quadraticCurveTo.apply(s,t))},_=(e,t,a,s)=>{e.rect.apply(e,t),s&&(a.rect.apply(a,t),s.rect.apply(s,t))},y=(e,t,a,s)=>{e.roundRect.apply(e,t),s&&(a.roundRect.apply(a,t),s.roundRect.apply(s,t))},f=(e,t,a,s)=>{e.setLineDash.apply(e,t),s&&(a.setLineDash.apply(a,t),s.setLineDash.apply(s,t))},v=(e,t,a,s)=>{e.clearRect.apply(e,t),s&&(a.clearRect.apply(a,t),s.clearRect.apply(s,t))},g=(e,t,a,s)=>{e.fillRect.apply(e,t),s&&(a.fillRect.apply(a,t),s.fillRect.apply(s,t))},m=(e,t,a,s)=>{e.strokeRect.apply(e,t),s&&(a.strokeRect.apply(a,t),s.strokeRect.apply(s,t))},x=(e,t,a,s)=>{e.fillText.apply(e,t),s&&(a.fillText.apply(a,t),s.fillText.apply(s,t))},T=(e,t,a,s)=>{e.strokeText.apply(e,t),s&&(a.strokeText.apply(a,t),s.strokeText.apply(s,t))},C=(e,t)=>{e.globalAlpha=t},R=(e,t)=>{e.globalCompositeOperation=t},w=(e,t)=>{e.fillStyle=t},b=(e,t)=>{e.strokeStyle=t},k=(e,t)=>{e.filter=t},L=(e,t)=>{e.imageSmoothingEnabled=t},D=(e,t)=>{e.imageSmoothingQuality=t},O=(e,t,a,s)=>{e.lineCap=t,s&&(a.lineCap=t,s.lineCap=t)},P=(e,t,a,s)=>{e.lineDashOffset=t,s&&(a.lineDashOffset=t,s.lineDashOffset=t)},S=(e,t,a,s)=>{e.lineJoin=t,s&&(a.lineJoin=t,s.lineJoin=t)},I=(e,t,a,s)=>{e.lineWidth=t,s&&(a.lineWidth=t,s.lineWidth=t)},A=(e,t,a,s)=>{e.miterLimit=t,s&&(a.miterLimit=t,s.miterLimit=t)},B=(e,t)=>{e.shadowBlur=t},E=(e,t)=>{e.shadowColor=t},G=(e,t)=>{e.shadowOffsetX=t},z=(e,t)=>{e.shadowOffsetY=t},W=(e,t,a,s)=>{e.direction=t,s&&(a.direction=t,s.direction=t)},q=(e,t,a,s)=>{e.font=t,s&&(a.font=t,s.font=t)},H=(e,t,a,s)=>{e.fontKerning=t,s&&(a.fontKerning=t,s.fontKerning=t)},J=(e,t,a,s)=>{e.textAlign=t,s&&(a.textAlign=t,s.textAlign=t)},K=(e,t,a,s)=>{e.textBaseline=t,s&&(a.textBaseline=t,s.textBaseline=t)};class X{set globalAlpha(e){this._a.push([C,e])}set globalCompositeOperation(e){this._a.push([R,e])}drawImage(){this._a.push([e,arguments])}beginPath(){this._a.push([t])}clip(){this._a.push([a,arguments])}fill(){this._a.push([s,arguments])}stroke(){this._a.push([i,arguments])}set fillStyle(e){this._a.push([w,e])}set strokeStyle(e){this._a.push([b,e])}createConicGradient(e,t,a){return this._c.createConicGradient(e,t,a)}createLinearGradient(e,t,a,s){return this._c.createLinearGradient(e,t,a,s)}createPattern(e,t){return this._c.createPattern(e,t)}createRadialGradient(e,t,a,s,i,r){return this._c.createRadialGradient(e,t,a,s,i,r)}set filter(e){this._a.push([k,e])}putImageData(){this._a.push([r,arguments])}set imageSmoothingEnabled(e){this._a.push([L,e])}set imageSmoothingQuality(e){this._a.push([D,e])}arc(){this._a.push([h,arguments])}arcTo(){this._a.push([l,arguments])}bezierCurveTo(){this._a.push([n,arguments])}closePath(){this._a.push([p])}ellipse(){this._a.push([o,arguments])}lineTo(){this._a.push([c,arguments])}moveTo(){this._a.push([u,arguments])}quadraticCurveTo(){this._a.push([d,arguments])}rect(){this._a.push([_,arguments])}roundRect(){this._a.push([y,arguments])}set lineCap(e){this._a.push([O,e])}set lineDashOffset(e){this._a.push([P,e])}set lineJoin(e){this._a.push([S,e])}set lineWidth(e){this._a.push([I,e])}set miterLimit(e){this._a.push([A,e])}setLineDash(){this._a.push([f,arguments])}clearRect(){this._a.push([v,arguments])}fillRect(){this._a.push([g,arguments])}strokeRect(){this._a.push([m,arguments])}set shadowBlur(e){this._a.push([B,e])}set shadowColor(e){this._a.push([E,e])}set shadowOffsetX(e){this._a.push([G,e])}set shadowOffsetY(e){this._a.push([z,e])}fillText(){this._a.push([x,arguments])}measureText(e){return this._c.measureText(e)}strokeText(){this._a.push([T,arguments])}set direction(e){this._a.push([W,e])}set font(e){this._a.push([q,e])}set fontKerning(e){this._a.push([H,e])}set textAlign(e){this._a.push([J,e])}set textBaseline(e){this._a.push([K,e])}}var Y=()=>{},$=e=>{var t=0,a=0,s=e;return s>255&&(s-=255*(a=s/255|0),a>255&&(a-=255*(t=a/255|0))),`rgb(${t},${a},${s})`},F=(e,t,a)=>65025*e+255*t+a,M=Math.PI/180;class Layer{constructor(e,t){this.renderer=e,this.draw=t,this.parent=null,this.children=[],this.angle=0,this.scale={x:1,y:1},this.place={x:0,y:0},this.pivot={x:0,y:0},this._ecount=0,this._events={},this._ecolor1="",this._ecolor2="",this.transform=null,this._rendering=!1}layer(e){var t=new Layer(this.renderer,e);return this.attach(t),t}render(){var e,t,a=this.renderer,s=a.ctx,i=a.htx1,r=a.htx2,h=a.dtx;if(s.save(),i.save(),r.save(),h._a=[],h._c=s,h.layer=this,h.angle=this.angle,h.scale=this.scale,h.place=this.place,h.pivot=this.pivot,this.draw(h),this.parent&&!this.parent._rendering){var l=this.parent.transform;s.setTransform(l.a,l.b,l.c,l.d,l.e,l.f)}if(this.place=h.place,s.translate(h.place.x,h.place.y),this.scale=h.scale,s.scale(h.scale.x,h.scale.y),this.angle=h.angle,s.rotate(h.angle*M),this.pivot=h.pivot,s.translate(-h.pivot.x,-h.pivot.y),this.transform=s.getTransform(),this._ecount){var n=this.transform;a._rendering&&(this._ecolor1=$(a._layers.length),this._ecolor2=$(16e6-a._layers.length),a._layers.push(this)),e=i,t=r,i.fillStyle=this._ecolor1,i.strokeStyle=this._ecolor1,i.setTransform(n.a,n.b,n.c,n.d,n.e,n.f),r.fillStyle=this._ecolor2,r.strokeStyle=this._ecolor2,r.setTransform(n.a,n.b,n.c,n.d,n.e,n.f)}s.save(),i.save(),r.save();for(var p=h._a,o=0,c=p.length;o<c;o++)p[o][0](s,p[o][1],e,t);s.restore(),i.restore(),r.restore(),this._rendering=!0;for(var u=this.children,d=0;d<u.length;d++)u[d].render();this._rendering=!1,s.restore(),i.restore(),r.restore()}update(){this.renderer.update()}attach(e,t){var a=this.children;if(e.detach(),e.parent=this,t===(0|t)&&t>-1&&t<a.length?a.splice(t,0,e):a.push(e),e._events){var s=this.renderer;for(var i in this._events)s._event(i,!0)}this.update()}detach(){if(this.parent){var e=this.parent.children,t=e.lastIndexOf(this);if(t<0||e.splice(t,1),this.parent=null,this._events){var a=this.renderer;for(var s in this._events)a._event(s,!1)}this.update()}}detachChildren(){for(var e=this.children,t=e.length;t-- >0;)e[t].detach()}event(e,t){var a=this._events[e];a||(this._events[e]=a={p:null,n:null},a.p=a.n=a);var s={p:null,n:null,f:t};return(s.p=(s.n=a).p).n=s.n.p=s,this._ecount++,this.renderer._event(e,!0),this.update(),()=>{s.p!==s&&(this._ecount--,this.renderer._event(e,!1),s.p.n=s.n,s.n.p=s.p,s.f=Y,s.p=s)}}}function Q(e,t,a,s,i){return(+e-(t=+t))*(+i-(s=+s))/(+a-t)+s}var j=(e,t)=>{var a=t.canvas,s=t.htx1,i=t.htx2,r=r=>{var h;if("clientX"in r?h=r:"touches"in r&&r.touches.length&&(h=r.touches[0]),h){null!==t._ucaf&&t.render();for(var l,n=a.getBoundingClientRect(),p=(0|Q(h.clientX-n.left,0,a.clientWidth,0,a.width))-1,o=(0|Q(h.clientY-n.top,0,a.clientHeight,0,a.height))-1,c=s.getImageData(p,o,3,3).data,u=i.getImageData(p,o,3,3).data,d=0,_=c.length;d<_;d+=4)if((l=F(c[d],c[d+1],c[d+2]))===16e6-F(u[d],u[d+1],u[d+2])){var y=t._layers[l];if(y)for(var f,v=!0;y&&v;y=y.parent)if(f=y._events&&y._events[e])for(var g=f;(g=g.n)!==f;)g.f.call(y,r,n)&&(v=!1);break}}else console.error("Bad Canvacity event: "+e)};return a.addEventListener(e,r),()=>{a&&(a.removeEventListener(e,r),a=null)}};class Renderer{constructor(e){this.dtx=new X,this.stage=new Layer(this,Y),this.stage._ecount=9,this._ucaf=null,this._update=()=>{this._ucaf=null,this.render()},this._layers=[],this._events={},this._rendering=!1,this.canvas=e||(e=document.createElement("canvas")),this.ctx=e.getContext("2d"),this.htx1=(this.hidden1=document.createElement("canvas")).getContext("2d",{alpha:!1}),this.htx2=(this.hidden2=document.createElement("canvas")).getContext("2d",{alpha:!1}),this.resize(e.width,e.height)}layer(e){return this.stage.layer(e)}resize(e,t){var a=this.canvas,s=this.hidden1,i=this.hidden2;a.width=e,a.height=t,s.width=e,s.height=t,i.width=e,i.height=t,this.update()}render(){var e=this.canvas,t=e.width,a=e.height;null!==this._ucaf&&(cancelAnimationFrame(this._ucaf),this._ucaf=null),this._layers=[],this.dtx.WIDTH=t,this.dtx.HEIGHT=a,this.ctx.clearRect(0,0,t,a),this.htx1.clearRect(0,0,t,a),this.htx2.clearRect(0,0,t,a),this._rendering=!0,this.stage.render(),this._rendering=!1}attach(e,t){this.stage.attach(e,t)}detachChildren(){this.stage.detachChildren()}update(){null===this._ucaf&&(this._ucaf=requestAnimationFrame(this._update))}_event(e,t){var a=this._events,s=a[e];t?(s||(a[e]=s={n:0,u:j(e,this)}),s.n++):s&&--s.n<1&&(s.u(),delete a[e])}}exports.DrawContext=X,exports.Layer=Layer,exports.Renderer=Renderer,exports.default=Renderer;