const cardData = [
    {
        imageUrl: "https://s3-alpha-sig.figma.com/img/030c/386e/bb08408dccd15d453b12bfba31643322?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRHES27CgY1CXkY~rp~PdCoW~xY1~lPuEn-30deF87bm5fyDNNjA4yGzkQPLMRrCMuYl5ieT0e5Z4noIN~H44Pxu4EwXny0XHZgFr0Oe7bqoDQA6RgPR2Ik8NzDODBh16Mb~CwrhJC7nLcXdOHBvcU6de3Pm6yBzQSwpahPQmfUjXrFTg1diFl7rQ-gav7wDm5DtbU-fr4Lc1IR-1Nk4tkiktHqm6ii8sA1c13U7lC0o8Bt40YIAJuBBt8bXkhleuOmFoxEbU8bmkubZWoqe-xC7A-4LBqhTpvNrIbe6F4SKIRfryREol-OlFBMBXMq~i4WiHUC5GN6bWOsrMtwLKA__",
        brandName: "KORZINKA.UZ",
        description: "В четверг скидки на рыбу",
        discount: "Скидки",
        cashback: "Кешбэк",
        percentage: "3%",
        brandType: "Супермаркеты"
    },
    {
        imageUrl: "https://s3-alpha-sig.figma.com/img/bc2b/3ee7/d9c0042b7fe04ccbaabad0afdb0d2cac?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iM9s1Hn~rrQASDgHJ1kolk4-EC3wvPhld3Dw5j~YclEDP8-hF528rxidFCRCB3YHafmWQp1jyjapZ7NpM8cudndhnp8zOpzBcPYCAk1Dd3qkGt9hBHqxVVHIwadFqUBIdCJ272984nDxf5~04eCF4BIr-1Y~8VgNBSrrnLAnjtCLy8LU~ZdVhXN6E7pPkO1f-j6Y~MvkzfU2hFWqAmLzuPFdooUMFuUNKOQ9Wm~aw0zPDxkCED~1d648NHeqJEquhIMeS--SHIJi9eB4rJWT1cF~H7bJ1JlAQv5a1~ZTBl3TvAp4nSUy4zVcrgM7hzY9df6wWFSS43EMPY4rYf7gaw__",
        brandName: "MANGO",
        description: "Акция 1+1",
        discount: "Акции",
        cashback: "Кешбэк",
        percentage: "3%",
        brandType: "Магазины брендовой одежды"
    },
    {
        imageUrl: "https://s3-alpha-sig.figma.com/img/017b/088b/62a97a0b7a069f03e71d1f455b43ab34?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I7LlDQm3VZ8Mb1Hoe-lPedEgcYphrmh7~4VNm73~NP5sj7BNI2QcSkzNCirCZdSsrHrsj0hIxwTGynmTOWL4TyH-hfhBZD~TPG3yp1v9yFr13S2PrLBDS8H7P1uaaxhAh9sTaVzrMTLGeaxyiznnatZeDapjtc9PRsap9OIojqzrTmSXLDko8bC3b5t71AqKdDB6NN83aM~3u7DLEetSwMKnBsIlFXHMlJSZ-S4S4irkLyXS~od3ffOyTtMHhtVHmF0DIfI90lNO6hgDAo6EpvYW99~UZCslL3V1Ml7z~232DKMw11E7hKzosyA~hNd6xqQfeCHNPqpi~Fbbj6rK-Q__",
        brandName: "TEXNOMART",
        description: "До — 60% на бытовую технику в ТЦ «Samarkand Darvoza»",
        discount: "Скидки",
        cashback: "Кешбэк",
        percentage: "3%",
        brandType: "Магазины электроники и бытовой техники"
    },
    {
        imageUrl: "https://s3-alpha-sig.figma.com/img/ca1d/ce29/847d4e647a3347731e6c4bba9b9744aa?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=emZ2Mqh0QK7B9aDTazy0TRXTMSWo5xbunhXp-7aEEmRcwLE~rOSegkLFBDPrDn2LdLvj3tc7q6rdqrYdZuVqc~xtqxCuTeZHT0F-xFuCxNZxSnPYHNE-c7Qw2UME-gFZGQxrjNduR8kMGEcPwNyylS0AkFy1hFfG9uX6wb-zjlWHRoLQMfjEVGxhC7pr4WWEKoN37AMEGmmXyZ7-ellXp0yyqmhgJ0DBlz4UxdrgLqzWj1f3yLB9znlanrOfs-QfYybojwui0GSVB9ANiFE~QDNmQzyfxZMP2FleUICGeJxiehSgIPFZ0Kh8Sstkqk35aiy8xQWPlVghOkw0Dz3sqg__",
        brandName: "Makro",
        description: "При покупке CIF пачка губок Salixan БЕСПЛАТНО",
        discount: "Акции",
        cashback: "Кешбэк",
        percentage: "3%",
        brandType: "Супермаркеты"
    }
];
// Cardbox
const cardBox = document.querySelector('.card-box');

cardData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    cardElement.innerHTML = `
      <section class="card-image">
        <img src="${card.imageUrl}" alt="${card.brandName}">
      </section>
      <div class="card-info">
        <h4 class="brend-name">${card.brandName}</h4>
        <h4 class="description">${card.description}</h4>
        <div class="discount">
          <p>${card.discount}</p>
          <div class="cashback">
            <div class="cashback-btn">${card.cashback}</div>
            <div class="cashback-percentage">${card.percentage}</div>
          </div>
        </div>
        <p class="brend-type">${card.brandType}</p>
      </div>
    `;

    cardBox.appendChild(cardElement);
});


// Carousel

const carousel = document.querySelector(".carousel");
let carouselItems = document.querySelector(".carousel__item");
const [btnLeftCarousel, btnRightCarousel] = document.querySelectorAll(".carousel-button");
let carouselCount = carouselItems.length;
let value = 0
btnLeftCarousel.addEventListener("click", () => {
    value += 300
    carouselItems.style.transform = `translateX(${value}px)`;
    carouselItems.style.opacity = '1';
});

btnRightCarousel.addEventListener("click", () => {
    value += -300
    carouselItems.style.transform = `translateX(${value}px)`;
    carouselItems.style.opacity = '1';
});

// accordion

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
    item.querySelector('.accordion-header').addEventListener("click", () => {
        const isItemOpen = item.classList.contains("open");
        accordionItems.forEach(i => {
            i.classList.remove("open");
            i.querySelector('.accordion-content').style.display = 'none';
        });
        if (!isItemOpen) {
            item.classList.add("open");
            item.querySelector('.accordion-content').style.display = 'block';
        }
    });
});


// Menu
document.getElementById('hamburger').addEventListener('click', function () {
    const mobileMenu = document.querySelector('.menu-items-mobile');
    mobileMenu.classList.toggle('show');
    mobileMenu.classList.toggle('none');
    this.classList.toggle('active');
});
