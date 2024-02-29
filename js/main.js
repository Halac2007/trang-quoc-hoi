document.addEventListener("DOMContentLoaded", function () {
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
    const profilesContainerChinhTrigia = document.querySelector("#chinhtrigia-list");
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
    const pageUyvientrunguong = document.querySelector("#pageUyvientrunguong");
    const uyVienTrungUongProfiles = filterProfilesByType(data, "uyvientrunguong");
    uyVienTrungUongProfiles.forEach((profile) => {
      pageUyvientrunguong.appendChild(createProfileCard(profile));
    });
  };

  function fetchData() {
    fetch("../data/thongtin.json")
      .then((res) => res.json())
      .then((data) => {
        //
        if (window.location.pathname.endsWith("index.html")) {
          console.log("testurrl", window.location.pathname.endsWith("index.html"));
          renderHome(data);
        } else if (window.location.pathname.endsWith("uyvientrunguong.html")) {
          renderUyvientrunguong(data);

          // Thêm nút phân trang
        } else if (window.location.pathname.endsWith("daibieuquochoi.html")) {
          renderDaibieuquochoi(data);
        } else if (window.location.pathname.endsWith("chinhtrigia.html")) {
          renderChinhTriGia(data);
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
               <i class="far fa-calendar">${profile.thongtincanhan.ngaysinh}</i> 
               `;
          profileContent.querySelector(".profile-hometown").innerHTML = `<i class="fas fa-location-arrow">${profile.thongtincanhan.quequan}</i>`;
          profileContent.querySelector(".profile-education").innerHTML = `<i class="fas fa-user-graduate">${profile.thongtincanhan.hocvi}</i> `;
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
              console.log(item.images + "bemai");
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
