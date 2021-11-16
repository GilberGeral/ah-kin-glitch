'use strict';
var i5a = {
    'Q': "center",
    'c': "sonido",
    'I': 180,
    'P': 48,
    'Z': 1000,
    'B': 400,
    'c0': 100,
    'e': 150,
    'b0': "image/png",
    's': 130.81,
    'C': "Sound OFF",
    'X': "rgba(0,0,0,1.0)",
    'A': 160,
    'M': 128,
    'V': "rgba(255,255,255,1.0)",
    'U': 50,
    'T': "rgba(255,128,0,1.0)",
    'g0': 256,
    'l': "triangle",
    'f0': "rgba(255,255,0,0.0)",
    'K': 4250,
    'O': 64,
    'R': 0.25,
    'Y': "rgba(255,255,0,1.0)",
    'G': "rgba(",
    'E': 20,
    'W': 0.5,
    'F': "Sound ON",
    'z': 32,
    'S': 140,
    'D': ","
};
window.addEventListener('load', init, false);
var canvas = null,
    ctx = null,
    canvas2 = null,
    ctx2 = null,
    canvas3 = null,
    ctx3 = null,
    ctxA = null,
    ctxF = null,
    ctxA = new AudioContext(),
    ctxF = new AudioContext(),
    currentOsc, currentGain, osFondo, osGain, gg, scaleX = 1,
    scaleY = 1,
    rDead = 0,
    touches = [],
    lastPress = null,
    i = 0,
    j = 0,
    k = 0,
    m = 0,
    n = 0,
    tSp = 0,
    p = 0,
    tDead = 0,
    counter = 0,
    lastUpdate = 0,
    ran = 0,
    ancho = 800,
    alto = 450,
    cPira = 800,
    x = 0,
    y = 0,
    anc = 800,
    alt = 450,
    objetosCargados = 0,
    fCon = 0,
    mCon = 0,
    tBreaks = 0,
    frame = 0,
    pIndex = 0,
    mParts = 120,
    dataP = {
        cx: 0,
        cy: 0,
        r: 16,
        tx: 2,
        w: i5a.z,
        h: i5a.z,
        sum: 10,
        x: 0,
        y: 0,
        jump: 0,
        vy: 1,
        con1: 0
    },
    dataCol = {
        x: 0,
        y: 0,
        xf: 0,
        yf: 0,
        w: 16,
        h: i5a.z,
        cx: 0,
        cy: 0,
        rx: 8,
        ry: 12,
        m: 0,
        vx: 1,
        vy: 5,
        u: false,
        d: true,
        tl: 0,
        j: 2
    },
    dataWorld = {
        w: 0,
        h: 450
    },
    brdData = {
        g: 1,
        r: 1.0,
        alp: 1.0,
        up: false,
        outSd: false,
        do: false
    },
    dataLin = {
        x: 0,
        fr: false
    },
    dataSol = {
        con: 1.0,
        x: 0,
        y: 0,
        x2: -i5a.U,
        y2: -i5a.U,
        x1: ancho,
        y1: alto,
        rad: 0
    },
    dataBreaks = {
        p: 0,
        w: 0,
        m: 0,
        r: true
    },
    dataJtPc = {
        w: 200,
        v: 250,
        max: 250,
        rect: 200
    },
    gravity = 1.025,
    mVol = 1.0,
    iPlayer = new Image(),
    iPiramide = new Image(),
    iDest = new Image(),
    iSnap = new Image(),
    iBase = new Image(),
    iCeleb = new Image(),
    iMon1 = new Image(),
    iMon2 = new Image(),
    iFondo = new Image(),
    iHelp = new Image(),
    reloj, cam, cargando = true,
    jugando = false,
    pausado = false,
    terminado = false,
    perdido = false,
    siMom = false,
    haySonido = true,
    isMenu = false,
    rSub = true,
    blur = true,
    mPira = true,
    sIn = false,
    PI = 3.14159,
    alp = 1.0,
    gr1 = 1.0,
    gr2 = 1.0,
    gradiente1, terrains = [],
    tTerr = [],
    trailChar = [],
    parts = [],
    frags = [],
    bPlay, bSoni, bPausa, bReset, ruidos = [];
ruidos[0] = {
    f: 49.00
};
ruidos[1] = {
    f: 61.74
};
ruidos[2] = {
    f: i5a.s
};
var sKill = [];
sKill[0] = {
    f: 987.77,
    v: i5a.R
};
sKill[1] = {
    f: 880,
    v: i5a.R
};
sKill[2] = {
    f: 783.99,
    v: i5a.R
};
sKill[3] = {
    f: 698.46,
    v: i5a.R
};
sKill[4] = {
    f: 30.87,
    v: i5a.R
};
sKill[5] = {
    f: 659.26,
    v: i5a.W
};
sKill[6] = {
    f: 587.33,
    v: i5a.W
};
sKill[7] = {
    f: 523.25,
    v: i5a.W
};
sKill[8] = {
    f: 32.7,
    v: i5a.W
};
sKill[9] = {
    f: 440,
    v: 1
};
sKill[10] = {
    f: 392,
    v: 1
};
sKill[11] = {
    f: 55,
    v: 1
};
sKill[12] = {
    f: 261.63,
    v: 2
};
sKill[13] = {
    f: 87.31,
    v: 4
};
var sJump = [];
sJump[0] = {
    f: 55,
    v: i5a.R
};
sJump[1] = {
    f: 49,
    v: i5a.R
};
sJump[2] = {
    f: 87.31,
    v: i5a.W
};
sJump[3] = {
    f: 110,
    v: i5a.W
};
sJump[4] = {
    f: i5a.s,
    v: i5a.W
};
sJump[5] = {
    f: 146.83,
    v: 1
};
sJump[6] = {
    f: 293.66,
    v: 1
};
sJump[7] = {
    f: 369.99,
    v: 1
};
sJump[8] = {
    f: 523.25,
    v: 2
};
var sFin = [];
sFin[0] = {
    f: 32.7,
    v: i5a.R
};
sFin[1] = {
    f: 36.71,
    v: i5a.R
};
sFin[2] = {
    f: 41.2,
    v: i5a.R
};
sFin[3] = {
    f: 43.65,
    v: i5a.R
};
sFin[4] = {
    f: 49,
    v: i5a.R
};
sFin[5] = {
    f: 49,
    v: i5a.W
};
sFin[6] = {
    f: 55,
    v: i5a.W
};
sFin[7] = {
    f: 61.74,
    v: i5a.W
};
sFin[8] = {
    f: 65.41,
    v: i5a.W
};
sFin[9] = {
    f: 87.31,
    v: 1
};
sFin[10] = {
    f: 98,
    v: 1
};
sFin[11] = {
    f: 110,
    v: 1
};
sFin[12] = {
    f: i5a.s,
    v: 2
};
sFin[13] = {
    f: 146.83,
    v: 2
};
sFin[14] = {
    f: 164.81,
    v: 2
};
var cDead = [];
cDead[0] = "you burned";
cDead[1] = "you buried";

function part() {
    this.center = {
        x: 0,
        y: 0
    };
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.alp = 1.0;
    this.rads = 1.0;
    this.rd = 0.04;
    this.v = 3;
    this.mode = false;
}
part.prototype.update = function () {
    this.center.x += (Math.cos(this.rads) * this.v);
    this.center.y += (Math.sin(this.rads) * this.v);
    if (this.alp > this.rd) {
        this.alp -= this.rd;
        if (this.r < 255) this.r += 1;
        if (this.g < 230) this.g += i5a.E;
    } else {
        this.mode = false;
    }
};
part.prototype.pintar = function () {
    ctx.fillStyle = i5a.G + this.r + i5a.D + this.g + i5a.D + this.b + i5a.D + this.alp + ")";
    ctx.beginPath();
    ctx.fillRect(this.center.x - cam.x, this.center.y, 2, 2);
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle = i5a.V;
};

