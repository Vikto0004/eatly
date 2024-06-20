// --- Анімація для секції Purchases --- //

const section = document.querySelector('.js-purchases');
const dividerMoney = document.querySelector('.divider-money');
const dividerWallet = document.querySelector('.divider-wallet');

let switchPurchasesAnimation = true;

const animationPurchases = () => {
  const elPurchasesOneNumber = document.querySelector(
    '.js-purchases-one-number'
  );
  const elPurchasesTwoNumber = document.querySelector(
    '.js-purchases-two-number'
  );

  let OneNumber = 0;
  function updateOneNumber() {
    OneNumber += 20.4;
    elPurchasesOneNumber.textContent = '$' + OneNumber.toFixed(2);
    if (OneNumber < 410) {
      setTimeout(updateOneNumber, 200);
    }
  }

  let TwoNumber = 0;
  function updateTwoNumber() {
    TwoNumber += 2.4;
    elPurchasesTwoNumber.textContent = '$' + TwoNumber.toFixed(2);
    if (TwoNumber < 45) {
      setTimeout(updateTwoNumber, 200);
    }
  }

  const sectionPosition = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionPosition < windowHeight / 2 && switchPurchasesAnimation) {
    switchPurchasesAnimation = false;
    dividerMoney.style.animation = 'dividerMoney 4s linear forwards';
    dividerWallet.style.animation = 'dividerWallet 4s linear forwards';

    updateOneNumber();
    updateTwoNumber();
  }
};

window.addEventListener('scroll', animationPurchases);
