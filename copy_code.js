// === Google Analytics 初始化 ===
(function() {
  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-4EJ3V5BG0Z";
  document.head.appendChild(gaScript);

  gaScript.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-4EJ3V5BG0Z', {
      cookie_domain: 'none'
    });
  };
})();

// === Cloudflare Web Analytics 初始化 ===
(function() {
  const cfScript = document.createElement("script");
  cfScript.defer = true;
  cfScript.src = "https://static.cloudflareinsights.com/beacon.min.js";
  cfScript.setAttribute("data-cf-beacon", '{"token": "19668562332a4a18914824d1dca86d07"}');
  document.head.appendChild(cfScript);
})();

// === DOM 載入後自動產生「複製按鈕」 ===
document.addEventListener("DOMContentLoaded", function() {
  const codeBlocks = document.querySelectorAll("pre");

  codeBlocks.forEach(block => {
    const copyButton = document.createElement("button");
    copyButton.innerText = "Copy";
    copyButton.className = "copy-button";

    copyButton.addEventListener("click", () => {
      const codeLines = block.innerText.split('\n');
      const codeWithoutLineNumbers = codeLines.map(line => {
        return line.replace(/^\s*\d+:\s/, '');
      }).join('\n');

      const codeWithoutSymbols = codeWithoutLineNumbers.replace(/│/g, ' ');

      navigator.clipboard.writeText(codeWithoutSymbols).then(() => {
        copyButton.innerText = "Copied!";
        setTimeout(() => {
          copyButton.innerText = "Copy";
        }, 2000);
      }).catch(err => {
        console.error('Could not copy text: ', err);
      });
    });

    const container = document.createElement("div");
    container.className = "code-container";
    block.parentNode.insertBefore(container, block);
    container.appendChild(block);
    container.appendChild(copyButton);
  });
});