function Clock() {
    this.center = {
        x: ancho / 2,
        y: i5a.c0
    };
    this.pos = {
        x: ancho / 2,
        y: i5a.c0
    };
    this.aGrads = 270;
    this.aRads = 0;
    this.radio = ancho / 10;
    this.radios = ancho / 12;
    this.ancho = this.radio * 2;
    this.brokens = 0;
    this.destSec = 0;
    this.actSec = 0;
    this.mode = 0;
    this.frame = 0;
}
Clock.prototype.update = function (o) {
    this.aGrads = (this.actSec * 6);
    this.aRads = ((this.aGrads - 90) * Math.PI) / i5a.I;
    this.pos.x = (this.center.x) + (Math.cos(this.aRads) * this.radios);
    this.pos.y = (this.center.y) + (Math.sin(this.aRads) * this.radios);
};
Clock.prototype.pintar = function (o) {
    ctx2.clearRect(0, 0, ancho, alto);
    if (!o) return;
    ctx2.fillStyle = "rgba(98,110,150,1.0)";
    ctx2.strokeStyle = i5a.X;
    ctx2.lineWidth = 5;
    ctx2.beginPath();
    ctx2.arc(this.center.x, this.center.y, this.radio, 0, 2 * Math.PI, true);
    ctx2.stroke();
    ctx2.fill();
    ctx2.stroke();
    ctx2.closePath();
    ctx2.lineWidth = 1;
    ctx2.globalAlpha = 1.0;
    ctx2.strokeStyle = i5a.T;
    ctx2.fillStyle = i5a.T;
    ctx2.lineWidth = 5;
    ctx2.beginPath();
    ctx2.moveTo(this.center.x, this.center.y);
    ctx2.lineTo(this.pos.x, this.pos.y);
    ctx2.stroke();
    ctx2.closePath();
    ctx2.beginPath();
    ctx2.arc(this.center.x, this.center.y, 10, 0, 2 * Math.PI, true);
    ctx2.fill();
    ctx2.closePath();
    ctx2.fillStyle = i5a.X;
    ctx2.strokeStyle = i5a.X;
    ctx2.beginPath();
    ctx2.fillRect((this.center.x - 6), (this.center.y - this.radio), 6, 6);
    ctx2.fill();
    ctx2.closePath();
    ctx2.beginPath();
    ctx2.fillRect((this.center.x - 3), (this.center.y + this.radio) - 6, 6, 6);
    ctx2.fill();
    ctx2.closePath();
    ctx2.beginPath();
    ctx2.fillRect((this.center.x + this.radio) - 6, (this.center.y), 6, 6);
    ctx2.fill();
    ctx2.closePath();
    ctx2.beginPath();
    ctx2.fillRect((this.center.x - this.radio), (this.center.y), 6, 6);
    ctx2.fill();
    ctx2.closePath();
    if (jugando & !perdido & !terminado) {
        ctx2.fillStyle = "rgba(0,46,179,1.0)";
        ctx2.strokeStyle = i5a.X;
        ctx2.lineWidth = 1;
        ctx2.beginPath();
        ctx2.fillRect(36, 21, dataJtPc.w, 10);
        ctx2.strokeRect(34, 19, dataJtPc.rect + 4, 14);
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();
        ctx2.fillStyle = "rgba(255,46,0,1.0)";
        ctx2.font = "10px Bold";
        ctx2.textAlign = i5a.Q;
        ctx2.fillText("j e t  p a c k  e n e r g y ", 36 + i5a.c0, 29);
    }
};

function terrain(o, q, t, J) {
    this.tipe = o;
    this.center = {
        x: 0,
        y: 0
    };
    this.origin = {
        x: 0,
        y: 0
    };
    this.pos = {
        x: 0,
        y: 0
    };
    this.fin = {
        x: 0,
        y: 0
    };
    this.w = 0;
    this.h = i5a.g0;
    this.rx = 0;
    this.ry = i5a.M;
    this.index = J;
    this.i = 0;
    this.j = 0;
    this.k = 0;
    this.tipeDamage = 0;
    this.tDam = 0;
    this.maxDam = random(i5a.U, 120);
    this.isDam = false;
    this.upMove = 0;
    this.cPir = dataWorld.w + 1;
}
terrain.prototype.reset = function () {
    this.w = (this.tipe + 2) * 24;
    this.rx = this.w / 2;
    this.ry = i5a.M;
    pIndex = pIndex + this.w;
    this.center.x = pIndex - this.rx;
    this.center.y = alto + i5a.O;
    this.origin.x = pIndex - this.rx;
    this.origin.y = alto + i5a.O;
    this.tDam = this.center.x;
    if (this.index < 21) {
        if (random(1, 10) == 1) {
            this.tipeDamage = 2;
        } else {
            this.tipeDamage = random(0, 1);
        }
    } else if (this.index > i5a.E & this.index < 31) {
        if (random(1, 10) < 3) {
            this.tipeDamage = 2;
        } else {
            this.tipeDamage = random(0, 1);
        }
    } else if (this.index > 30) {
        if (random(1, 6) == 1) {
            this.tipeDamage = 3;
        } else {
            this.tipeDamage = random(1, 2);
        }
    }
};
terrain.prototype.update = function (o) {
    var q = 300;
    if (o) {
        if (dataCol.cx + q >= this.tDam) {
            switch (this.tipeDamage) {
            case 1:
                if (dataCol.cx + q >= this.tDam & dataCol.cx + q < this.tDam + (this.maxDam)) {
                    this.center.y = this.origin.y - ((dataCol.cx + q) - this.tDam);
                }
                if (dataCol.cx + q >= this.tDam + (this.maxDam)) {
                    this.center.y = this.origin.y - this.maxDam;
                }
                break;
            case 2:
                if (dataCol.cx + q >= this.tDam & dataCol.cx + q < this.tDam + (i5a.c0)) {
                    this.center.y = this.origin.y + ((dataCol.cx + q) - this.tDam);
                }
                break;
            case 3:
                if (dataCol.cx + i5a.c0 >= this.tDam & dataCol.cx + i5a.c0 < this.tDam + (i5a.c0)) {
                    this.center.y = this.origin.y + ((dataCol.cx + i5a.c0) + this.tDam);
                }
                break;
            }
            this.isDam = true;
        } else {
            this.isDam = false;
            this.center.y = this.origin.y;
        }
        if (this.index == 46) {
            if (this.center.x < dataCol.cx) {
                dataBreaks.p = 0;
                if (reloj.mode > 0) {
                    reloj.mode = 0;
                    dataCol.m = 0;
                }
                dataBreaks.r = false;
                flow(2);
            }
        }
        if (this.index == 42) {
            if (this.center.x < dataCol.cx) {
                this.cPir -= 1;
            } else {
                this.cPir = dataWorld.w + 1;
            }
        }
    }
    this.pos.x = this.center.x - this.rx;
    this.pos.y = this.center.y - this.ry;
    this.fin.x = this.pos.x + this.w;
    this.fin.y = this.pos.y + this.h;
};
terrain.prototype.pintar = function () {
    ctx.drawImage(iBase, 0, 0, this.w, this.h, this.pos.x - cam.x, this.pos.y, this.w, this.h);
};
terrain.prototype.pintar2 = function () {
    ctx.fillStyle = i5a.G + random(1, 10) + i5a.D + random(1, 10) + i5a.D + random(1, 10) + ",1.0)";
    ctx.beginPath();
    ctx.fillRect(this.pos.x - cam.x, this.pos.y, this.w, this.h);
    ctx.fill();
    ctx.closePath();
};

