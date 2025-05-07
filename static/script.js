document.getElementById('shorten-button').addEventListener('click', shortenLink);
document.getElementById('copy-button').addEventListener('click', copyToClipboard);

function shortenLink() {
    const urlInput = document.getElementById('url-input');
    const url = urlInput.value.trim();
    const errorMessage = document.getElementById('error-message');
    const shortenedUrlDiv = document.getElementById('shortened-url');
    const copyButton = document.getElementById('copy-button');

    // Clear previous messages
    errorMessage.style.display = 'none';
    shortenedUrlDiv.innerHTML = '';
    copyButton.style.display = 'none';

    if (!url) {
        errorMessage.innerText = 'Please enter a valid URL.';
        errorMessage.style.display = 'block';
        return;
    }

    // Call the shortening API
    fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`)
        .then(response => response.json())
        .then(data => {
            const shortenedUrl = data.result.short_link;
            shortenedUrlDiv.innerHTML = `Shortened URL: <a href="https://${shortenedUrl}" target="_blank">${shortenedUrl}</a>`;
            copyButton.style.display = 'inline-block';
        })
        .catch(err => {
            errorMessage.innerText = 'An error occurred, please try again.';
            errorMessage.style.display = 'block';
        });
}

function copyToClipboard() {
    const shortenedUrl = document.getElementById('shortened-url').innerText.split(': ')[1];
    navigator.clipboard.writeText(shortenedUrl).then(() => {
        alert("Shortened URL copied to clipboard!");
    });
}
document.getElementById("clickButton").addEventListener("click", function() {
    alert("Button clicked!");
});
