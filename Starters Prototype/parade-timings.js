(function(){
  var KEY = 'bha_parade_timings_v1';
  var SEED = {
    recs: {
      1: { arr:{t:'14:01:40', by:'Sam Morgan', pressed:'14:01:40'}, dep:{t:'14:10:05', by:'Sam Morgan', pressed:'14:10:05'} },
      2: { arr:{t:'14:31:12', by:'Priya Shah', pressed:'14:31:12'} }
    },
    log: [
      {at:'14:01:40', race:1, k:'arr', action:'Recorded', from:'', to:'14:01:40', by:'Sam Morgan'},
      {at:'14:10:05', race:1, k:'dep', action:'Recorded', from:'', to:'14:10:05', by:'Sam Morgan'},
      {at:'14:31:12', race:2, k:'arr', action:'Recorded', from:'', to:'14:31:12', by:'Priya Shah'}
    ]
  };
  var clone = function(o){ return JSON.parse(JSON.stringify(o)); };
  function load(){ try { var v = localStorage.getItem(KEY); return v ? JSON.parse(v) : clone(SEED); } catch(e) { return clone(SEED); } }
  function save(d){ try { localStorage.setItem(KEY, JSON.stringify(d)); } catch(e) {} window.dispatchEvent(new CustomEvent('bha-parade')); }
  function subscribe(fn){
    var h = function(){ fn(load()); }, st = function(e){ if (e.key === KEY) h(); };
    window.addEventListener('bha-parade', h); window.addEventListener('storage', st);
    return function(){ window.removeEventListener('bha-parade', h); window.removeEventListener('storage', st); };
  }
  window.BHAParade = { load:load, save:save, subscribe:subscribe, seed:function(){ return clone(SEED); } };
})();
