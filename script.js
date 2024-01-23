"use strict";
const BTNS_COUNT = 6;
const oddBtnsPromises = [];
const evenBtnsPromises = [];

const wrapper = document.querySelector(".wrapper");

for (let i = 0; i < BTNS_COUNT; i++) {
  const btn = document.createElement("button");
  btn.className = "button";
  btn.textContent = i + 1;
  wrapper.append(btn);
  if ((i + 1) % 2 === 0) {
    evenBtnsPromises.push(
      new Promise(resolve => (btn.onclick = () => resolve("shadow")))
      .then(shadowClass => {
          btn.classList.add(shadowClass);
          btn.onclick = null;
        }
      )
    );
  } else {
    oddBtnsPromises.push(
      new Promise(resolve => (btn.onclick = () => resolve("shadow")))
      .then(shadowClass => {
          btn.classList.add(shadowClass);
          btn.onclick = null;
        }
      )
    )
  }
}

Promise.all(oddBtnsPromises).then(() =>
  setTimeout(alert, 1, "All odd buttons checked")
); // без цього остання натиснута кнопка не встигає обрести тінь

Promise.all(evenBtnsPromises).then(() =>
  setTimeout(alert, 1, "All even buttons checked")
);

Promise.all([...oddBtnsPromises, ...evenBtnsPromises]).then(() =>
  setTimeout(alert, 1, "All buttons checked")
);
