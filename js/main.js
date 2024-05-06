document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname === "/") {
    window.location.href = "/index.html";
  }
  //
  let arr = [];
  //
  const createProfileCard = (profile) => {
    const card = document.createElement("div");
    card.className = "box-item";
    card.innerHTML = `<img src="${profile.anh}" alt="Profile Image">
              <div class="item-title">
              <h5 class="card-title">${profile.hoten}</h5>
              <p class="card-text">${profile.chucvu}</p>
              </div>`;
    card.addEventListener("click", () => showProfileDetails(profile));
    return card;
  };
  //
  const filterProfilesByType = (profiles, type) => {
    return profiles.filter((profile) => {
      if (type === "chinhtrigia") {
        return profile.chinhtrigia === true;
      } else if (type === "daibieuquochoi") {
        return profile.daibieuquochoi === true;
      } else if (type === "uyvientrunguong") {
        return profile.uyvientrunguong === true;
      }
      return false;
    });
  };
  //
  const renderHome = (data) => {
    const profilesContainerChinhTrigia = document.getElementById("chinhtrigia-list");
    const profilesContainerDaiBieuQuocHoi = document.querySelector("#daibieuquochoi-list");

    const profilesContainerUyVienTrungUong = document.querySelector("#uyvientrunguong-list");

    const chinhTrigiaProfiles = filterProfilesByType(data, "chinhtrigia");
    const daiBieuQuocHoiProfiles = filterProfilesByType(data, "daibieuquochoi");
    const uyVienTrungUongProfiles = filterProfilesByType(data, "uyvientrunguong");

    const dataChinhTriGia = chinhTrigiaProfiles.slice(0, 9);
    const dataDaiBieuQuocHoi = daiBieuQuocHoiProfiles.slice(0, 9);
    const dataUyVienTrungUong = uyVienTrungUongProfiles.slice(0, 9);

    dataDaiBieuQuocHoi.forEach((profile) => profilesContainerDaiBieuQuocHoi.appendChild(createProfileCard(profile)));
    dataChinhTriGia.forEach((profile) => profilesContainerChinhTrigia.appendChild(createProfileCard(profile)));
    dataUyVienTrungUong.forEach((profile) => profilesContainerUyVienTrungUong.appendChild(createProfileCard(profile)));
  };

  //
  const showProfileDetails = (profile) => {
    const hosoUrl = `hoso.html?hoten=${encodeURIComponent(profile.hoten)}&chucvu=${encodeURIComponent(profile.chucvu)}`;
    window.location.href = hosoUrl;
  };
  //
  const renderChinhTriGia = (data) => {
    const pageChinhTriGia = document.querySelector("#pageChinhtrigia");
    const chinhTrigiaProfiles = filterProfilesByType(data, "chinhtrigia");
    chinhTrigiaProfiles.forEach((profile) => pageChinhTriGia.appendChild(createProfileCard(profile)));
  };
  //
  const renderDaibieuquochoi = (data) => {
    const pageDaibieuquochoi = document.querySelector("#pageDaibieuquochoi");
    const daiBieuQuocHoiProfiles = filterProfilesByType(data, "daibieuquochoi");
    daiBieuQuocHoiProfiles.forEach((profile) => pageDaibieuquochoi.appendChild(createProfileCard(profile)));
  };
  //

  const renderUyvientrunguong = (data) => {
    const pageUyvienchinthuc = document.querySelector("#pageUyvienchinhthuc");
    const pageUyviendukhuyet = document.querySelector("#pageUyviendukhuyet");
    const uyVienTrungUongProfiles = filterProfilesByType(data, "uyvientrunguong");

    const dataUyVienChinhThuc = uyVienTrungUongProfiles.filter((item) => item.tinhtrang == "Chính thức");
    const dataUyVienDuKhuyet = uyVienTrungUongProfiles.filter((item) => item.tinhtrang == "Dự khuyết");

    dataUyVienChinhThuc.forEach((profile) => pageUyvienchinthuc.appendChild(createProfileCard(profile)));
    dataUyVienDuKhuyet.forEach((profile) => pageUyviendukhuyet.appendChild(createProfileCard(profile)));
  };

  //

  const itemsPerPage = 6; // số lượng mục trên mỗi trang
  let currentPage = 1; // Trang hiện tại

  const displayPageChinhTriGia = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const dataChinhTriGia = filterProfilesByType(data, "chinhtrigia");
    const sliceData = dataChinhTriGia.slice(startIndex, endIndex);

    const containerPage = document.querySelector("#pageChinhtrigia");
    containerPage.innerHTML = ""; // xóa nội dung

    sliceData.forEach((profile) => {
      const card = createProfileCard(profile);
      containerPage.appendChild(card);
    });

    const totalPages = Math.ceil(dataChinhTriGia.length / itemsPerPage);
    addPagination(totalPages);
  };

  const addPagination = (totalPages) => {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      pageButton.addEventListener("click", () => {
        currentPage = i;
        fetchData();
      });
      paginationContainer.appendChild(pageButton);
    }
  };

  //
  const addPaginationChinhThuc = (totalPages) => {
    const paginationContainer = document.getElementById("pagination-chinhthuc");
    paginationContainer.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      pageButton.addEventListener("click", () => {
        currentPage = i;
        fetchData();
      });
      paginationContainer.appendChild(pageButton);
    }
  };
  //
  const addPaginationDuKhuyet = (totalPages) => {
    const paginationContainer = document.getElementById("pagination-dukhuyet");
    paginationContainer.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      pageButton.addEventListener("click", () => {
        currentPage = i;
        fetchData();
      });
      paginationContainer.appendChild(pageButton);
    }
  };
  //
  const displayPageDaiBieuQuocHoi = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const dataDaiBieuQuocHoi = filterProfilesByType(data, "daibieuquochoi");

    const sliceData = dataDaiBieuQuocHoi.slice(startIndex, endIndex);

    const containerPage = document.querySelector("#pageDaibieuquochoi");
    containerPage.innerHTML = ""; // xóa nội dung

    sliceData.forEach((profile) => {
      const card = createProfileCard(profile);
      containerPage.appendChild(card);
    });

    const totalPages = Math.ceil(dataDaiBieuQuocHoi.length / itemsPerPage);
    addPagination(totalPages);
  };
  //

  const displayPageUyvienTrunguong = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const dataUyVien = filterProfilesByType(data, "uyvientrunguong");

    const dataUyVienChinhThuc = dataUyVien.filter((item) => item.tinhtrang == "Chính thức");
    const dataUyVienDukhuyet = dataUyVien.filter((item) => item.tinhtrang == "Dự khuyết");
    const sliceDataChinhThuc = dataUyVienChinhThuc.slice(startIndex, endIndex);
    const sliceDataDuKhuyet = dataUyVienDukhuyet.slice(startIndex, endIndex);

    const containerPageCT = document.querySelector("#pageUyvienchinhthuc");
    containerPageCT.innerHTML = "";

    const containerPageDK = document.querySelector("#pageUyviendukhuyet");
    containerPageDK.innerHTML = "";

    sliceDataChinhThuc.forEach((profile) => {
      const cardChinhThuc = createProfileCard(profile);
      containerPageCT.appendChild(cardChinhThuc);
    });

    sliceDataDuKhuyet.forEach((profile) => {
      const cardDuKhuyet = createProfileCard(profile);
      containerPageDK.appendChild(cardDuKhuyet);
    });

    //
    const totalPages = Math.ceil(dataUyVienChinhThuc.length / itemsPerPage);
    addPaginationChinhThuc(totalPages);

    const totalPagesDK = Math.ceil(dataUyVienDukhuyet.length / itemsPerPage);
    addPaginationDuKhuyet(totalPagesDK);
  };

  //

  const searchProfiles = (searchTerm) => {
    console.log("timkiem", searchTerm);
    const searchResults = arr.filter((profile) => {
      return profile.hoten.toLowerCase().includes(searchTerm.toLowerCase()) || profile.chucvu.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return searchResults;
  };

  //
  const showSearchResults = (results) => {
    const searchResultsContainer = document.querySelector("#search-results");
    searchResultsContainer.innerHTML = ""; // Xóa kết quả cũ

    if (results.length === 0) {
      searchResultsContainer.innerHTML = "<div>Không tìm thấy kết quả nào.</div>";
      return;
    }

    results.forEach((profile) => {
      console.log("lỗi", profile);
      searchResultsContainer.appendChild(createProfileCard(profile));
      // const profileCard = createProfileCard(profile)
      // searchResultsContainer.appendChild(profileCard)
    });
  };

  // //
  const searchButton = document.getElementById("search-button");
  if (searchButton) {
    searchButton.addEventListener("click", () => {
      const searchTerm = document.getElementById("search-input").value;

      console.log("text", searchTerm);
      const searchResults = searchProfiles(searchTerm);
      showSearchResults(searchResults);

      console.log("ketqua", showSearchResults(searchResults));

      document.querySelector(".wrap-profile").style.display = "none";
    });
  }

  function fetchData() {
    fetch("./data/thongtin.json")
      .then((res) => res.json())
      .then((data) => {
        arr = data;
        //
        if (window.location.pathname.endsWith("index.html")) {
          renderHome(data);
        } else if (window.location.pathname.endsWith("uyvientrunguong.html")) {
          renderUyvientrunguong(data);
          displayPageUyvienTrunguong(data);

          // Thêm nút phân trang
        } else if (window.location.pathname.endsWith("daibieuquochoi.html")) {
          renderDaibieuquochoi(data);
          displayPageDaiBieuQuocHoi(data);
        } else if (window.location.pathname.endsWith("chinhtrigia.html")) {
          renderChinhTriGia(data);
          displayPageChinhTriGia(data);
        }
        //
        const urlParams = new URLSearchParams(window.location.search);
        const hoten = urlParams.get("hoten");
        const chucvu = urlParams.get("chucvu");
        const profile = data.find((item) => item.hoten === hoten && item.chucvu === chucvu);
        if (profile) {
          const profileContent = document.querySelector(".box-profile-details");
          profileContent.querySelector(".breadcrumb-item.active").textContent = profile.hoten;
          profileContent.querySelector(".profile-image").src = profile.anh;
          profileContent.querySelector(".profile-name").textContent = profile.hoten;
          profileContent.querySelector(".profile-position").textContent = profile.chucvu;
          profileContent.querySelector(".profile-birthdate").innerHTML = `
          <i class="fa fa-birthday-cake" aria-hidden="true"></i>
          ${profile.thongtincanhan.ngaysinh}
               `;
          profileContent.querySelector(".profile-hometown").innerHTML = `<i class="fa fa-location-arrow" aria-hidden="true"></i>
          ${profile.thongtincanhan.quequan}`;
          profileContent.querySelector(".profile-education").innerHTML = `<i class="fa fa-graduation-cap" aria-hidden="true"></i>
          ${profile.thongtincanhan.hocvi}`;

          //
          const workHistoryList = profileContent.querySelector(".profile-work-history");
          profile.quatrinhcongtac.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.className = "timeline-item mb-5";
            listItem.innerHTML = `
                         <h5 class="fw-bold">${item.thoigian}</h5>
                         <p class="text-muted">${item.noicongtac}</p>
                     `;
            workHistoryList.appendChild(listItem);
          });
          const carouseInner = document.getElementById("carousel-inner");
          if (profile.sliderImages) {
            profile.sliderImages.forEach((item, index) => {
              const carouseItem = document.createElement("div");
              carouseItem.className = "carousel-item";
              if (index === 0) {
                carouseItem.classList.add("active");
              }
              const imgElement = document.createElement("img");
              imgElement.src = item.imageUrl;
              imgElement.className = "d-block w-100";
              imgElement.alt = item.caption;
              carouseItem.appendChild(imgElement);
              carouseInner.appendChild(carouseItem);
            });
          }
        }
      });
  }
  window.onload = fetchData;
});