function Camera() {
    this.x = 0;
    this.y = 0;
}
Camera.prototype = {
    constructor: Camera,
    focus: function (o, q) {
        this.x = o - canvas.width / 2;
        this.y = q - canvas.height / 2;
        if (this.x < 0) {
            this.x = 0;
        } else if (this.x > dataWorld.w - ancho) {
            this.x = dataWorld.w - ancho;
            mPira = false;
        }
        if (this.y < 0) {
            this.y = 0;
        } else if (this.y > dataWorld.h - alto) {
            this.y = dataWorld.h - alto;
        }
    }
};

function getQBezierValue(o, q, t, J) {
    var H = 1 - o;
    return H * H * q + 2 * H * o * t + o * o * J;
}

function setBreak() {
    if (tBreaks >= 2) {
        if (dataCol.cx < terrains[8].center.x) {
            dataBreaks.p = random(i5a.e, terrains[8].center.x);
            dataBreaks.w = random(i5a.e, terrains[5].center.x);
            dataBreaks.m = 1;
        } else if (dataCol.cx >= terrains[5].center.x) {
            if (random(1, 2) == 1) {
                dataBreaks.p = random(dataCol.cx, terrains[i5a.P].center.x);
                dataBreaks.w = random(i5a.e, terrains[5].center.x);
                dataBreaks.m = 1;
            } else {
                dataBreaks.p = random(dataCol.cx, terrains[i5a.P].center.x);
                dataBreaks.w = random(i5a.e, terrains[5].center.x);
                dataBreaks.m = 2;
            }
        }
        tBreaks += 1;
    }
    switch (tBreaks) {
    case 0:
        if (random(1, 2) == 1) {
            dataBreaks.p = random(terrains[5].center.x, terrains[24].center.x);
            dataBreaks.w = random(terrains[5].center.x, terrains[10].center.x);
            dataBreaks.m = 1;
        } else {
            dataBreaks.w = random(terrains[5].center.x, terrains[24].center.x);
            dataBreaks.p = (random(terrains[26].center.x, terrains[41].center.x));
            dataBreaks.m = 2;
        }
        tBreaks = 1;
        break;
    case 1:
        if (dataCol.cx > terrains[21].center.x) {
            if (dataCol.cx > terrains[36].center.x) {
                dataBreaks.p = random(dataCol.cx, terrains[40].center.x);
            } else {
                dataBreaks.p = random(dataCol.cx, terrains[37].center.x);
            }
            dataBreaks.w = random(terrains[5].center.x, terrains[10].center.x);
            dataBreaks.m = 2;
        } else {
            dataBreaks.p = random(dataCol.cx, terrains[i5a.z].center.x);
            dataBreaks.w = random(terrains[5].center.x, terrains[10].center.x);
            dataBreaks.m = 1;
        }
        tBreaks = 2;
        break;
    }
}

function runBreak() {
    if (!dataBreaks.r) return;
    if (dataBreaks.m == 1) {
        pIndex = dataCol.cx + dataBreaks.w;
    } else {
        pIndex = dataCol.cx - dataBreaks.w;
    }
    snap();
    if (pIndex > dataCol.cx) {
        dataLin.x = 0;
        dataLin.fr = true;
        reloj.mode = 1;
        sRuido(0);
        reloj.actSec = ~~((dataCol.cx * 60) / i5a.K);
        counter = reloj.actSec;
    } else {
        dataLin.x = ancho;
        dataLin.fr = false;
        reloj.mode = 2;
        sRuido(1);
        reloj.actSec = ~~((dataCol.cx * 60) / i5a.K);
        counter = reloj.actSec;
    }
}

function winBlur() {
    switch (blur) {
    case true:
        blur = false;
        if (dataCol.m == 2) {
            dataCol.vy = 5;
            dataCol.u = false;
            dataCol.d = true;
            stpJet();
        }
        break;
    case false:
        blur = true;
        break;
    }
}

function procedural(o) {
    var q = "mon1",
        t;
    if (o) {
        canvas3.width = 120;
        canvas3.height = i5a.g0;
        ctx3.clearRect(0, 0, 120, i5a.g0);
        for (i = 0; i <= 5; i += 1) {
            for (j = 0; j <= 40; j += 1) {
                ctx3.fillStyle = i5a.G + random(90, i5a.I) + i5a.D + random(90, i5a.I) + ",0,1.0)";
                ctx3.beginPath();
                ctx3.fillRect(j * 3, i * 3, 3, 3);
                ctx3.fill();
                ctx3.closePath();
            }
        }
        for (i = 6; i <= 255; i += 1) {
            for (j = 0; j <= 40; j += 1) {
                ctx3.fillStyle = i5a.G + random(70, 90) + i5a.D + random(70, 90) + i5a.D + random(70, 90) + ",1.0)";
                ctx3.beginPath();
                ctx3.fillRect(j * 3, i * 3, 3, 3);
                ctx3.fill();
                ctx3.closePath();
            }
        }
        iBase.width = 120;
        iBase.height = i5a.g0;
        iBase.id = "tierra";
        iBase.name = "tierra";
        t = canvas3.toDataURL(i5a.b0);
        iBase.src = t;
        objetosCargados += 1;
        canvas3.width = 512;
        canvas3.height = i5a.g0;
        j = 1;
        for (i = 0; i <= 15; i += 1) {
            ctx3.save();
            ctx3.translate(i5a.g0 - (j * 8), i * 8);
            for (k = 0; k < j; k += 1) {
                ctx3.fillStyle = i5a.G + random(10, 30) + i5a.D + random(10, 30) + i5a.D + random(10, 30) + ",1.0)";
                ctx3.beginPath();
                ctx3.fillRect(k * 16, i * 8, 16, 16);
                ctx3.fill();
                ctx3.closePath();
            }
            ctx3.restore();
            j += 2;
        }
        iPiramide.width = 512;
        iPiramide.height = i5a.g0;
        iPiramide.id = "pira";
        iPiramide.name = "pira";
        objetosCargados += 1;
        t = canvas3.toDataURL(i5a.b0);
        iPiramide.src = t;
        ctx3.clearRect(0, 0, 512, i5a.g0);
        canvas3.width = i5a.g0;
        canvas3.height = i5a.g0;
        ctx3.clearRect(0, 0, i5a.g0, i5a.g0);
        gradiente1 = ctx3.createRadialGradient(i5a.M, i5a.M, 0, i5a.M, i5a.M, i5a.M);
        gradiente1.addColorStop(1, i5a.f0);
        gradiente1.addColorStop(0, i5a.Y);
        ctx3.fillStyle = gradiente1;
        for (j = 0; j <= 9; j += 1) {
            i = random(5, 8);
            k = (j * i5a.E) + i;
            m = ((j * i5a.E) + i5a.E) - i;
            k = k / i5a.c0;
            m = m / i5a.c0;
            ctx3.beginPath();
            ctx3.moveTo(i5a.M, i5a.M);
            ctx3.arc(i5a.M, i5a.M, i5a.M, m * Math.PI, k * Math.PI, true);
            ctx3.fill();
            ctx3.closePath();
        }
        gradiente1 = ctx3.createRadialGradient(i5a.M, i5a.M, 0, i5a.M, i5a.M, i5a.O);
        gradiente1.addColorStop(1, i5a.f0);
        gradiente1.addColorStop(i5a.W, "rgba(255,255,0,0.8)");
        gradiente1.addColorStop(0, i5a.Y);
        ctx3.fillStyle = gradiente1;
        ctx3.beginPath();
        ctx3.moveTo(i5a.M, i5a.M);
        ctx3.arc(i5a.M, i5a.M, 72, 0, 2 * Math.PI, true);
        ctx3.fill();
        ctx3.closePath();
        ctx3.fillStyle = i5a.V;
        t = canvas3.toDataURL(i5a.b0);
        objetosCargados += 1;
        iCeleb.width = i5a.g0;
        iCeleb.height = i5a.g0;
        iCeleb.id = "iCeleb";
        iCeleb.name = "iCeleb";
        iCeleb.src = t;
        ctx3.clearRect(0, 0, i5a.g0, i5a.g0);
        canvas3.width = 800;
        canvas3.height = 450;
        ctx3.clearRect(0, 0, 800, 450);
        gradiente1 = ctx3.createLinearGradient(0, 270, 0, alto);
        gradiente1.addColorStop(0.0, "rgba(112,37,4,1.0)");
        gradiente1.addColorStop(i5a.W, "rgba(39,25,19,1.0)");
        gradiente1.addColorStop(0.7, "rgba(53,30,19,1.0)");
        gradiente1.addColorStop(1.0, "rgba(3,85,51,1.0)");
        ctx3.fillStyle = gradiente1;
        ctx3.beginPath();
        ctx3.moveTo(0, 330);
        ctx3.bezierCurveTo(340, 340, 600, 270, ancho, alto - (~~(alto / 2.88)));
        ctx3.lineTo(ancho, alto);
        ctx3.lineTo(0, alto);
        ctx3.closePath();
        ctx3.fill();
        t = canvas3.toDataURL(i5a.b0);
        objetosCargados += 1;
        iMon1.width = 800;
        iMon1.height = 450;
        iMon1.id = q;
        iMon1.name = q;
        iMon1.src = t;
        ctx3.clearRect(0, 0, 800, 450);
        gradiente1 = ctx3.createLinearGradient(0, 0, 0, alto);
        gradiente1.addColorStop(0, "rgb(0,255,255)");
        gradiente1.addColorStop(0.9, "rgb(208,73,0)");
        gradiente1.addColorStop(1, "rgb(0,0,0)");
        ctx3.fillStyle = gradiente1;
        ctx3.beginPath();
        ctx3.fillRect(0, 0, ancho, alto);
        ctx3.fill();
        ctx3.closePath();
        t = canvas3.toDataURL(i5a.b0);
        objetosCargados += 1;
        iFondo.width = 800;
        iFondo.height = 450;
        iFondo.id = q;
        iFondo.name = q;
        iFondo.src = t;
        canvas3.width = i5a.A;
        canvas3.height = i5a.S;
        ctx3.clearRect(0, 0, i5a.A, i5a.S);
        ctx3.fillStyle = "rgba(0,45,1772,1.0)";
        ctx3.font = "25Px Bold";
        ctx3.textAlign = "origin";
        ctx3.fillText("Jump : space", 0, i5a.E);
        ctx3.fillText("Jet Pack: w or â†‘", 0, 55);
        ctx3.fillText("To pause : p", 0, 90);
        ctx3.textAlign = i5a.Q;
        ctx3.font = 'italic 20px Calibri';
        ctx3.fillText("!good luck :)", 80, 135);
        objetosCargados += 1;
        t = canvas3.toDataURL(i5a.b0);
        iHelp.id = "ayu";
        iHelp.name = "ayu";
        iHelp.src = t;
        t = null;
    }
    i = 0;
    j = 0;
    k = 0;
    for (i = 0; i <= 17; i += 1) tTerr[i] = 1;
    for (i = 18; i <= 35; i += 1) tTerr[i] = 2;
    for (i = 36; i <= i5a.P; i += 1) tTerr[i] = 3;
    for (j = 0; j <= i5a.P; j += 1) {
        k = random(0, tTerr.length - 1);
        terrains[j] = new terrain(tTerr[k], 0, 0, j);
        tTerr.splice(k, 1);
    }
    for (j = 0; j <= i5a.P; j += 1) {
        terrains[j].reset();
    }
    terrains[0].tipeDamage = 1;
    terrains[0].maxDam = 95;
    for (j = 1; j <= 4; j += 1) {
        terrains[j].tipeDamage = 0;
    }
    for (j = 42; j <= i5a.P; j += 1) {
        terrains[j].tipeDamage = 0;
    }
    dataWorld.w = pIndex;
    pIndex = 0;
}

