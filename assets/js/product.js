const productDetailsTabs = document.querySelectorAll('.product-details__tabs');

productDetailsTabs.forEach((productDetailsTabsEl) => {
  productDetailsTabsEl.addEventListener('click', (event) => {
    const isTabButton = event.target.classList.contains('product-details__tabs-controls-button');

    if (isTabButton) {
      const targetName = event.target.dataset.target;
      const targetTab = productDetailsTabsEl.querySelector(
        `.product-details__tabs-list-item[data-name="${targetName}"]`
      );

      if (targetTab) {
        const tabListItems = productDetailsTabsEl.querySelectorAll(
          '.product-details__tabs-list-item'
        );
        const tabButtons = productDetailsTabsEl.querySelectorAll(
          '.product-details__tabs-controls-button'
        );

        tabListItems.forEach((tab) => {
          if (tab === targetTab) tab.classList.add('active');
          if (tab !== targetTab) tab.classList.remove('active');
        });

        tabButtons.forEach((button) => {
          if (button === event.target) button.classList.add('active');
          if (button !== event.target) button.classList.remove('active');
        });
      }
    }
  });
});


const productDetailsSubTabs = document.querySelectorAll('.product-details__tabs');

productDetailsSubTabs.forEach((productDetailsSubTabsEl) => {
  productDetailsSubTabsEl.addEventListener('click', (event) => {
    const isTabButton = event.target.classList.contains('product-details__subtabs-controls-button');

    if (isTabButton) {
      const targetName = event.target.dataset.target;
      const targetTab = productDetailsSubTabsEl.querySelector(
        `.product-details__subtabs-list-item[data-name="${targetName}"]`
      );

      if (targetTab) {
        const tabListItems = productDetailsSubTabsEl.querySelectorAll(
          '.product-details__subtabs-list-item'
        );
        const tabButtons = productDetailsSubTabsEl.querySelectorAll(
          '.product-details__subtabs-controls-button'
        );

        tabListItems.forEach((tab) => {
          if (tab === targetTab) tab.classList.add('active');
          if (tab !== targetTab) tab.classList.remove('active');
        });

        tabButtons.forEach((button) => {
          if (button === event.target) button.classList.add('active');
          if (button !== event.target) button.classList.remove('active');
        });
      }
    }
  });
});