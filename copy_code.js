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

            navigator.clipboard.writeText(codeWithoutLineNumbers).then(() => {
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