function snap() {
    ctx3.clearRect(0, 0, ancho, alto);
    var o;
    o = canvas.toDataURL(i5a.b0);
    iSnap.src = o;
    o = null;
}

function creaBotones() {
    bPlay = new Button(272, alto - 192, i5a.g0, i5a.z, "Play", i5a.z);
    bSoni = new Button(272, alto - i5a.M, i5a.g0, i5a.z, i5a.F, i5a.z);
    bReset = new Button(272, alto - i5a.g0, i5a.g0, i5a.z, "Restart", i5a.z);
}

function switchAudio(o) {
    switch (haySonido) {
    case true:
        localStorage.setItem(i5a.c, "0");
        haySonido = false;
        bSoni.text = i5a.C;
        break;
    case false:
        localStorage.setItem(i5a.c, "1");
        haySonido = true;
        bSoni.text = i5a.F;
        break;
    }
}

function toPlayPause() {
    switch (jugando) {
    case true:
        jugando = false;
        pausado = true;
        terminado = false;
        perdido = false;
        bPlay.text = "Continue";
        break;
    case false:
        jugando = true;
        pausado = false;
        bPlay.text = "Play";
        terminado = false;
        perdido = false;
        break;
    }
}

function iniciaSonidos() {
    if (localStorage.getItem(i5a.c) == "0") {
        haySonido = false;
        bSoni.text = i5a.C;
    } else if (localStorage.getItem(i5a.c) == "1") {
        haySonido = true;
        bSoni.text = i5a.F;
    }
}

function random(o, q) {
    return Math.floor(Math.random() * (q - (o - 1))) + o;
}

function sRuido(o) {
    if (!haySonido | !jugando) return;
    var q = ruidos[o].f,
        t = ctxA.createOscillator(),
        J = ctxA.createGain();
    if (currentOsc) currentOsc.stop(0);
    t.type = i5a.l;
    t.frequency.value = q;
    t.start(0);
    currentOsc = t;
    currentGain = J;
    J.gain.value = 1;
    t.connect(J);
    J.connect(ctxA.destination);
}

function stRuid() {
    if (!haySonido) return;
    currentGain.gain.value = 0;
}

function sJet() {
    if (!haySonido) return;
    var o = ruidos[2].f,
        q = ctxA.createOscillator(),
        t = ctxA.createGain();
    if (currentOsc) currentOsc.stop(0);
    q.type = "sine";
    q.frequency.value = o;
    q.start(0);
    currentOsc = q;
    currentGain = t;
    t.gain.value = 1;
    q.connect(t);
    t.connect(ctxA.destination);
}

function stpJet() {
    if (!haySonido) return;
    if (currentGain) currentGain.gain.value = 0;
}

function sDead(o, q, t, J) {
    if (!haySonido) return;
    var H, L = ctxA.currentTime,
        e0 = q,
        a0 = 0,
        d0 = t;
    gg = ctxA.createGain();
    for (var N = 0; N < e0; N++) {
        H = ctxA.createOscillator();
        a0 = 1 / (d0 / 60) * o[N].v;
        H.type = "sine";
        H.frequency.value = o[N].f;
        H.start(L);
        H.stop(L + a0);
        L += a0;
        gg.gain.value = 0.1;
        H.connect(gg);
        gg.connect(ctxA.destination);
    }
}

function sCeleb() {
    if (!haySonido) return;
    var o, q = ctxA.currentTime,
        t = 0,
        J = ctxA.createGain();
    for (var H = 0; H < 15; H++) {
        o = ctxA.createOscillator();
        t = 1 / (200 / 60) * sFin[H].v;
        o.type = i5a.l;
        o.frequency.value = sFin[H].f;
        o.start(q);
        o.stop(q + t);
        q += t;
        J.gain.value = 0.1;
        o.connect(J);
        J.connect(ctxA.destination);
    }
}

function mMusic(o) {
    return;
}

