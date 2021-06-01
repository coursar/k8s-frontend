(async () => {
  // DOM API - Document Object Model
  // всего лишь часть WEB API
  const buttonEl = document.createElement('button');
  const fileEl = document.createElement('input');
  fileEl.type = 'file';

  // "8" == 8 - true
  // "8" === 8 - false
  if (location.pathname === '/page1') {
    buttonEl.textContent = 'Page 1';
  } else {
    buttonEl.textContent = 'Root';
  }

  // event handling
  buttonEl.addEventListener('click', () => {
    // navigation graph
  });

  fileEl.addEventListener('change', async evt => {
    const file = evt.target.files[0];
    const blob = file.slice(0, 1024);

    await fetch('http://localhost:9999', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream',
      },
      blob,
    });
    evt.target.value = '';
  });

  const body = document.body;
  body.appendChild(buttonEl);
  body.appendChild(fileEl);

  // Storage
  localStorage.setItem('token', 'value');

  /*
  document.addEventListener('mousemove', evt => {
    console.log(evt);
  });
  */

  // XHR/fetch -> HTTP(S)
  // WebSocket -> message (JSON.stringify())
  // SSE -> Server Sent Events (client <- backend)
  // RTC -> ... Zoom

  // Polling - клиент постоянно спрашивает
  // Long Polling

  /*
  let lastId = 0;
  setInterval(() => {
    const idCall = ++lastId;

    const a1 = fetch('http://localhost:9999')
      .then(resp => {
        if (!resp.ok) { // status >= 200 || status <= 299
          throw new Error(resp.statusText);
        }
        return resp.text(); // future/promise
      }).then(body => {
      if (lastId === idCall) {
        console.log(body);
      }
    }).catch(e => {

    });
    const a2 = fetch('http://localhost:9999')
      .then(resp => {
        if (!resp.ok) { // status >= 200 || status <= 299
          throw new Error(resp.statusText);
        }
        return resp.text(); // future/promise
      }).then(body => {
        if (lastId === idCall) {
          console.log(body);
        }
      }).catch(e => {

      })
    ;
    // Promise.all(a1, a2); // ожидаем все, либо первый ошибочный
    // Promise.any(a1, a2); // ожидаем хоть один успешный
    Promise.allSettled(a1, a2);
  }, 10000);
  */

  const makeRequest = async url => {
    // non-blocking
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('bad status code');
    }
    return await response.text();
  };

  const all = await Promise.allSettled([
    makeRequest('http://localhost:9999'),
    makeRequest('http://localhost:9999'),
    makeRequest('http://localhost:9999'),
    makeRequest('http://localhost:9999'),
    makeRequest('http://localhost:9999'),
    makeRequest('http://localhost:9999'),
    makeRequest('http://localhost:9999'),
    makeRequest('http://localhost:9999'),
    makeRequest('http://localhost:9999'),
    makeRequest('http://localhost:9999'),
  ]);
  console.log(all);


  /*
  IO/Network/SQL -> Functional
  const failed = all
    .filter(o => o.status === "rejected")
    .map(o => makeRequest())
  */

})() // IIFE -> immediately invoked function expression
