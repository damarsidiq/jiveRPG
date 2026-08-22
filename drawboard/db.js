export var qr = {
    totalDB:6,
    initPool:function(pdb){
        if (!pdb || pdb.length === 0 || pdb.length == qr.totalDB) {
            qr.pool = Array.from({ length: qr.totalDB }, function(_, i) { return i; });
            return;
        }
        var excluded = new Set(pdb.map(function(item) { return parseInt(item[0]); }));
        qr.pool = [];
        for (var i = 0; i < qr.totalDB; i++) {
            if (!excluded.has(i)) {
                qr.pool.push(i);
            }
        }
    }, 
    firstimer:true,
    getDB:function(){
        var x,y;
        if(this.firstimer){
            this.firstimer=!this.firstimer;
            x = jve.dbF.qr.pool.length-1;
        }
        else
            x = jve.getrand(0,jve.dbF.qr.pool.length);
            
        y = jve.dbF.qr.pool[x]; 
        qr.pool.splice(x,1);
        if(!qr.pool.length){
            qr.initPool();
        }
        return y;
    },
    pf:function(e){
        if(e.key=='Escape'){
            qr.resetDB(0);
        }
    },
    resetDB:function(cb){
        qrt.ongoinganimId = false;
        qr.vocabtext = [];
        delete qr.dbset;
        $('body').removeClass('pending');
        $('#text_3').removeClass('ok').html(jve.drawbardinit[0]).css('transform','');
        var dx = jve.drawbardinit;
        jve.drawbardinit = false;
        switch (cb) {
            case 0:
                if(dx[1]!==false){
                    $('body').append(dx[1]);
                }
                else
                    storyline.storyOptions();
            break;
            case 1:
                setTimeout(function() {jve.drawbard();}, 300);
            break;
            default:
        }
    },
    draw:function(){
        if(!qrt.ongoinganimId) return;
        qr.idx++;
        
        if(qr.idx >= qr.vocabtext.length) return;
        $('body').addClass('pending');
        $('#text_3').addClass('ok').append(qr.vocabtext[qr.idx]);
        qr.currentx = $('.mergershirt').eq($('.mergershirt').length-1)[0];
        qr.queue = [];
        if($(qr.currentx).children().length)
            $.each($(qr.currentx).children(),function(i,a){
                qr.queue[qr.queue.length] = a;
            });
        else
            qr.queue[qr.queue.length] = $(qr.currentx)[0];
            
        if($(qr.currentx)[0].className.indexOf('wspeed')!==-1){
            qrt.speed = parseInt($(qr.currentx)[0].className.split('wspeed_')[1]);
        }
        else{
            qrt.speed = qrt.defaultspeed;
        }
            
        qr.idx_ = 0;qr.draw_();
    },
    draw_:function(){
        if(!qrt.ongoinganimId) return;
        qrt.typing($(qr.queue[qr.idx_])[0]);
    },
    perworddelay:90,
    typecb:function(){
        if(!qrt.ongoinganimId) return;
        if(qr.idx_ == qr.queue.length-1){ setTimeout(function() {if(!qrt.ongoinganimId) return;qr.draw();}, 1000);  return; }
        qr.idx_++; setTimeout(qr.draw_, qr.perworddelay);
    },
    customfn:function(){},
    init:function(dbset,link,defspeed){
        qr.currentDrawBard = link;
        qrt.defaultspeed = defspeed;
        if(typeof $('#canvaswrapper')[0] !== 'undefined') return;
        qr.dbset = dbset;
        qr.customfn();
        qr.transmode = false;
        
        qr.currentdbsetidx = 0;
        qr.currentdbset = qr.dbset[qr.currentdbsetidx];
        qr.vocabtext = qr.currentdbset.vt;
        qrt.ongoinganimId = true;
        
        qr.start();
    },
    nextSet:function(){
        qrt.ongoinganimId = false;
        setTimeout(function() {
            if(qr.dbset.length==1){
                qr.resetDB(1);
                return;
            }
            qr.currentdbsetidx++;
            if(qr.currentdbsetidx == qr.dbset.length){
                qr.currentdbsetidx = 0;
            }
            qr.currentdbset = qr.dbset[qr.currentdbsetidx];
            qr.vocabtext = qr.currentdbset.vt;
            
            qr.start();
        }, 300);
    },
    start:function(){
        $('#text_3').html(qr.currentdbset.dbbg+qr.currentdbset.dbbtn);
        $('#dbbutton').on('click',function(e){
            e.stopPropagation();e.preventDefault();
            qr.resetbtn();
        });
        $('#dbbutton').on('contextmenu',function(e){
            e.stopPropagation();e.preventDefault();
            qr.nextSet();
        });
        qr.idx = -1;qr.draw();
    },
    resetbtn:function(){
        qrt.ongoinganimId = false;
        setTimeout(function() {
            qrt.ongoinganimId = true;
            qr.transmode = !qr.transmode;
            if(qr.transmode){
                qr.vocabtext = qr.currentdbset.vte;
            }
            else qr.vocabtext = qr.currentdbset.vt;
            
            qr.start();
        }, 300);
    }
};
export var qrt = {
    ongoinganimId:false,
    text:[],
    el:1,
    typed:'',
    typing:function(el){
        if(!qrt.ongoinganimId) return;
        qrt.el = el;
        qrt.text=$(el).html().split('');
        qrt.typed = '';
        
        $(el).html('').addClass('ok');
        qrt.ax = [performance.now(),0];
        requestAnimationFrame(qrt.typing_);
    },
    ax:[],
    defaultspeed:20,
    speed:20,
    typing_:function(t){
        if(!qrt.ongoinganimId) return;
        qrt.ax[1] = t-qrt.ax[0];
        if(qrt.ax[1]< qrt.speed){
            requestAnimationFrame(qrt.typing_);return;
        }
        qrt.ax[0] = t;
        
        qrt.typed+=qrt.text[0];
        $(qrt.el).html(qrt.typed);
        qrt.text.splice(0,1);
        if(qrt.text.length){
            requestAnimationFrame(qrt.typing_);
        }
        else{
            qr.typecb();
        }
    }
};