function init() {
    var o = 'absolute';
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d', {
        antialias: false
    });
    canvas.width = ancho;
    canvas.height = alto;
    canvas2 = document.getElementById('reloj');
    ctx2 = canvas2.getContext('2d', {
        antialias: false
    });
    canvas2.width = ancho;
    canvas2.height = alto;
    canvas2.style.zIndex = "2";
    canvas3 = document.getElementById('procedural');
    ctx3 = canvas3.getContext('2d', {
        antialias: false
    });
    canvas3.width = ancho;
    canvas3.height = alto;
    canvas3.style.zIndex = "-1";
    canvas.style.position = o;
    canvas2.style.position = o;
    canvas3.style.position = o;
    canvas.style.backgroundColor = 'transparent';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = "1";
    iPlayer.onload = function () {
        dataP.cx = i5a.B;
        dataP.cy = alto - (70);
        dataP.x = dataP.cx - dataP.r;
        dataP.y = dataP.cy - dataP.r;
        objetosCargados += 1;
    };
    iPlayer.src = "c.png";
    reloj = new Clock();
    cam = new Camera();
    for (j = 0; j <= i5a.U; j++) {
        trailChar[j] = {
            m: false,
            x: 0,
            y: 0,
            a: 1.0
        };
    }
    for (j = 0; j <= mParts; j += 1) {
        parts[j] = new part();
    }
    for (j = 0; j <= 44; j += 1) {
        frags[j] = {
            x: 0,
            y: j * 10,
            h: 10,
            w: 0,
            cy: j,
            cx: 0
        };
    }
    brdData.alp = 1.0;
    brdData.up = false;
    creaBotones();
    iniciaSonidos();
    enableInputs();
    procedural(true);
    setBreak();
    run();
}

function run() {
    var o = Date.now(),
        q = (o - lastUpdate) / i5a.Z;
    if (q > 1) q = 0;
    lastUpdate = o;
    act(q);
    paint();
    requestAnimationFrame(run);
}

function rPart(o) {
    for (j = 1; j <= mParts; j += 1) {
        if (!parts[j].mode) {
            parts[j].mode = true;
            parts[j].center.x = (dataCol.cx - 4);
            parts[j].center.y = dataCol.cy;
            parts[j].alp = 1.0;
            if (o == null) {
                parts[j].rads = ((120 + (random(-10, 10))) * PI) / i5a.I;
                parts[j].v = 3;
            }
            if (o == 1) {
                parts[j].rads = ((random(0, 359)) * PI) / i5a.I;
                parts[j].v = random(1, 4);
            }
            parts[j].g = 0;
            parts[j].b = 0;
            if (o == null) break;
        }
    }
}

function aSpr() {
    dataP.sum -= 1;
    if (dataP.sum < 1) {
        dataP.sum = 5;
        dataP.tx += 1;
        if (dataP.tx > 7) {
            tSp += 2;
            dataP.tx = 0;
        }
    }
}

function moveUp() {
    dataCol.cy -= (~~(dataCol.vy *= 0.88));
}

function moveUp2() {
    dataCol.cy -= (~~(dataCol.vy *= 0.95));
    return;
    dataCol.vy -= (dataCol.vy * 0.08);
    if (dataCol.vy > 1) {
        dataCol.cy -= dataCol.vy;
    }
}

function moveDown(o) {
    if (dataCol.yf > terrains[o].pos.y + 5) {
        dataCol.yf = terrains[o].pos.y + 5;
        dataCol.cy = (terrains[o].pos.y + 5) - dataCol.ry;
        dataCol.vy = 5;
        dataCol.d = false;
    } else if (dataCol.yf <= terrains[o].pos.y + 5) {
        dataCol.cy += (~~(dataCol.vy *= gravity));
        dataCol.cx += 1;
        dataCol.j = 0;
        dataCol.d = true;
    }
}

function gDown(o) {
    if (dataCol.yf < terrains[o].pos.y + 5) {
        dataCol.cy += (~~(dataCol.vy *= gravity));
        moveFront(o + 1, 2);
    } else if (dataCol.yf >= (terrains[o].pos.y + 5)) {
        if (dataCol.cx > terrains[o].fin.x) {
            if (dataCol.yf < terrains[o + 1].pos.y + 5) {
                dataCol.cy += (~~(dataCol.vy *= gravity));
                moveFront(o + 1, 2);
            } else if (dataCol.yf >= terrains[o + 1].pos.y + 5) {
                dataCol.cx = terrains[o + 1].pos.x - dataCol.rx;
                dataCol.vy = 5;
                dataCol.m = 0;
                dataCol.j = 0;
                dataCol.d = false;
            }
        } else {
            dataCol.vy = 5;
            dataCol.m = 0;
            dataCol.j = 0;
            dataCol.d = false;
        }
    }
}

function moveFront(o, q) {
    if (dataCol.xf > terrains[o].pos.x) {
        if (dataCol.yf <= (terrains[o].pos.y + 5)) {
            dataCol.cx += q;
            aSpr();
        } else if (dataCol.yf > (terrains[o].pos.y + 5)) {
            dataP.sum += 1;
            dataP.tx = 6;
        }
    } else {
        dataCol.cx += q;
        aSpr();
    }
}

function upB() {
    dataCol.x = dataCol.cx - dataCol.rx;
    dataCol.xf = dataCol.cx + dataCol.rx;
    dataCol.y = dataCol.cy - dataCol.ry;
    dataCol.yf = dataCol.cy + dataCol.ry;
}

function dTl() {
    for (n = 0; n <= i5a.P; n += 1) {
        if (terrains[n].center.x < (dataCol.cx + i5a.B) | (dataCol.cx - i5a.B) > terrains[n].center.x) {
            if (dataCol.cx >= terrains[n].pos.x & dataCol.cx <= (terrains[n].fin.x)) {
                dataCol.tl = terrains[n].index;
                break;
            }
        }
    }
}

function eBug(o) {
    if (dataCol.xf > terrains[dataCol.tl].pos.x & dataCol.x < terrains[dataCol.tl].fin.x & dataCol.yf > (terrains[dataCol.tl].pos.y + 5) & dataCol.y < terrains[dataCol.tl].fin.y) {
        rDead = 1;
        dataCol.m = 5;
        tDead = 1;
        reloj.mode = 3;
        flow(5, 1);
    } else {
        setBreak();
        reloj.mode = 0;
    }
}

function playerUp() {
    switch (dataCol.m) {
    case 0:
        dTl();
        dataCol.xf = dataCol.x + dataCol.w;
        dataCol.yf = dataCol.y + dataCol.h;
        dataP.x = dataP.cx - dataP.r;
        dataP.y = dataP.cy - dataP.r;
        moveDown(dataCol.tl);
        moveFront(dataCol.tl + 1, 1);
        break;
    case 1:
        dTl();
        upB();
        if (dataCol.u) {
            moveUp();
            moveFront(dataCol.tl + 1, 2);
            if (dataCol.vy < 1) {
                dataCol.u = false;
                dataCol.d = true;
                dataCol.vy = 5;
            }
        }
        if (dataCol.d) {
            gDown(dataCol.tl);
        }
        break;
    case 2:
        dTl();
        upB();
        if (dataCol.u) {
            rPart();
            if (dataCol.vy < 1) {
                moveFront(dataCol.tl + 1, 1);
            } else {
                moveUp2();
                moveFront(dataCol.tl + 1, 2);
            }
        }
        if (dataCol.d) {
            gDown(dataCol.tl);
            dataCol.m = 0;
        }
        dataJtPc.v -= 2;
        if (dataJtPc.v < 0) {
            dataJtPc.v = 0;
            dataCol.vy = 5;
            dataCol.u = false;
            dataCol.d = true;
            if (sIn) {
                stpJet();
                sIn = false;
            }
        }
        dataJtPc.w = ~~((dataJtPc.v * dataJtPc.rect) / dataJtPc.max);
        break;
    case 3:
        dataP.sum = 5;
        dataP.tx = 2;
        break;
    case 4:
        dataCol.cx += 1;
        dataCol.cy += 2;
        break;
    case 5:
        dataCol.cx -= 1;
        dataCol.cy += 2;
        break;
    }
}

