fetch(`https://plo.vn/rss/thoi-su-1.rss`)
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  .then((data) => {
    const items = data.querySelectorAll("item");

    //list ld
    Array.from(items)
      .slice(0, 5)
      .map((el) => {
        const skList = document.querySelector(".article-list");
        const html = `
              <article class="article-item">
                <div class="thumb">
                  <a href="${el.querySelector("link").getAttribute("href")}"><img src="${el.querySelector("image").innerHTML}" alt="" /></a>
                </div>
                <div class="title">
                  <h5><a href="${el.querySelector("link").getAttribute("href")}"> ${el
          .querySelector("title")
          .innerHTML.replace("<![CDATA[", "")
          .replace("]]>", "")} </a></h5>
                </div>
              </article>
        `;

        skList.insertAdjacentHTML("beforeend", html);
      });
  });

fetch(`https://plo.vn/rss/video-25.rss`)
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  .then((data) => {
    const items = data.querySelectorAll("item");

    //list ld
    Array.from(items)
      .slice(0, 5)
      .map((el) => {
        const skList = document.querySelector(".article-list-video");
        const html = `
              <article class="article-item">
                <div class="thumb">
                  <a href="${el.querySelector("link").getAttribute("href")}"><img src="${el.querySelector("image").innerHTML}" alt="" /></a>
                </div>
                <div class="title">
                  <h5><a href="${el.querySelector("link").getAttribute("href")}"> ${el
          .querySelector("title")
          .innerHTML.replace("<![CDATA[", "")
          .replace("]]>", "")} </a></h5>
                </div>
              </article>
        `;

        skList.insertAdjacentHTML("beforeend", html);
      });
  });

fetch(`https://plo.vn/rss/thoi-su-1.rss`)
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  .then((data) => {
    const items = data.querySelectorAll("item");

    //list ld
    Array.from(items)
      .slice(5)
      .map((el) => {
        const skList = document.querySelector(".item-more");
        console.log(el.querySelector("description"));

        const htmlStrings = el.querySelector("description").innerHTML;

        var parser = new DOMParser();
        htmlStrings.forEach(function (htmlString) {
          var htmlDoc = parser.parseFromString(htmlString, "text/html");
          var pText = htmlDoc.querySelector("p").textContent;
          console.log(pText);
        });

        // var parser = new DOMParser();
        // var htmlDoc = parser.parseFromString(text, "text/html");
        // console.log(htmlDoc);
        // var pText = htmlDoc.querySelector("p").textContent;
        // console.log(pText);

        const html = `
        <article class="item">
                <div class="thumb">
                  <a href="${el.querySelector("link").getAttribute("href")}">
                    <img
                      src="${el.querySelector("image").innerHTML}"
                      alt="lorem"
                    />
                  </a>
                </div>
                <div class="des">
                  <h5 class="title">
                    <a href="${el.querySelector("link").getAttribute("href")}">${el
          .querySelector("title")
          .innerHTML.replace("<![CDATA[", "")
          .replace("]]>", "")} </a>
                  </h5>
                  <div class="sapo"></div>
                </div>
              </article>
        `;

        skList.insertAdjacentHTML("beforeend", html);
      });
  });
