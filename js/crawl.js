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
                  <div class="sapo">
                  ${el.querySelector("description").innerHTML.replace("<![CDATA[", "").replace("]]>", "")}
                  </div>
                </div>
              </article>
        `;

        skList.insertAdjacentHTML("beforeend", html);
      });
  });

//

fetch(`https://plo.vn/rss/thoi-su-1.rss`)
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  .then((data) => {
    const items = data.querySelectorAll("item");

    //list ld
    Array.from(items)
      .slice(5, 15)
      .map((el) => {
        const skList = document.querySelector(".timeline-news");
        const cdataContent = el.querySelector("description").innerHTML.replace("<![CDATA[", "").replace("]]>", "");
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(cdataContent, "text/html");
        const pTagsText = htmlDoc.querySelector("p").textContent;
        const html = `
        <article class="item">
                      <div class="thumb">
                      <a href="${el.querySelector("link").getAttribute("href")}"><img src="${el.querySelector("image").innerHTML}" alt="" /></a>
                      </div>
                      <div class="des">
                      <h5><a href="${el.querySelector("link").getAttribute("href")}"> ${el
          .querySelector("title")
          .innerHTML.replace("<![CDATA[", "")
          .replace("]]>", "")} </a></h5>
                        <div class="sapo">
                        ${pTagsText}
                        </div>
                      </div>
                    </article>
        `;

        skList.insertAdjacentHTML("beforeend", html);
      });
  });

//

fetch(`https://plo.vn/rss/thoi-su-2.rss`)
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  .then((data) => {
    const items = data.querySelectorAll("item");

    //list ld
    Array.from(items)
      .slice(0, 1)
      .map((el) => {
        const skList = document.querySelector(".box-chinhtri .box-left");
        const cdataContent = el.querySelector("description").innerHTML.replace("<![CDATA[", "").replace("]]>", "");
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(cdataContent, "text/html");
        const pTagsText = htmlDoc.querySelector("p").textContent;
        const html = `
        <div class="category-item">
        <article class="item">
        <div class="thumb">
        <a href="${el.querySelector("link").getAttribute("href")}"><img src="${el.querySelector("image").innerHTML}" alt="" /></a>
        </div>
          <div class="des">
          <h5><a href="${el.querySelector("link").getAttribute("href")}"> ${el
          .querySelector("title")
          .innerHTML.replace("<![CDATA[", "")
          .replace("]]>", "")} </a></h5>
            <div class="sapo">
              <a href=""
                >${pTagsText}</a
              >
            </div>
          </div>
        </article>
      </div>
        `;

        skList.insertAdjacentHTML("beforeend", html);
      });
    //
    Array.from(items)
      .slice(1, 6)
      .map((el) => {
        const skList = document.querySelector(".box-chinhtri .box-right");
        const html1 = `
        <div class="category-item">
                        <article class="item">
                        <div class="thumb">
                        <a href="${el.querySelector("link").getAttribute("href")}"><img src="${el.querySelector("image").innerHTML}" alt="" /></a>
                        </div>
                          <div class="des">
                          <h5><a href="${el.querySelector("link").getAttribute("href")}"> ${el
          .querySelector("title")
          .innerHTML.replace("<![CDATA[", "")
          .replace("]]>", "")} </a></h5>
                          </div>
                         
                        </article>
                      </div>
        `;

        skList.insertAdjacentHTML("beforeend", html1);
      });
  });
//

fetch(`https://plo.vn/rss/thoi-su-4.rss`)
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  .then((data) => {
    const items = data.querySelectorAll("item");

    //list ld
    Array.from(items)
      .slice(0, 1)
      .map((el) => {
        const skList = document.querySelector(".box-thoiluan .box-left");
        const cdataContent = el.querySelector("description").innerHTML.replace("<![CDATA[", "").replace("]]>", "");
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(cdataContent, "text/html");
        const pTagsText = htmlDoc.querySelector("p").textContent;
        const html = `
        <div class="category-item">
        <article class="item">
        <div class="thumb">
        <a href="${el.querySelector("link").getAttribute("href")}"><img src="${el.querySelector("image").innerHTML}" alt="" /></a>
        </div>
          <div class="des">
          <h5><a href="${el.querySelector("link").getAttribute("href")}"> ${el
          .querySelector("title")
          .innerHTML.replace("<![CDATA[", "")
          .replace("]]>", "")} </a></h5>
            <div class="sapo">
              <a href=""
                >${pTagsText}</a
              >
            </div>
          </div>
        </article>
      </div>
        `;

        skList.insertAdjacentHTML("beforeend", html);
      });
    //
    Array.from(items)
      .slice(1, 6)
      .map((el) => {
        const skList = document.querySelector(".box-thoiluan .box-right");
        const html1 = `
        <div class="category-item">
                        <article class="item">
                        <div class="thumb">
                        <a href="${el.querySelector("link").getAttribute("href")}"><img src="${el.querySelector("image").innerHTML}" alt="" /></a>
                        </div>
                          <div class="des">
                          <h5><a href="${el.querySelector("link").getAttribute("href")}"> ${el
          .querySelector("title")
          .innerHTML.replace("<![CDATA[", "")
          .replace("]]>", "")} </a></h5>
                          </div>
                     
                        </article>
                      </div>
        `;

        skList.insertAdjacentHTML("beforeend", html1);
      });
  });

//
function getTextFromCDATA(cdataContent) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(cdataContent, "text/xml");
  const pElement = xmlDoc.querySelector("p");
  return pElement ? pElement.textContent : "";
}

// Sử dụng hàm này với CDATA content của bạn
const cdataContent = "CDATA content";
const textFromP = getTextFromCDATA(cdataContent);

//
fetch(`https://plo.vn/rss/thoi-su-23.rss`)
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  .then((data) => {
    const items = data.querySelectorAll("item");

    //list ld
    Array.from(items)
      .slice(0, 1)
      .map((el) => {
        const skList = document.querySelector(".box-anninhtrattu .box-left");
        const cdataContent = el.querySelector("description").innerHTML.replace("<![CDATA[", "").replace("]]>", "");
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(cdataContent, "text/html");
        const pTagsText = htmlDoc.querySelector("p").textContent;
        const html = `
        <div class="category-item">
        <article class="item">
        <div class="thumb">
        <a href="${el.querySelector("link").getAttribute("href")}"><img src="${el.querySelector("image").innerHTML}" alt="" /></a>
        </div>
          <div class="des">
          <h5><a href="${el.querySelector("link").getAttribute("href")}"> ${el
          .querySelector("title")
          .innerHTML.replace("<![CDATA[", "")
          .replace("]]>", "")} </a></h5>
            <div class="sapo">
              <a href=""
                >${pTagsText}</a
              >
            </div>
          </div>
        </article>
      </div>
        `;

        skList.insertAdjacentHTML("beforeend", html);
      });
    //
    Array.from(items)
      .slice(1, 6)
      .map((el) => {
        const skList = document.querySelector(".box-anninhtrattu .box-right");
        const html1 = `
        <div class="category-item">
                        <article class="item">
                        <div class="thumb">
                        <a href="${el.querySelector("link").getAttribute("href")}"><img src="${el.querySelector("image").innerHTML}" alt="" /></a>
                        </div>
                          <div class="des">
                          <h5><a href="${el.querySelector("link").getAttribute("href")}"> ${el
          .querySelector("title")
          .innerHTML.replace("<![CDATA[", "")
          .replace("]]>", "")} </a></h5>
                          </div>
                        <p>${textFromP}</p>
                        </article>
                      </div>
        `;

        skList.insertAdjacentHTML("beforeend", html1);
      });
  });