function pSun() {
    if (reloj.mode != 0) return;
    ctx.fillStyle = i5a.V;
    gradiente1 = ctx.createRadialGradient(dataSol.x, dataSol.y, 0, dataSol.x, dataSol.y, dataSol.rad);
    gradiente1.addColorStop(1, i5a.f0);
    gradiente1.addColorStop(0, i5a.Y);
    ctx.fillStyle = gradiente1;
    ctx.beginPath();
    ctx.moveTo(dataSol.x, dataSol.y);
    ctx.arc(dataSol.x, dataSol.y, dataSol.rad, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle = i5a.V;
    ctx.beginPath();
    ctx.moveTo(dataSol.x, dataSol.y);
    ctx.arc(dataSol.x, dataSol.y, (dataSol.rad - (dataSol.rad / 3)), 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.closePath();
}

function pPintar() {
    if (terminado) {
        ctx.save();
        ctx.globalAlpha = brdData.alp;
        ctx.translate(dataCol.cx - cam.x, dataCol.cy);
        ctx.rotate((gr2 * Math.PI) / i5a.I);
        ctx.drawImage(iCeleb, -i5a.M, -i5a.M);
        ctx.globalAlpha = 1.0;
        ctx.restore();
    }
    if (perdido) {
        if (tDead == 1) {
            brdData.outSd = true;
            ctx.globalAlpha = brdData.alp;
            ctx.drawImage(iPlayer, 8 * dataP.w, 0, dataP.w, dataP.h, dataP.x - cam.x, dataP.y, dataP.w, dataP.h);
        } else if (tDead == 0) {
            ctx.drawImage(iPlayer, 8 * dataP.w, 0, dataP.w, dataP.h, dataP.x - cam.x, dataP.y, dataP.w, dataP.h);
        }
        ctx.globalAlpha = 1.0;
    } else {
        ctx.drawImage(iPlayer, dataP.tx * dataP.w, 0, dataP.w, dataP.h, dataP.x - cam.x, dataP.y, dataP.w, dataP.h);
    }
}

function util_replay() {
    frame = 0;
    flow();
}

function flow(o, q) {
    switch (o) {
    case 0:
        isMenu = false;
        jugando = true;
        reloj.actSec = 0;
        counter = 0;
        reloj.center.x = ~~(ancho - (reloj.radio * 1.2));
        reloj.center.y = ~~(reloj.radio * 1.2);
        dataCol.cx = i5a.e;
        dataCol.cy = alto - (alto / 4);
        upB();
        dataCol.m = 0;
        break;
    case 1:
        if (!isMenu) toPlayPause();
        break;
    case 2:
        jugando = false;
        terminado = true;
        dataCol.vy = 3;
        dataCol.m = 3;
        bPlay.text = "Play again";
        sCeleb();
        break;
    case 3:
        break;
    case 4:
        jugando = true;
        terminado = false;
        bPlay.text = "Play";
        break;
    case 5:
        tDead = q;
        jugando = false;
        terminado = false;
        perdido = true;
        bPlay.text = "Re-play";
        dataCol.m = 0;
        sDead(sKill, 12, i5a.Z, 1.0);
        break;
    }
}

function runTraChar() {
    for (j = 0; j <= i5a.U; j++) {
        if (!trailChar[j].m) {
            trailChar[j].m = true;
            trailChar[j].a = 1.0;
            trailChar[j].x = dataP.x;
            trailChar[j].y = dataP.y;
            break;
        }
    }
}

function rStart() {
    brdData.alp = 1.0;
    brdData.up = false;
    procedural(false);
    tSp = 0;
    isMenu = false;
    jugando = true;
    terminado = false;
    pausado = false;
    perdido = false;
    cargando = false;
    tBreaks = 0;
    dataBreaks.r = true;
    setBreak();
    reloj.mode = 0;
    reloj.actSec = 0;
    counter = 0;
    reloj.center.x = ~~(ancho - (reloj.radio * 1.2));
    reloj.center.y = ~~(reloj.radio * 1.2);
    dataCol.cx = i5a.e;
    dataCol.cy = alto - (alto / 4);
    upB();
    dTl();
    for (j = 0; j <= 45; j += 1) terrains[j].update(true);
    dataLin = {
        x: 0,
        fr: false
    };
    dataJtPc.v = 250;
    dataJtPc.w = 200;
    dataCol.cx = terrains[0].center.x + 5;
    dataCol.cy = (terrains[0].pos.y + 4) - dataCol.ry;
    dataP.cx = dataCol.cx;
    dataP.cy = dataCol.cy;
    dataP.x = dataP.cx - dataP.r;
    dataP.y = dataP.cy - dataP.r;
    cam.focus(dataCol.cx, dataCol.cy);
    dataCol.m = 0;
}

function act(o) {
    var q = 0.05;
    if (haySonido & blur) {
        if (ctxF.currentTime >= mCon) {}
    }
    if (cargando) {
        if (objetosCargados > 5) {
            cargando = false;
            isMenu = true;
            i = 0;
            j = 0;
            k = 0;
        }
    }
    if (isMenu) {
        counter += o;
        reloj.actSec = ~~counter;
        if (reloj.actSec > 59) {
            reloj.actSec = 0;
            counter = 0;
        } else {
            if (random(1, 200) == 1) {
                reloj.actSec = random(0, i5a.P);
                counter = reloj.actSec;
                dataP.tx = random(0, 7);
            }
        }
        if (bSoni.touch()) {
            touches[0] = null;
            switchAudio();
        }
        if (bPlay.touch()) {
            touches[0] = null;
            isMenu = false;
            flow(0);
        }
        reloj.update(false);
        aSpr();
        for (j = 0; j <= 45; j += 1) terrains[j].update(true);
        dataCol.cx = terrains[0].center.x + 5;
        dataCol.cy = (terrains[0].pos.y + 4) - dataCol.ry;
        upB();
        dataP.cx = dataCol.cx;
        dataP.cy = dataCol.cy;
        dataP.x = dataP.cx - dataP.r;
        dataP.y = dataP.cy - dataP.r;
    }
    if (jugando) {
        frame += 1;
        if (frame > i5a.c0) frame = 0;
        for (j = 0; j <= i5a.P; j += 1) terrains[j].update(true);
        if (dataCol.cy < i5a.O) dataCol.cy = i5a.O;
        if (dataCol.cy > dataWorld.h - i5a.U) {
            flow(5, 0);
            rDead = 0;
            brdData.g = 280;
            brdData.outSd = false;
            brdData.up = true;
            brdData.do = false;
            dataCol.vy = 10;
            rPart(1);
        }
        switch (reloj.mode) {
        case 0:
            reloj.actSec = ~~((dataCol.cx * 60) / i5a.K);
            if (reloj.actSec > 59) {
                reloj.actSec = 0;
                counter = 0;
            }
            reloj.update(true);
            playerUp(true);
            for (p = 1; p <= mParts; p += 1) {
                if (parts[p].mode) parts[p].update();
            }
            if (dataCol.cx >= dataBreaks.p - 5 & dataCol.cx <= dataBreaks.p + 5) {
                runBreak();
            }
            break;
        case 1:
            alt += 1;
            if (alt > 1) {
                runTraChar();
                alt = 0;
            }
            dataCol.cx += 10;
            if (dataCol.cx > pIndex) {
                reloj.mode = 0;
                stRuid();
                upB();
                dTl();
                eBug(true);
                for (m = 0; m <= i5a.U; m++) trailChar[m].m = false;
            }
            reloj.actSec = ~~((dataCol.cx * 60) / i5a.K);
            reloj.update(true);
            for (m = 0; m <= i5a.U; m++) {
                if (trailChar[m].m) {
                    trailChar[m].a -= 0.02;
                    trailChar[m].x -= 1;
                    if (trailChar[m].a < q) {
                        trailChar[m].m = false;
                    }
                }
            }
            if (dataLin.x < ancho) dataLin.x += 10;
            break;
        case 2:
            dataCol.cx -= 10;
            alt += 1;
            if (alt > 1) {
                runTraChar();
                alt = 0;
            }
            if (dataCol.cx < pIndex) {
                reloj.mode = 0;
                stRuid();
                upB();
                dTl();
                eBug(false);
                for (m = 0; m <= i5a.U; m++) trailChar[m].m = false;
            }
            reloj.actSec = ~~((dataCol.cx * 60) / i5a.K);
            reloj.update(true);
            for (m = 0; m <= i5a.U; m++) {
                if (trailChar[m].m) {
                    trailChar[m].a -= q;
                    trailChar[m].x += 1;
                    if (trailChar[m].a < q) {
                        trailChar[m].m = false;
                    }
                }
            }
            if (dataLin.x > 0) dataLin.x -= 10;
            break;
        }
        if (mPira) {
            if (dataCol.cx > i5a.B) {
                cPira = ~~(800 - (((dataP.cx - i5a.B) * ancho) / 4286));
            } else {
                cPira = 800;
            }
        }
        reloj.update();
        dataCol.x = dataCol.cx - dataCol.rx;
        dataCol.y = dataCol.cy - dataCol.ry;
        dataP.cx = dataCol.cx;
        dataP.cy = dataCol.cy;
        dataSol.con = ((dataCol.cx * i5a.Z) / i5a.K) / i5a.Z;
        dataSol.rad = (((dataCol.cx * i5a.c0) / i5a.K));
        dataSol.x = getQBezierValue(dataSol.con, dataSol.x1, 600, dataSol.x2);
        dataSol.y = getQBezierValue(dataSol.con, dataSol.y1, i5a.U, dataSol.y2);
        dataP.x = dataP.cx - dataP.r;
        dataP.y = dataP.cy - dataP.r;
        if (frame % 2 == 0) {
            if (rSub) {
                ran += 1;
                if (ran > i5a.E) {
                    rSub = false;
                }
            } else {
                ran -= 1;
                if (ran < 1) {
                    rSub = true;
                }
            }
        }
    }
    if (pausado) {
        if (bReset.touch()) {
            touches[0] = null;
            rStart();
        }
        if (bPlay.touch()) {
            touches[0] = null;
            isMenu = false;
            flow(1);
        }
        if (bSoni.touch()) {
            touches[0] = null;
            switchAudio();
        }
    }
    if (terminado) {
        for (j = 0; j <= 45; j += 1) terrains[j].update(false);
        if (dataCol.cy > (terrains[1].pos.y - 270)) {
            dataCol.cy -= (dataCol.vy *= 0.99);
            gr1 += 1;
            siMom = false;
        } else {
            siMom = true;
            gr1 += 1;
            if (bSoni.touch()) {
                touches[0] = null;
                switchAudio();
            }
            if (bPlay.touch()) {
                touches[0] = null;
                pIndex = 0;
                rStart();
            }
        }
        if (dataCol.cx < 4350 + 10) {
            dataCol.cx += 1;
        } else if (dataCol.cx > 4350 + 10) {
            dataCol.cx -= 1;
        }
        dataP.cx = dataCol.cx;
        dataP.cy = dataCol.cy;
        dataP.x = dataP.cx - dataP.r;
        dataP.y = dataP.cy - dataP.r;
        upB();
        playerUp(true);
        if (gr1 > 5) {
            gr1 = 0;
            gr2 += random(2, 5);
            if (gr2 > 359) gr2 = 0;
        }
        if (brdData.up) {
            brdData.alp += 0.01;
            if (brdData.alp > 0.95) brdData.up = false;
        } else {
            brdData.alp -= 0.01;
            if (brdData.alp < 0.4) brdData.up = true;
        }
    }
    if (perdido) {
        switch (tDead) {
        case 0:
            if (brdData.up) {
                dataCol.vy -= 1;
                dataCol.cy -= (dataCol.vy);
                if (dataCol.vy < 1) {
                    brdData.up = false;
                    brdData.do = true;
                }
            } else if (brdData.do) {
                dataCol.cy += 1;
                if (dataCol.cy > (alto + i5a.z)) {
                    brdData.do = false;
                    brdData.outSd = true;
                }
            }
            upB();
            dataP.cx = dataCol.cx;
            dataP.cy = dataCol.cy;
            dataP.x = dataP.cx - dataP.r;
            dataP.y = dataP.cy - dataP.r;
            for (p = 1; p <= mParts; p += 1) {
                if (parts[p].mode) parts[p].update();
            }
            break;
        case 1:
            if (brdData.up) {
                brdData.alp += 0.03;
                if (brdData.alp > 0.95) brdData.up = false;
            } else {
                brdData.alp -= 0.03;
                if (brdData.alp < q) brdData.up = true;
            }
            break;
        }
        if (brdData.outSd) {
            if (bSoni.touch()) {
                touches[0] = null;
                switchAudio();
            }
            if (bPlay.touch()) {
                dataCol.cx = 0;
                dTl();
                pIndex = 0;
                rStart();
                touches[0] = null;
            }
        }
    }
    mPira = true;
    cam.focus(dataCol.cx, dataCol.cy);
    touches[0] = null;
}

function rPintar(o) {
    if (reloj.mode == 0 | reloj.mode == 3 | reloj.mode == 4) {
        gradiente1 = ctx.createLinearGradient(0, alto - (alto / 10), 0, alto);
        gradiente1.addColorStop(0, "rgba(255,212,1," + ran / 30 + ")");
        gradiente1.addColorStop(0.8, "rgba(255,0,4,0.9)");
        gradiente1.addColorStop(1, i5a.X);
        ctx.beginPath();
        ctx.fillStyle = gradiente1;
        ctx.fillRect(0, (alto - (alto / 10)), ancho, alto / 5);
        ctx.fill();
        ctx.closePath();
        for (j = 0; j <= o; j += 1) terrains[j].pintar();
    } else if (reloj.mode == 1 | reloj.mode == 2) {
        ctx.drawImage(iSnap, 0, 0);
        for (j = 0; j <= 44; j += 1) {
            if (dataLin.fr) {
                frags[j].cx = 0;
                frags[j].x = random(-i5a.E, i5a.E);
                frags[j].w = dataLin.x + (random(-i5a.E, i5a.E));
            } else {
                frags[j].cx = dataLin.x + (random(-i5a.E, i5a.E));
                frags[j].x = frags[j].cx + (random(-i5a.E, i5a.E));
                frags[j].w = ancho - frags[j].cx;
            }
            ctx.drawImage(iSnap, frags[j].cx, frags[j].cy * frags[j].h, frags[j].w, frags[j].h, frags[j].x, frags[j].y, frags[j].w, frags[j].h);
        }
        for (j = 0; j <= i5a.U; j++) {
            if (trailChar[j].m) {
                ctx.globalAlpha = trailChar[j].a;
                ctx.drawImage(iPlayer, dataP.tx * dataP.w, 0, dataP.w, dataP.h, trailChar[j].x - cam.x, dataP.y, dataP.w, dataP.h);
            }
        }
        ctx.globalAlpha = 1.0;
    }
    for (p = 1; p <= mParts; p += 1) {
        if (parts[p].mode) parts[p].pintar();
    }
}

function pHelp(o) {
    ctx.fillStyle = "rgba(255,88,0,0.5)";
    ctx.beginPath();
    if (o) {
        ctx.fillRect(ancho - i5a.A, alto - i5a.S, i5a.A, i5a.S);
        ctx.drawImage(iHelp, ancho - i5a.A, alto - i5a.S);
    } else {
        ctx.fillRect(ancho - i5a.A, 0, i5a.A, i5a.S);
        ctx.drawImage(iHelp, ancho - i5a.A, 0);
    }
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle = i5a.X;
}

function paint() {
    var o = "40Px Bold",
        q = "rgba(255,20,0,1.0)",
        t = 4100;
    ctx.clearRect(0, 0, ancho, alto);
    ctx.drawImage(iFondo, 0, 0);
    pSun();
    ctx.drawImage(iMon1, 0, 0);
    gradiente1 = ctx.createLinearGradient(0, alto - (alto / 5), 0, alto);
    gradiente1.addColorStop(0, "rgb(0,32,1)");
    gradiente1.addColorStop(1, "rgb(0,160,4)");
    ctx.fillStyle = gradiente1;
    ctx.beginPath();
    ctx.fillRect(0, alto - (alto / 5), ancho, alto / 5);
    ctx.fill();
    ctx.closePath();
    if (cargando) {
        ctx.fillStyle = "rgba(255,255,255,1)";
        ctx.font = "30Px Arial";
        ctx.textAlign = i5a.Q;
        ctx.fillText("loading . . .", ancho / 2, alto / 2);
    }
    if (isMenu) {
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.drawImage(iPiramide, 800 - i5a.O, alto - (alto / 3), i5a.M, i5a.O);
        ctx.font = "100Px Arial";
        ctx.textAlign = "origin";
        ctx.fillText("Ah Kin", i5a.e, 132);
        ctx.fillText("Glitch", 630, 132);
        rPintar(i5a.E);
        reloj.pintar(true);
        bPlay.pintar();
        bSoni.pintar();
        pPintar();
        ctx.strokeStyle = "rgba(255,124,56,1)";
        pHelp(true);
    }
    if (jugando) {
        ctx.drawImage(iPiramide, cPira - i5a.O, alto - (alto / 3), i5a.M, i5a.O);
        ctx.drawImage(iPiramide, t - cam.x, terrains[1].pos.y - i5a.g0);
        ctx.fillStyle = "rgba(255,124,255,1)";
        ctx.font = "20Px Arial";
        reloj.pintar(true);
        rPintar(i5a.P);
        pPintar();
    }
    if (pausado) {
        ctx.drawImage(iPiramide, cPira - i5a.O, alto - (alto / 3), i5a.M, i5a.O);
        ctx.drawImage(iPiramide, t - cam.x, terrains[1].pos.y - i5a.g0);
        reloj.pintar(false);
        rPintar(i5a.P);
        pPintar();
        ctx.fillStyle = q;
        ctx.font = o;
        ctx.textAlign = i5a.Q;
        ctx.fillText("Game Paused...", ancho / 2, alto / 5);
        bPlay.pintar();
        bReset.pintar();
        bSoni.pintar();
        pHelp(false);
    }
    if (terminado) {
        ctx.drawImage(iPiramide, cPira - i5a.O, alto - (alto / 3), i5a.M, i5a.O);
        ctx.drawImage(iPiramide, t - cam.x, terrains[1].pos.y - i5a.g0);
        rPintar(i5a.P);
        pPintar();
        if (siMom) {
            ctx.fillStyle = q;
            ctx.font = o;
            ctx.textAlign = i5a.Q;
            ctx.fillText("Congrats, you WIN :)", ancho / 2, alto / 5);
            ctx.fillText("you ran " + tSp + " Steps", ancho / 2, (alto / 5) + i5a.U);
            bPlay.pintar();
            bSoni.pintar();
        }
    }
    if (perdido) {
        ctx.drawImage(iPiramide, t - cam.x, terrains[1].pos.y - i5a.g0);
        ctx.drawImage(iPiramide, cPira - i5a.O, alto - (alto / 3), i5a.M, i5a.O);
        rPintar(i5a.P);
        if (brdData.outSd) {
            ctx.fillStyle = q;
            ctx.font = o;
            ctx.textAlign = i5a.Q;
            ctx.fillText(cDead[rDead] + " . . .", ancho / 2, alto / 5);
            bPlay.pintar();
            bSoni.pintar();
        }
        for (p = 1; p <= mParts; p += 1) {
            if (parts[p].mode) parts[p].pintar();
        }
        pPintar();
    }
}

function enableInputs() {
    document.addEventListener('mousedown', function (o) {
        x = ~~((o.pageX - canvas.offsetLeft) * scaleX);
        y = ~~((o.pageY - canvas.offsetTop) * scaleY);
        touches[0] = new Vtouch(x, y);
    }, false);
    document.addEventListener('mousemove', function (o) {
        if (touches[0]) {
            touches[0].x = ~~((o.pageX - canvas.offsetLeft) * scaleX);
            touches[0].y = ~~((o.pageY - canvas.offsetTop) * scaleY);
        }
    }, false);
    document.addEventListener('mouseup', function (o) {
        touches[0] = null;
    }, false);
    document.addEventListener('keydown', function (o) {
        if (reloj.mode > 0 | !jugando) return;
        if (o.which == 80) flow(1);
        if (o.which == i5a.z) {
            if (dataCol.d) return;
            switch (dataCol.j) {
            case 0:
                dataCol.j = 1;
                dataCol.u = true;
                dataCol.d = false;
                dataCol.vy = 15;
                dataCol.m = 1;
                dataP.tx = 2;
                sDead(sJump, 9, i5a.Z, i5a.R);
                break;
            case 1:
                if (!dataCol.d) {
                    if (gg) gg.disconnect();
                    sDead(sJump, 6, i5a.B, 0.50);
                    dataCol.j = 2;
                    dataCol.u = true;
                    dataCol.d = false;
                    dataCol.vy += 10;
                    dataCol.m = 1;
                    dataP.tx = 2;
                }
                break;
            }
        }
        if (o.which == 87 | o.which == 38) {
            if (dataCol.u | !jugando) return;
            if (dataJtPc.v < 1) return;
            dataCol.m = 2;
            sJet();
            dataCol.j = 1;
            dataCol.u = true;
            dataCol.d = false;
            dataCol.vy = 18;
            sIn = true;
            dataP.tx = 2;
        }
    }, false);
    document.addEventListener('keyup', function (o) {
        if (o.which == 87 | o.which == 38) {
            dataCol.vy = 5;
            dataCol.u = false;
            dataCol.d = true;
            stpJet();
            sIn = false;
        }
    });
    document.addEventListener("visibilitychange", winBlur, false);
}

function Vtouch(o, q) {
    this.x = o || 0;
    this.y = q || 0;
}

function Button(o, q, t, J, H, L) {
    this.x = o;
    this.y = q;
    this.rx = t / 2;
    this.ry = J / 2;
    this.width = t;
    this.height = J;
    this.text = H;
    this.size = L;
}
Button.prototype.touch = function () {
    if (this.tocado & this.id < 10) return false;
    if (touches[0] != null) {
        if (this.x < touches[0].x && this.x + this.width > touches[0].x && this.y < touches[0].y && this.y + this.height > touches[0].y) {
            this.tocado = true;
            return true;
        }
    }
    return false;
};
Button.prototype.pintar = function () {
    ctx.strokeStyle = "rgba(20,0,0,1.0)";
    ctx.fillStyle = i5a.T;
    ctx.beginPath();
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = i5a.X;
    ctx.font = this.size + 'px Calibri';
    ctx.textAlign = 'center';
    ctx.fillText(this.text, this.x + this.rx, this.y + (~~(this.ry * 1.5)));
};