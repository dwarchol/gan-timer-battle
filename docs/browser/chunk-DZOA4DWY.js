import{b as k}from"./chunk-CH4S6UZU.js";import{a as D,b as v,c as L,d as _,e as N,f as I,g as U}from"./chunk-IY3UXEJE.js";import"./chunk-YSKS7LQL.js";import{a as S,b as B,c as f,d as C,e as g}from"./chunk-USRKAH34.js";import{b as O}from"./chunk-DTNHGE5H.js";import{a as P,c as R,e as y,f as p,g as T}from"./chunk-SDAS6MWB.js";import{f as r}from"./chunk-GYJWRRWW.js";var M=class extends y{constructor(e){super(),this.metric=e}traverseAlg(e){let t=0;for(let n of e.childAlgNodes())t+=this.traverseAlgNode(n);return t}traverseGrouping(e){let t=e.alg;return this.traverseAlg(t)*Math.abs(e.amount)}traverseMove(e){return this.metric(e)}traverseCommutator(e){return 2*(this.traverseAlg(e.A)+this.traverseAlg(e.B))}traverseConjugate(e){return 2*this.traverseAlg(e.A)+this.traverseAlg(e.B)}traversePause(e){return 0}traverseNewline(e){return 0}traverseLineComment(e){return 0}},ae=class extends y{traverseAlg(e){let t=0;for(let n of e.childAlgNodes())t+=this.traverseAlgNode(n);return t}traverseGrouping(e){let t=e.alg;return this.traverseAlg(t)*Math.abs(e.amount)}traverseMove(e){return 1}traverseCommutator(e){return 2*(this.traverseAlg(e.A)+this.traverseAlg(e.B))}traverseConjugate(e){return 2*this.traverseAlg(e.A)+this.traverseAlg(e.B)}traversePause(e){return 1}traverseNewline(e){return 1}traverseLineComment(e){return 1}};function K(e){return"A"<=e&&e<="Z"}function $(e){let t=e.family;return K(t[0])&&t[t.length-1]==="v"||t==="x"||t==="y"||t==="z"||t==="T"?0:1}function oe(e){return 1}function G(e){let t=e.family;return K(t[0])&&t[t.length-1]==="v"||t==="x"||t==="y"||t==="z"||t==="T"?0:1}function ie(e){return Math.abs(e.amount)*G(e)}var Q=p(M,[$]),qe=p(M,[oe]),je=p(M,[ie]),He=p(M,[G]),Je=p(ae,[$]);var se=class extends y{traverseAlg(e){let t=0;for(let n of e.childAlgNodes())t+=this.traverseAlgNode(n);return t}traverseGrouping(e){return this.traverseAlg(e.alg)*Math.abs(e.amount)}traverseMove(e){return 1}traverseCommutator(e){return 2*(this.traverseAlg(e.A)+this.traverseAlg(e.B))}traverseConjugate(e){return 2*this.traverseAlg(e.A)+this.traverseAlg(e.B)}traversePause(e){return 1}traverseNewline(e){return 0}traverseLineComment(e){return 0}},Ze=p(se);var ce=2,ue=!0,le=!1;function me(e,t){let n=[];for(let a of t){let o=new R(a);if(o.amount!==1)throw new Error("SGS cannot handle def moves with an amount other than 1 yet.");let i=e.identityTransformation();for(let w=1;i=i.applyMove(o),!i.isIdentityTransformation();w++)n.push({move:o.modified({amount:w}),transformation:i})}return n}var x=class{constructor(e,t,n){this.kpuzzle=e,this.sgs=t,this.searchMoves=me(this.kpuzzle,n??Object.keys(this.kpuzzle.definition.moves))}searchMoves;solve(a){return r(this,arguments,function*(e,t=ce,n){let o=e.experimentalToTransformation();if(!o)throw new Error("distinguishable pieces are not supported in tremble solver yt");let i=null,w=1e6,b=(u,l,h)=>{if(l===0){let c=this.sgsPhaseSolve(u,w);if(!c)return;let m=h.concat(c).experimentalSimplify({cancel:{directional:"any-direction",puzzleSpecificModWrap:"canonical-centered"},puzzleSpecificSimplifyOptions:{quantumMoveOrder:n}}),z=Q(m);(i===null||z<w)&&(le&&(console.log(`New best (${z} moves): ${m.toString()}`),console.log(`Tremble moves are: ${h.toString()}`)),i=m,w=z);return}for(let c of this.searchMoves)b(u.applyTransformation(c.transformation),l-1,h.concat([c.move]))};for(let u=0;u<=t;u++)b(o,u,new T);if(i===null)throw new Error("SGS search failed.");return i})}sgsPhaseSolve(e,t){let n=new P,a=e;for(let o of this.sgs.ordering){let i=o.pieceOrdering,w="",b=a.invert();for(let l=0;l<i.length;l++){let h=i[l],c=h.orbitName,m=h.permutationIdx;w+=` ${b.transformationData[c].permutation[m]} ${b.transformationData[c].orientationDelta[m]}`}let u=o.lookup[w];if(!u)throw new Error("Missing algorithm in sgs or esgs?");if(n.experimentalPushAlg(u.alg),n.experimentalNumAlgNodes()>=t)return null;if(a=a.applyTransformation(u.transformation),ue)for(let l=0;l<i.length;l++){let h=i[l],c=h.orbitName,m=h.permutationIdx;if(a.transformationData[c].permutation[m]!==m||a.transformationData[c].orientationDelta[m]!==0)throw new Error("bad SGS :-(")}}return n.toAlg()}};function fe(e,t){let n=e.identityTransformation();for(let a of t.ordering){let o=O(Object.values(a.lookup));n=n.applyTransformation(o.transformation)}return n.toKPattern()}var V=f(()=>r(void 0,null,function*(){return import("./chunk-KW2SS2SZ.js")}));function X(e,t,n){return r(this,null,function*(){let{wasmTwsearch:a}=yield V;return a(e,t,n)})}function ve(e){return r(this,null,function*(){let{wasmRandomScrambleForEvent:t}=yield V;return t(e)})}var d=f(()=>import("./chunk-RADX6FQW.js")),W=null;function de(){return r(this,null,function*(){return W||(W=r(this,null,function*(){let e=yield(yield d).cachedData222();return new x(yield g["2x2x2"].kpuzzle(),e,"URFLBD".split(""))}))})}function we(){return r(this,null,function*(){yield de()})}function he(e){return r(this,null,function*(){return v(),X((yield C.kpuzzle()).definition,e,{generatorMoves:"UFLR".split("")})})}var Y=f(()=>import("./chunk-ORUCPERR.js")),Se=[[null,"x","x2","x'","z","z'"],[null,"y","y2","y'"]];function ge(){return r(this,null,function*(){return(yield Y).initialize()})}function ee(){return r(this,null,function*(){return v(),(yield Y).random444Scramble()})}function pe(){return r(this,null,function*(){return L(yield ee(),Se)})}var be=f(()=>import("./chunk-YBTJGQAZ.js")),vt=f(()=>import("./chunk-B3OGMZNS.js"));function Te(){return r(this,null,function*(){return v(),new T(yield(yield be).getRandomFTOScramble())})}var ye=f(()=>import("./chunk-B4THBGJO.js"));function Me(){return r(this,null,function*(){return v(),(yield ye).getRandomKilominxScramble()})}var xe=f(()=>import("./chunk-R3A4XA2M.js"));function ze(){return r(this,null,function*(){return v(),new T(yield(yield xe).randomMasterTetraminxScrambleString())})}var Ae=2,q=null;function Fe(){return r(this,null,function*(){return q||(q=r(this,null,function*(){let e=yield(yield d).cachedSGSDataMegaminx();return new x(yield(yield d).cachedMegaminxKPuzzleWithoutMO(),e,["U","R","F","L","BR","BL","FR","FL","DR","DL","B","D"])}))})}function Ee(e){return r(this,null,function*(){v();let t=yield Fe(),n=structuredClone(e.patternData);n.CENTERS.orientation=new Array(12).fill(0);let a=new S(yield(yield d).cachedMegaminxKPuzzleWithoutMO(),n);return yield t.solve(a,Ae,()=>5)})}var Pe=3,j=null;function Re(){return r(this,null,function*(){return j||(j=r(this,null,function*(){let e=yield(yield d).sgsDataPyraminx();return new x(yield g.pyraminx.kpuzzle(),e,"RLUB".split(""))}))})}function Oe(e){return r(this,null,function*(){return v(),yield(yield Re()).solve(e,Pe,()=>3)})}var ke=f(()=>import("./chunk-B3OGMZNS.js"));function Be(){return r(this,null,function*(){return v(),(yield ke).getRandomRediCubeScramble()})}var Ce=3,H=null;function De(){return r(this,null,function*(){return H||(H=r(this,null,function*(){let e=yield(yield d).sgsDataSkewb();return new x(yield(yield d).skewbKPuzzleWithoutMOCached(),e,"RLUB".split(""))}))})}function Le(e){return r(this,null,function*(){return new S(yield(yield d).skewbKPuzzleWithoutMOCached(),{CORNERS:e.patternData.CORNERS,CENTERS:{pieces:e.patternData.CENTERS.pieces,orientation:new Array(6).fill(0)}})})}function te(e){return r(this,null,function*(){return v(),yield(yield De()).solve(yield Le(e),Ce,a=>a.family==="y"?4:3)})}function _e(){return r(this,null,function*(){return fe(yield(yield d).skewbKPuzzleWithoutMOCached(),yield(yield d).sgsDataSkewbFixedCorner())})}function Ne(){return r(this,null,function*(){return te(yield _e())})}var Ie=f(()=>import("./chunk-DLKSX7DM.js"));function Ue(){return r(this,null,function*(){return T.fromString(yield(yield Ie).getRandomSquare1ScrambleString())})}var Ke=1e3;D(!0);var re=!0;function $e(e){re=e}function J(){return(typeof performance>"u"?Date:performance).now()}function s(e,t,n){return r(this,null,function*(){if(!re)return t();let a=J(),o=t();o?.then&&(yield o);let i=J();return console.warn(`${e}${n?.isPrefetch?" (prefetched)":""}: ${Math.round(i-a)}ms`),o})}var A=new Map,F=null;function Z(e,t){return r(this,null,function*(){function n(){return s(`wasmRandomScrambleForEvent(${JSON.stringify(e)})`,()=>ve(e),{isPrefetch:t?.isPrefetch})}switch(e){case"222":return(yield n()).experimentalSimplify({puzzleSpecificSimplifyOptions:{quantumMoveOrder:()=>4}});case"555":case"666":case"777":case"333fm":case"minx":case"pyram":case"555bf":return n();case"333":case"333oh":case"333ft":return s("random333Scramble",N,{isPrefetch:t?.isPrefetch});case"333bf":case"333mbf":return s("random333OrientedScramble",U);case"444":return s("random444Scramble",ee,{isPrefetch:t?.isPrefetch});case"444bf":return s("random444OrientedScramble",pe);case"skewb":return s("randomSkewbFixedCornerScramble",Ne);case"sq1":return s("getRandomSquare1Scramble",Ue,{isPrefetch:t?.isPrefetch});case"fto":return s("randomFTOScramble",Te,{isPrefetch:t?.isPrefetch});case"master_tetraminx":return s("randomMasterTetraminxScramble",ze);case"kilominx":return s("randomKilominxScramble",Me,{isPrefetch:t?.isPrefetch});case"redi_cube":return s("randomRediCubeScramble",Be,{isPrefetch:t?.isPrefetch});default:throw new Error(`unsupported event: ${e}`)}})}var E="auto",ne={initialize:e=>r(void 0,null,function*(){switch(e){case"222":return s("preInitialize222",we);case"333":case"333oh":case"333ft":return s("initialize333",I);case"444":return s("initialize444",ge);default:throw new Error(`unsupported event: ${e}`)}}),setScramblePrefetchLevel(e){E=e},randomScrambleForEvent:e=>r(void 0,null,function*(){let t=A.get(e);return t?A.delete(e):t=Z(e),E!=="none"&&t.then(()=>{F&&clearTimeout(F),F=setTimeout(()=>{A.set(e,Z(e,{isPrefetch:!0}))},E==="immediate"?0:Ke)}),t}),randomScrambleStringForEvent:e=>r(void 0,null,function*(){return(yield ne.randomScrambleForEvent(e)).toString()}),solve333ToString:e=>r(void 0,null,function*(){let t=new S(yield g["3x3x3"].kpuzzle(),e);return(yield _(t)).toString()}),solve222ToString:e=>r(void 0,null,function*(){let t=new S(yield g["2x2x2"].kpuzzle(),e);return(yield he(t)).toString()}),solveSkewbToString:e=>r(void 0,null,function*(){let t=new S(yield g.skewb.kpuzzle(),e);return(yield te(t)).toString()}),solvePyraminxToString:e=>r(void 0,null,function*(){let t=new S(yield g.pyraminx.kpuzzle(),e);return(yield Oe(t)).toString()}),solveMegaminxToString:e=>r(void 0,null,function*(){let t=new S(yield g.megaminx.kpuzzle(),e);return(yield Ee(t)).toString()}),setDebugMeasurePerf:e=>r(void 0,null,function*(){$e(e)}),solveTwsearchToString:(e,t,n)=>r(void 0,null,function*(){let a=new B(e),o=new S(a,t);return(yield X(e,o,n)).toString()})};k(ne);
