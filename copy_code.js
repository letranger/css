document.addEventListener("DOMContentLoaded", function() {
    const codeBlocks = document.querySelectorAll("pre");

    codeBlocks.forEach(block => {
        const copyButton = document.createElement("button");
        copyButton.innerText = "Copy";
        copyButton.className = "copy-button";

        copyButton.addEventListener("click", () => {
            // 提取代碼並去除行號
            const codeLines = block.innerText.split('\n');
            const codeWithoutLineNumbers = codeLines.map(line => {
                return line.replace(/^\s*\d+:\s/, ''); // 去除行號及前導空白
            }).join('\n');

            // 將所有的 "│" 符號替換為空格
            const codeWithoutSymbols = codeWithoutLineNumbers.replace(/│/g, ' ');

            // 複製到剪貼簿
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
