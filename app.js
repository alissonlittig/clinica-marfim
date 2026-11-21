(function () {
  'use strict';
  var b = document.querySelector('.burger'), nav = document.getElementById('menu');
  if (b && nav) {
    b.addEventListener('click', function () {
      var o = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', String(!o));
      nav.classList.toggle('open', !o);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { b.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { b.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); b.focus(); }
    });
  }

  var fill = document.getElementById('tf'), out = document.getElementById('vout'), sws = document.querySelectorAll('.sw');
  var msg = {
    B1: 'Seu tom já é dos mais claros. Na avaliação, vemos se o foco é manter ou ajustar o formato.',
    A1: 'Tom A1: muito claro. O plano pode ser de manutenção e pequenos ajustes.',
    B2: 'Tom B2: bom ponto de partida para clareamento em poucas sessões.',
    A2: 'Tom A2: o clareamento costuma trazer diferença bem visível.',
    C1: 'Tom C1: tendência acinzentada. Medimos na avaliação para escolher o melhor caminho.',
    A3: 'Tom atual A3. Na avaliação, medimos o seu e planejamos o clareamento.',
    D3: 'Tom D3: pode pedir etapas. Mostramos o resultado esperado antes de começar.',
    A4: 'Tom A4: mais escuro. Vale avaliar o clareamento e, se preciso, lentes de porcelana.'
  };
  sws.forEach(function (s) {
    s.addEventListener('click', function () {
      sws.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      s.setAttribute('aria-pressed', 'true');
      fill.style.fill = s.dataset.c;
      out.innerHTML = '<strong>' + s.dataset.t + '</strong> · ' + msg[s.dataset.t].replace(/^Tom (atual )?[A-D]\d\.? ?:? ?/, '');
    });
  });

  var items = document.querySelectorAll('.sec h2,.idx li,.steps li,.team li,.rev li,.score,.hrs,.map,.sec-faq details,.final-t');
  items.forEach(function (el) { el.classList.add('rv'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('in'); }); }
})();
