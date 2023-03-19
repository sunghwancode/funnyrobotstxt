//-------  data  -------
console.log(`total: ${data.length}`);
for (let i = 0; i < data.length; i++) {
    const element = document.createElement('a');
    element.id = `data_${i}`;
    element.setAttribute('href', `#data_${i}`);
    element.setAttribute('onclick', `window.parent.location.href="#data_${i}"`);

    let htmlString = `<div class="list">`;
    htmlString += `
    <div class="urlFlex">
        <div class="url">
            <img src="https://${data[i].link}/favicon.ico" style="background-color:white" width="16" height="16" loading="lazy" onerror="this.style='display: none;'">
            <div style="margin-left: 5px;">${data[i].link}</div>
        </div>
    </div>`;
    if (data[i].robot !== "") htmlString += `<br><div id="robots_${i}"><span class="robots"><b>robots.txt</b></span><br><br><div class="data">${convertSpace(data[i].robot)}</div></div><br><br>`;
    if (data[i].human !== "") htmlString += `<br><div id="humans_${i}"><span class="humans"><b>humans.txt</b></span><br><br><div class="data">${convertSpace(data[i].human)}</div></div><br><br>`;
    htmlString += `</div>`;
    element.innerHTML = htmlString;

    document.querySelector('#result').append(element);
}

function convertSpace(data) {
    return data.replaceAll(" ", "&nbsp;");
}


//-------  minimap  -------  https://github.com/conorbailey90/minimap
let minimap = document.createElement('div');
let minimapContent = document.createElement('iframe');
minimapContent.id = "iframe"
let scale = 0.1;
let realScale;


// lightmode button
let modeButton = document.createElement('button');
modeButton.id = 'modeButton';
modeButton.innerHTML = '☀️&nbsp&nbsp🔁&nbsp&nbsp🌙';
modeButton.onclick = function () {
    let result = document.querySelector('#result');
    let iframe = window.parent.document.querySelector('iframe');
    let iframeResult = iframe.contentWindow.document.querySelector('#result')

    if (!result.classList.contains('lightmode')) {
        result.classList.add('lightmode');
        iframeResult.classList.add('lightmode');
    } else {
        result.classList.remove('lightmode');
        iframeResult.classList.remove('lightmode');
    }
}

// top button
let topButton = document.createElement('button');
topButton.id = 'topButton';
topButton.innerHTML = '⬆&nbspTOP&nbsp⬆';
topButton.onclick = function () {
    window.parent.location.href = "#";
    let iframe = window.parent.document.querySelector('iframe');
    iframe.contentWindow.location.href = "#";
}


minimap.className = 'minimap__container';
minimapContent.className = 'minimap__content';
minimapContent.id = 'minimapContent';
minimap.append(minimapContent);
minimap.append(modeButton);
minimap.append(topButton);
document.body.appendChild(minimap);

let html = document.documentElement.outerHTML.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
let iframeDoc = minimapContent.contentWindow.document;
iframeDoc.open();
iframeDoc.write(html);
iframeDoc.close();


// remove url tags in iframe
let iframeSelector = document.querySelector('iframe#minimapContent');
let iframeElements = iframeSelector.contentWindow.document.body.querySelectorAll('#result > a');
for (let i = 0; i < iframeElements.length; i++) {
    iframeElements[i].setAttribute('href', '#none');
    iframeElements[i].querySelector('.list .url').remove();
}

// remove hover color in main document
document.getElementById("hover").innerHTML = "a{pointer-events: none;}";


function getDimensions() {
    let bodyWidth = document.body.clientWidth;
    minimap.style.width = '10%';
    realScale = minimap.clientWidth / bodyWidth;

    minimapContent.style.transform = `scale(${realScale})`;
    minimapContent.style.width = '1200px'; //`${(100 / realScale)}%`
    minimapContent.style.height = `${(100 / realScale)}%`
}

getDimensions()
window.addEventListener('resize', getDimensions)