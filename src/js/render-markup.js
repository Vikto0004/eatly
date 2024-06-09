'use strict';

export const latestArticlesItems = dataArray => {
  const markup = dataArray.map(({ author, images, publishedAt, title }) => {
    return `<li class="latest-articles-item">
        <picture>
          <source
            srcset="
              ${images.desktop['1x']} 1x,
              ${images.desktop['2x']} 2x
            "
            media="(min-width: 1440px)"
          />
          <source
            srcset="
              ${images.tablet['1x']} 1x,
              ${images.tablet['2x']} 2x
            "
            media="(min-width: 1024px)"
          />
          <source
            srcset="
              ${images.mobil['1x']} 1x,
              ${images.mobil['2x']} 2x
            "
            media="(max-width: 1023px)"
          />
          <img
            class="latest-articles-img"
            src="${images.desktop['1x']}" 
            alt="latest articles img"
          />
        </picture>
        <h3 class="latest-articles-questions">${title}</h3>
        <div class="latest-articles-wrap">
          <img
            srcset="
              ${images.avatar['1x']} 1x,
              ${images.avatar['2x']} 2x
            "
            alt="user"
            width="30px"
            height="30px"
          />
          <div>
            <p class="latest-articles-written">Written By</p>
            <p class="latest-articles-autor">${author}</p>
          </div>
          <p class="latest-articles-date">${publishedAt}</p>
        </div>
      </li>`;
  });
  return markup.join('');
};
