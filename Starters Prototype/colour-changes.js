(function(){
  var KEY = 'bha_colour_changes_v1';
  var SEED = [{
    id:'seed1', race:0, raceLabel:'R1 \u00b7 2:07', no:10, horse:'Valirann Gold', owner:'Gold Standard Racing', jockey:'Ben Jones',
    kind:'part', kindLabel:'Cap only',
    beforeDesc:'Yellow, black hoops, red cap, orange spots', beforeSpec:{body:'yellow',pattern:'hoops',second:'black',cap:'red',capPattern:'spots',cap2:'orange'}, beforeCode:'C-30118',
    afterDesc:'Yellow, black hoops, orange cap', afterSpec:{body:'yellow',pattern:'hoops',second:'black',cap:'orange'}, afterCode:'',
    note:'Plain orange cap instead of red cap with orange spots. Original cap damaged.', borrowed:'', photo:'', at:'13:48', by:'Clerk of the scales'
  }];
  function load(){ try { var v = localStorage.getItem(KEY); return v ? JSON.parse(v) : SEED.slice(); } catch(e) { return SEED.slice(); } }
  function save(list){ try { localStorage.setItem(KEY, JSON.stringify(list)); } catch(e) {} window.dispatchEvent(new CustomEvent('bha-colours')); }
  function subscribe(fn){
    var h = function(){ fn(load()); };
    var st = function(e){ if (e.key === KEY) h(); };
    window.addEventListener('bha-colours', h); window.addEventListener('storage', st);
    return function(){ window.removeEventListener('bha-colours', h); window.removeEventListener('storage', st); };
  }
  window.BHAColourChanges = { load:load, save:save, subscribe:subscribe, KEY:KEY };
})();
