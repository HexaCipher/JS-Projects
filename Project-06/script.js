let rest_time = document.getElementById("result");
setInterval(() => {
    

    const currentTime = Date.now();
    const olympicTime = new Date(2028, 6, 14).getTime();

    let timer = olympicTime - currentTime;

    let day = Math.floor((timer) / (1000 * 60 * 60 * 24));
    timer %= (1000 * 60 * 60 * 24);

    let hr = Math.floor((timer) / (1000 * 60 * 60));
    timer %= (1000 * 60 * 60);

    let min = Math.floor((timer) / (1000 * 60));
    timer %= (1000 * 60);

    let sec = Math.floor(timer / 1000);

    rest_time.textContent = `${day} day : ${hr} hr : ${min} minute : ${sec} sec`;

}, 1000)

